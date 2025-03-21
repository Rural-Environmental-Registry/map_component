<template>
  <div id="map" />
</template>

<script setup lang="ts">
  import L from 'leaflet'
  import 'leaflet-draw'
  import { onMounted, ref } from 'vue'
  import DrawingControlHandler from '../../handlers/drawingControl'
  import { DrawingEvent } from '../../types'
  import MapHandler from '../../handlers/mapHandler'

  const emit = defineEmits<{
    (e: 'startLoading'): void
    (e: 'stopLoading'): void
    (e: 'onDrawing', data: DrawingEvent): void
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
    initMap()

    if (props.drawingOptions?.show) handleDrawingControls()
  })

  const initMap = (): void => {
    const config = props.mapOptions?.config

    const mapHandler = new MapHandler(config)

    const emitterCallback = (eventName: string) => {
      if (eventName === 'startLoading') emit('startLoading')
      if (eventName === 'stopLoading') emit('stopLoading')
    }

    mapHandler.init(props.layers, emitterCallback)

    map.value = mapHandler.map
    layerControl.value = mapHandler.layerControl
  }

  const handleDrawingControls = (): void => {
    drawItemsGroup.value = new L.FeatureGroup()
    map.value!.addLayer(drawItemsGroup.value)

    const drawingControlHandler = new DrawingControlHandler(
      map.value!,
      drawItemsGroup.value,
      props.drawingOptions
    )

    drawControl.value = new L.Control.Draw(drawingControlHandler.options)

    map.value!.addControl(drawControl.value)

    drawingControlHandler.handleDrawingEvents((data: DrawingEvent) => {
      emit('onDrawing', data)
    })

    drawItemsGroup.value = drawingControlHandler.drawItemsGroup
    map.value = drawingControlHandler.map
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
