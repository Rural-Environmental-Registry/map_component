<template>
  <div id="map" />
</template>

<script setup lang="ts">
  import L from 'leaflet'
  import 'leaflet-draw'
  import { onMounted, ref } from 'vue'
  import BaseMap from '../../assets/layers/mapLayers.json'
  import DrawingControlHandler from '../../handlers/drawingControl'

  const DEFAULT_MAP_OPTIONS: any = {
    zoomControl: false,
    minZoom: 3,
    maxZoom: 17,
    center: [-15.235, -51.9253],
    zoom: 4
  }

  const emit = defineEmits<{
    (e: 'startLoading'): void
    (e: 'stopLoading'): void
    (e: 'onDrawing'): any
  }>()

  // const props = defineProps<any>()
  const props = defineProps({
    mapOptions: Object,
    layers: Object,
    drawingOptions: Object
  })

  const map = ref<L.Map>()
  const layerControl = ref<L.Control.Layers>()
  const drawControl = ref<L.Control.Draw>()
  const drawItemsGroup = ref<L.FeatureGroup>()

  onMounted(() => {
    const mapOptions: any = props.mapOptions?.config || DEFAULT_MAP_OPTIONS

    initMap(mapOptions)

    if (props.drawingOptions?.show) handleDrawingControls()
  })

  const addControls = (): void => {
    map.value!.addControl(L.control.zoom({ position: 'topright' }))

    layerControl.value = L.control.layers().addTo(map.value!)
  }

  const addBaseLayer = (): void => {
    const DEFAULT_MAP_LAYER: any = BaseMap.mapLayers

    const baseMap = props.layers?.mapLayers || DEFAULT_MAP_LAYER

    baseMap.forEach((layer: any) => {
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

  const initMap = (mapOptions: any): void => {
    map.value = L.map('map', {
      zoomControl: mapOptions.zoomControl,
      minZoom: mapOptions.minZoom,
      maxZoom: mapOptions.maxZoom
    }).setView(mapOptions.center, mapOptions.zoom)

    addControls()

    addBaseLayer()

    setTimeout(() => {
      map.value!.invalidateSize()
    }, 300)

    disableLayerControlHover()
  }

  const disableLayerControlHover = (): void => {
    setTimeout(() => {
      const container = document.querySelector(
        '.leaflet-control-layers'
      ) as HTMLElement & {
        _expand: () => void
        _collapse: () => void
      }
      if (!container) return

      const originalExpand =
        (L.DomEvent as any)._originalExpand || container._expand

      L.DomEvent.off(container)

      L.DomEvent.on(container, 'click', function (e) {
        if (container.classList.contains('leaflet-control-layers-expanded')) {
          container._collapse()
        } else if (originalExpand) {
          originalExpand.call(container)
        } else {
          container.classList.add('leaflet-control-layers-expanded')
        }

        L.DomEvent.stopPropagation(e)
        L.DomEvent.preventDefault(e)
      })
      ;(L.DomEvent as any)._originalExpand = originalExpand
    }, 100)
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

  const handleDrawingControls = (): void => {
    const drawingControlHandler = new DrawingControlHandler(
      map.value!,
      props.drawingOptions?.config,
      emitDrawingEvents
    )

    map.value = drawingControlHandler.map
    drawControl.value = drawingControlHandler.drawControl
    drawItemsGroup.value = drawingControlHandler.drawItemsGroup
  }

  const emitDrawingEvents = (data: any): void => {
    emit('onDrawing', data)
  }

  defineExpose({
    map,
    layerControl,
    drawControl,
    drawItemsGroup
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
