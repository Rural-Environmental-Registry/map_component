<template>
  <div id="map" />
</template>

<script setup lang="ts">
  import L from 'leaflet'
  import 'leaflet-draw'
  import { onMounted, ref } from 'vue'
  import BaseMap from '../layers/baseLayer.json'
  import type {
    BaseMapLayer,
    GestaoAtivosShape,
    MapConfigurations,
    MapOptions
  } from '../types/index'
  import { GestaoAtivosHandler } from '../usecases/GestaoAtivosHandler'

  type MapaDPGProps = {
    config: MapConfigurations
  }

  const DEFAULT_MAP_OPTIONS: MapOptions = {
    zoomControl: false,
    minZoom: 3,
    maxZoom: 17,
    center: [-15.235, -51.9253],
    zoom: 4
  }

  const emit = defineEmits<{
    (
      e: 'onDrawingChange',
      shapes: GestaoAtivosShape | GestaoAtivosShape[]
    ): void
    (e: 'startLoading'): void
    (e: 'stopLoading'): void
  }>()

  const props = defineProps<MapaDPGProps>()

  const map = ref<L.Map>()
  const layerControl = ref<L.Control.Layers>()

  onMounted(() => {
    const mapOptions: MapOptions =
      props.config.mapOptions || DEFAULT_MAP_OPTIONS

    initMap(mapOptions)
  })

  const addControls = (): void => {
    map.value!.addControl(L.control.zoom({ position: 'topright' }))

    layerControl.value = L.control.layers().addTo(map.value!)
  }

  const addBaseLayer = (): void => {
    const DEFAULT_MAP_LAYER: BaseMapLayer[] = BaseMap.baseMap

    const baseMap = props.config.baseLayer?.baseMap || DEFAULT_MAP_LAYER

    baseMap.forEach((layer: BaseMapLayer) => {
      const tileLayer = L.tileLayer(layer.url, {
        attribution: `© ${layer.name}`
      })

      watchLayerStatus(tileLayer)

      if (layer.default) {
        tileLayer.addTo(map.value!)
      }

      layerControl.value!.addBaseLayer(tileLayer, layer.name)
    })
  }

  const addGestaoAtivosDrawingControls = (): void => {
    const gestaoAtivosHandler = new GestaoAtivosHandler()

    const { featureGroup, control } = gestaoAtivosHandler.init()

    map.value!.addLayer(featureGroup)
    map.value!.addControl(control)

    map.value!.on(L.Draw.Event.CREATED, (e: L.LeafletEvent) => {
      featureGroup.addLayer(e.layer)
      emit('onDrawingChange', gestaoAtivosHandler.handleCreatedShape(e))
    })

    map.value!.on(L.Draw.Event.EDITED, (e: L.LeafletEvent) => {
      emit('onDrawingChange', gestaoAtivosHandler.handleEditedShapes(e))
    })

    map.value!.on(L.Draw.Event.DELETED, (e: L.LeafletEvent) => {
      emit('onDrawingChange', gestaoAtivosHandler.handleDeletedShapes(e))
    })
  }

  const initMap = (mapOptions: MapOptions): void => {
    map.value = L.map('map', {
      zoomControl: mapOptions.zoomControl,
      minZoom: mapOptions.minZoom,
      maxZoom: mapOptions.maxZoom
    }).setView(mapOptions.center, mapOptions.zoom)

    addControls()

    addBaseLayer()

    addGestaoAtivosDrawingControls()
    setTimeout(() => {
      map.value!.invalidateSize()
    }, 300)
  }

  const watchLayerStatus = (tileLayer: L.TileLayer): void => {
    tileLayer.on('loading', () => {
      emit('startLoading')
    })

    tileLayer.on('load', () => {
      emit('stopLoading')
    })

    tileLayer.on('error', () => {
      emit('stopLoading')
    })
  }

  defineExpose({
    map,
    layerControl
  })
</script>

<style>
  .map-container {
    #map {
      height: inherit;
      width: inherit;
    }
  }
</style>
