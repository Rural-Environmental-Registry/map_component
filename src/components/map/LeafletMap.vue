<template>
  <div
    :id="mapOptions.config.id || 'map'"
    style="height: inherit; width: inherit"
  />
</template>

<script setup lang="ts">
  import L from 'leaflet'
  import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
  import DrawingControlHandler from '../../handlers/drawingControl'
  import MapHandler from '../../handlers/mapHandler'
  import MapToolsHandler from '../../handlers/mapToolsHandler'
  import { resolveMapToolsConfig } from '../../handlers/toolsConstants'
  import {
    DrawingConfig,
    DrawingEvent,
    MapConfig,
    MapLayers,
    MapToolsConfig,
    MeasureCompleteEvent,
    MemorialConfig
  } from '../../types'

  const emit = defineEmits<{
    (e: 'startLoading'): void
    (e: 'stopLoading'): void
    (e: 'onDrawing', data: DrawingEvent): void
    (e: 'onFullscreenChange', active: boolean): void
    (e: 'onMeasureComplete', data: MeasureCompleteEvent): void
  }>()

  type MapProps = {
    mapOptions: MapConfig
    layers: MapLayers
    drawingOptions?: DrawingConfig
    memorialOptions?: MemorialConfig
    toolsOptions?: MapToolsConfig
    fullscreenContainer?: HTMLElement | null
  }

  const props = defineProps<MapProps>()

  const map = ref<L.Map>()
  const layerControl = ref<L.Control.Layers>()
  const drawItemsGroup = ref<L.FeatureGroup>()

  let mapHandlerInstance: MapHandler | null = null
  let mapToolsHandler: MapToolsHandler | null = null

  onMounted(async () => {
    initMap()
    if (props.drawingOptions?.show) handleDrawingControls()
    await nextTick()
    handleMapTools()
    await nextTick()
    mapToolsHandler?.alignTopRightControls()
  })

  onBeforeUnmount(() => {
    mapToolsHandler?.destroy()
    mapToolsHandler = null
  })

  const initMap = (): void => {
    const { config } = props.mapOptions

    mapHandlerInstance = new MapHandler(config)

    const emitterCallback = (eventName: string) => {
      if (eventName === 'startLoading') emit('startLoading')
      if (eventName === 'stopLoading') emit('stopLoading')
    }

    mapHandlerInstance.init(props.layers, emitterCallback)

    map.value = mapHandlerInstance.map
    layerControl.value = mapHandlerInstance.layerControl
  }

  const resolveFullscreenContainer = (): HTMLElement | null => {
    if (props.fullscreenContainer) return props.fullscreenContainer
    const fromMap = map.value?.getContainer()?.closest('.map-container')
    return fromMap instanceof HTMLElement ? fromMap : null
  }

  const handleMapTools = (): void => {
    const fullscreenContainer = resolveFullscreenContainer()
    if (!resolveMapToolsConfig(props.toolsOptions) || !map.value || !fullscreenContainer) return

    mapToolsHandler = new MapToolsHandler(
      map.value,
      props.toolsOptions,
      mapHandlerInstance!.initialView,
      drawItemsGroup.value ?? null,
      fullscreenContainer,
      {
        onFullscreenChange: (active) => emit('onFullscreenChange', active),
        onMeasureComplete: (data) => emit('onMeasureComplete', data)
      }
    )
  }

  const handleDrawingControls = (): void => {
    drawItemsGroup.value = new L.FeatureGroup()
    drawItemsGroup.value.addTo(map.value!)

    const drawingControlHandler = new DrawingControlHandler(map.value!, drawItemsGroup.value, props.drawingOptions)

    map.value!.pm.addControls(drawingControlHandler.options)

    drawingControlHandler.handleDrawingEvents((data: DrawingEvent) => {
      emit('onDrawing', data)
    })

    drawItemsGroup.value = drawingControlHandler.drawItemsGroup
    map.value = drawingControlHandler.map

    mapToolsHandler?.setDrawItemsGroup(drawItemsGroup.value)
  }

  const centerMap = (): void => {
    mapToolsHandler?.centerMap()
  }

  const enterFullscreen = (): void => {
    mapToolsHandler?.enterFullscreen()
  }

  const exitFullscreen = (): void => {
    mapToolsHandler?.exitFullscreen()
  }

  const toggleFullscreen = (): void => {
    mapToolsHandler?.toggleFullscreen()
  }

  const toggleMeasureArea = (): void => {
    mapToolsHandler?.toggleMeasureArea()
  }

  defineExpose({
    map,
    layerControl,
    drawItemsGroup,
    leaflet: L,
    centerMap,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
    toggleMeasureArea
  })
</script>
