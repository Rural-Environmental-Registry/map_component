<template>
  <div :id="mapOptions.config.id || 'map'"  style="height: inherit; width: inherit;"/>
</template>

<script setup lang="ts">
  import L from 'leaflet'
  import { onMounted, ref } from 'vue'
  import DrawingControlHandler from '../../handlers/drawingControl'
  import MapHandler from '../../handlers/mapHandler'
  import {
    DrawingConfig,
    DrawingEvent,
    MapConfig,
    MemorialConfig,
    MapLayers
  } from '../../types'

  const emit = defineEmits<{
    (e: 'startLoading'): void
    (e: 'stopLoading'): void
    (e: 'onDrawing', data: DrawingEvent): void
  }>()

  type MapProps = {
    mapOptions: MapConfig
    layers: MapLayers
    drawingOptions?: DrawingConfig
    memorialOptions?: MemorialConfig
  }

  const props = defineProps<MapProps>()

  const map = ref<L.Map>()
  const layerControl = ref<L.Control.Layers>()
  const drawItemsGroup = ref<L.FeatureGroup>()

  onMounted(() => {
    initMap()

    if (props.drawingOptions?.show) handleDrawingControls()
  })

  const initMap = (): void => {
    const { config } = props.mapOptions

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
    drawItemsGroup.value.addTo(map.value!)

    const drawingControlHandler = new DrawingControlHandler(
      map.value!,
      drawItemsGroup.value,
      props.drawingOptions
    )

    map.value!.pm.addControls(drawingControlHandler.options)

    drawingControlHandler.handleDrawingEvents((data: DrawingEvent) => {
      emit('onDrawing', data)
    })

    drawItemsGroup.value = drawingControlHandler.drawItemsGroup
    map.value = drawingControlHandler.map
  }

  defineExpose({
    map,
    layerControl,
    drawItemsGroup,
    leaflet: L
  })
</script>
