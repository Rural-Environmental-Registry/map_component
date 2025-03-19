<template>
  <div class="map-container">
    <Loading :isLoading="isLoading" />
    <LayerMenu
      v-if="mapRef"
      :layers="layers.customLayers"
      :options="{size: 'medium'}"
      :map="mapRef.map"
      :layerControl="mapRef.layerControl"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
    />
    <Map
      ref="mapRef"
      :layers="layers"
      :mapOptions="config"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import LayerMenu from './menu/LayerMenu.vue'
  import Map from './map/LeafletMap.vue'
  import Loading from './loading/Loading.vue'

  type MapaDPGProps = {
    layers: any,
    config: any
  }
  
  defineProps<MapaDPGProps>()
  
  type MapRef = {
    map: L.Map
    layerControl: L.Control.Layers
  }

  const mapRef = ref<MapRef>()

  const isLoading = ref<boolean>(false)
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
