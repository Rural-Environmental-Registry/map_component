<template>
  <div class="map-container">
    <Loading :isLoading="isLoading" />
    <LayerMenu
      v-if="config.layers?.menu.show && mapRef"
      :data="config.layers"
      :map="mapRef.map"
      :layerControl="mapRef.layerControl"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
    />
    <Map
      ref="mapRef"
      :config="config"
      @startLoading="isLoading = true"
      @stopLoading="isLoading = false"
      @onDrawingChange="$emit('onDrawingChange', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { GestaoAtivosShape, MapConfigurations } from '../types/index'
  import LayerMenu from './LayerMenu.vue'
  import Map from './LeafletMap.vue'
  import Loading from './Loading.vue'

  type MapaDPGProps = {
    config: MapConfigurations
  }

  type MapRef = {
    map: L.Map
    layerControl: L.Control.Layers
  }

  defineEmits<{ onDrawingChange: [GestaoAtivosShape | GestaoAtivosShape[]] }>()

  defineProps<MapaDPGProps>()

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
