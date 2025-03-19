<template>
  <div v-if="isLoading" class="map-loading">
    <img src="../../assets/icons/loading.gif" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{ isLoading: boolean }>()
</script>

<style>
  .map-container .map-loading {
    position: absolute;
    inset: 0px;
    backdrop-filter: blur(var(--mapa-size-base-2));
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--mapa-base-backdrop);
    z-index: 1500;
  }
</style>
