<template>
  <div
    ref="mapContainerRef"
    class="map-container"
  >
    <Loading :isLoading="(isLoading || showLoading) && !disableLoading" />
    <LayerMenu
      v-if="mapRef && layers?.customLayers"
      :layerControl="mapRef.layerControl"
      :layersConfig="layers.customLayers"
      :map="mapRef.map"
      :options="options.layersMenu"
      @onChildLayerToggle="emit('onChildLayerToggle', $event)"
      @onGroupLayerToggle="emit('onGroupLayerToggle', $event)"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
    />
    <Map
      ref="mapRef"
      :drawingOptions="options.drawing"
      :fullscreenContainer="mapContainerRef"
      :layers="layers"
      :mapOptions="options.map"
      :toolsOptions="options.tools"
      @onDrawing="emit('onDrawing', $event)"
      @onFullscreenChange="emit('onFullscreenChange', $event)"
      @onMeasureComplete="emit('onMeasureComplete', $event)"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
    />
    <CoordinatePanel
      v-if="mapRef && descriptiveMemorial.show"
      ref="coordinatePanelRef"
      :descriptiveMemorial="descriptiveMemorial"
      :map="mapRef.map"
      @geometryChange="handleGeometryChange"
      @geometryGeoJsonChange="handleGeometryGeoJsonChange"
      @geometryRemoved="handleGeometryRemoved"
      @systemChange="handleCoordinateSystemChange"
    />
  </div>
</template>

