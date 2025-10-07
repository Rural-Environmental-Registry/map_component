<template>
  <div class="map-container">
    <Loading :isLoading="(isLoading || showLoading) && !disableLoading" />
    <LayerMenu
      v-if="mapRef && layers?.customLayers"
      :layersConfig="layers.customLayers"
      :options="options.layersMenu"
      :map="mapRef.map"
      :layerControl="mapRef.layerControl"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
      @onChildLayerToggle="emit('onChildLayerToggle', $event)"
      @onGroupLayerToggle="emit('onGroupLayerToggle', $event)"
    />
    <Map
      ref="mapRef"
      :layers="layers"
      :mapOptions="options.map"
      :drawingOptions="options.drawing"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
      @onDrawing="emit('onDrawing', $event)"
    />
    <CoordinatePanel
      v-if="mapRef && descriptiveMemorial.show"
      ref="coordinatePanelRef"
      :map="mapRef.map"
      :customTexts="descriptiveMemorial.customTexts"
      @systemChange="handleCoordinateSystemChange"
      @geometryChange="handleGeometryChange"
      @geometryRemoved="handleGeometryRemoved"
    />
  </div>
</template>

<script setup lang="ts">
  import L from 'leaflet'
  import { computed, ref } from 'vue'
  import {
    DrawingEvent,
    GroupLayerData,
    LayerData,
    MapLayers,
    MapOptionsConfig,
    DescriptiveMemorial
  } from '../types'
  import Loading from './loading/Loading.vue'
  import Map from './map/LeafletMap.vue'
  import LayerMenu from './menu/LayerMenu.vue'
  import CoordinatePanel from './coordinate/CoordinatePanel.vue'

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
        size: 'medium'
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
  }>()

  type MapRef = {
    map: L.Map
    layerControl: L.Control.Layers
    drawControl: L.Control.Draw
    drawItemsGroup: L.FeatureGroup
    leaflet: typeof L
  }

  const mapRef = ref<MapRef>()
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

    leafletGeometry.options.memorialKey = 'memorial'

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

  const handleGeometryRemoved = () => {
    if (!mapRef.value?.map || !mapRef.value?.drawItemsGroup) return

    const layersToRemove: L.Layer[] = []

    mapRef.value.drawItemsGroup.eachLayer((layer) => {
      if ((layer as any).options?.nome === 'memorial') {
        layersToRemove.push(layer)
      }
    })

    layersToRemove.forEach(layer => {
      mapRef.value?.drawItemsGroup.removeLayer(layer)
    })

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

  defineExpose({
    map: computed(() => mapRef.value?.map),
    layerControl: computed(() => mapRef.value?.layerControl),
    drawControl: computed(() => mapRef.value?.drawControl),
    drawItemsGroup: computed(() => mapRef.value?.drawItemsGroup),
    leaflet: computed(() => mapRef.value?.leaflet),
    toggleCoordinatePanel,
    closeCoordinatePanel
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
</style>
