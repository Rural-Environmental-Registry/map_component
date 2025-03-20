<template>
  <div class="map-container">
    <Loading :isLoading="isLoading || showLoading" />
    <LayerMenu
      v-if="mapRef"
      :layers="layers.customLayers"
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
      :showDrawingControls="options.drawing?.show"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
      @onDrawing="emit('onDrawing', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import LayerMenu from './menu/LayerMenu.vue'
  import Map from './map/LeafletMap.vue'
  import Loading from './loading/Loading.vue'

  type MapaDPGProps = {
    layers: any
    options: any
    showLoading: boolean
  }

  defineProps<MapaDPGProps>()

  const emit = defineEmits<{
    (e: 'onGroupLayerToggle'): any
    (e: 'onChildLayerToggle'): any
    (e: 'onDrawing'): any
  }>()

  type MapRef = {
    map: L.Map
    layerControl: L.Control.Layers
  }

  const mapRef = ref<MapRef>()

  const isLoading = ref<boolean>(false)

  const log = (data: any): void => {
    console.log(data)
  }

  defineExpose({
    map: computed(() => mapRef.value?.map),
    layerControl: computed(() => mapRef.value?.layerControl),
    drawControl: computed(() => mapRef.value?.drawControl),
    drawItemsGroup: computed(() => mapRef.value?.drawItemsGroup)
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