<script lang="ts" setup>
  import L from 'leaflet'
  import { computed, ref } from 'vue'
  import {
    DrawingEvent,
    GroupLayerData,
    LayerData,
    MapLayers,
    MapOptionsConfig,
    DescriptiveMemorial,
    MeasureCompleteEvent
  } from '../types'
  import Loading from './loading/Loading.vue'
  import Map from './map/LeafletMap.vue'
  import LayerMenu from './menu/LayerMenu.vue'
  import CoordinatePanel from './coordinate/CoordinatePanel.vue'
  import { isMemorialLayer, MEMORIAL_KEY } from '../utils/memorialLayer'
  import type { Feature, MultiPolygon, Polygon } from 'geojson'

  type MapaDPGProps = {
    layers: MapLayers
    options: MapOptionsConfig
    showLoading: boolean
    disableLoading: boolean
    descriptiveMemorial: DescriptiveMemorial
  }

  withDefaults(defineProps<MapaDPGProps>(), {
    options: () => ({
      map: {},
      layersMenu: {
        size: 'medium',
        persist: false
      }
    }),
    descriptiveMemorial: () => ({
      show: false
    })
  })

  const emit = defineEmits<{
    (e: 'onGroupLayerToggle', data: GroupLayerData): void
    (e: 'onChildLayerToggle', data: LayerData): void
    (e: 'onDrawing', data: DrawingEvent): void
    (e: 'onCoordinateSystemChange', system: string): void
    (e: 'onFullscreenChange', active: boolean): void
    (e: 'onMeasureComplete', data: MeasureCompleteEvent): void
  }>()

  type MapRef = {
    map: L.Map
    layerControl: L.Control.Layers
    drawControl: L.Control.Draw
    drawItemsGroup: L.FeatureGroup
    leaflet: typeof L
    centerMap: () => void
    enterFullscreen: () => void
    exitFullscreen: () => void
    toggleFullscreen: () => void
    toggleMeasureArea: () => void
  }

  const mapRef = ref<MapRef>()
  const mapContainerRef = ref<HTMLElement | null>(null)
  const coordinatePanelRef = ref()
  const isLoading = ref<boolean>(false)

  const handleCoordinateSystemChange = (system: string) => {
    emit('onCoordinateSystemChange', system)
  }

  const handleGeometryChange = (geometry: string) => {
    if (!mapRef.value?.map || !mapRef.value?.drawItemsGroup) return

    const coordinates = geometry
      .replace(/[A-Z()]/g, '')
      .trim()
      .split(',')
      .map(coord => {
        const [x, y] = coord.trim().split(' ')
        return [parseFloat(y), parseFloat(x)] as [number, number]
      })

    const polygonColor = (mapRef.value?.drawControl?.options as any)?.draw?.polygon?.shapeOptions?.color || '#3388ff'
    const polylineColor = (mapRef.value?.drawControl?.options as any)?.draw?.polyline?.shapeOptions?.color || '#3388ff'

    let leafletGeometry: L.Layer & { options: { memorialKey?: string } }

    if (geometry.startsWith('POINT')) {
      leafletGeometry = L.marker(coordinates[0])
    } else if (geometry.startsWith('LINESTRING')) {
      leafletGeometry = L.polyline(coordinates as [number, number][], { color: polylineColor })
    } else if (geometry.startsWith('POLYGON')) {
      leafletGeometry = L.polygon(coordinates as [number, number][], { color: polygonColor })
    } else {
      console.error('Tipo de geometria não suportado:', geometry)
      return
    }

    leafletGeometry.options.memorialKey = MEMORIAL_KEY

    mapRef.value.drawItemsGroup.addLayer(leafletGeometry)

    emit('onDrawing', {
      type: 'created',
      layer: leafletGeometry
    })

    if (leafletGeometry instanceof L.Marker) {
      mapRef.value.map.setView(coordinates[0], 15)
    } else if (leafletGeometry instanceof L.Polyline || leafletGeometry instanceof L.Polygon) {
      mapRef.value.map.fitBounds(leafletGeometry.getBounds())
    }
  }

  const removeMemorialLayers = (): L.Layer[] => {
    if (!mapRef.value?.drawItemsGroup) return []

    const layersToRemove: L.Layer[] = []

    mapRef.value.drawItemsGroup.eachLayer(layer => {
      if (isMemorialLayer(layer)) {
        layersToRemove.push(layer)
      }
    })

    layersToRemove.forEach(layer => {
      mapRef.value?.drawItemsGroup.removeLayer(layer)
    })

    return layersToRemove
  }

  const handleGeometryGeoJsonChange = (feature: Feature<Polygon | MultiPolygon>) => {
    if (!mapRef.value?.map || !mapRef.value?.drawItemsGroup) return

    removeMemorialLayers()

    const polygonColor =
      (mapRef.value?.drawControl?.options as any)?.draw?.polygon?.shapeOptions?.color || '#3388ff'

    const leafletGeometry = L.geoJSON(feature, {
      style: { color: polygonColor },
      onEachFeature: (_geoJsonFeature, layer) => {
        ;(layer as L.Layer & { options: { memorialKey?: string } }).options.memorialKey = MEMORIAL_KEY
      }
    }) as L.Layer & { options: { memorialKey?: string } }

    leafletGeometry.options.memorialKey = MEMORIAL_KEY

    mapRef.value.drawItemsGroup.addLayer(leafletGeometry)
    mapRef.value.map.fitBounds(leafletGeometry.getBounds())

    emit('onDrawing', {
      type: 'created',
      layer: leafletGeometry
    })
  }

  const handleGeometryRemoved = () => {
    if (!mapRef.value?.map || !mapRef.value?.drawItemsGroup) return

    const layersToRemove = removeMemorialLayers()

    if (layersToRemove.length > 0) {
      emit('onDrawing', {
        type: 'deleted',
        layers: layersToRemove
      })
    }
  }

  const toggleCoordinatePanel = () => {
    if (coordinatePanelRef.value) {
      coordinatePanelRef.value.togglePanel()
    }
  }

  const closeCoordinatePanel = () => {
    if (coordinatePanelRef.value) {
      coordinatePanelRef.value.closePanel()
    }
  }

  const centerMap = () => {
    mapRef.value?.centerMap()
  }

  const enterFullscreen = () => {
    mapRef.value?.enterFullscreen()
  }

  const exitFullscreen = () => {
    mapRef.value?.exitFullscreen()
  }

  const toggleFullscreen = () => {
    mapRef.value?.toggleFullscreen()
  }

  const toggleMeasureArea = () => {
    mapRef.value?.toggleMeasureArea()
  }

  defineExpose({
    map: computed(() => mapRef.value?.map),
    layerControl: computed(() => mapRef.value?.layerControl),
    drawControl: computed(() => mapRef.value?.drawControl),
    drawItemsGroup: computed(() => mapRef.value?.drawItemsGroup),
    leaflet: computed(() => mapRef.value?.leaflet),
    toggleCoordinatePanel,
    closeCoordinatePanel,
    centerMap,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
    toggleMeasureArea
  })
</script>

<style>
  @import '/src/assets/main.css';

  .map-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--mapa-base-radius-5);
  }

  .map-container--fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
</style>
