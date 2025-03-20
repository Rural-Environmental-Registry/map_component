<template>
  <div :class="customClasses.layerMenu">
    <ElButton
      :class="customClasses.menuButton"
      @click="isMenuOpen = !isMenuOpen"
    >
      <FontAwesomeIcon :iconName="iconButton" />
    </ElButton>
    <ElMenu :class="customClasses.customMenu" mode="vertical">
      <template v-for="layers in props.layers">
        <ParentMenu
          :data="layers"
          @onChildLayerToggle="onChildLayerChange"
          @onGroupLayerToggle="onGroupLayerToggle"
        />
      </template>
    </ElMenu>
  </div>
</template>

<script setup lang="ts">
  import { ElButton, ElMenu } from 'element-plus'
  import L from 'leaflet'
  import { computed, ref } from 'vue'
  import FontAwesomeIcon from '../fa-icon/FontAwesomeIcon.vue'
  import ParentMenu from './ParentMenu.vue'

  type MenuProps = {
    layers: any
    options: any
    map: L.Map
    layerControl: L.Control.Layers
  }

  type ConvertedLayers = {
    [key: string]: L.TileLayer
  }

  const emit = defineEmits<{
    (e: 'startLoading'): void
    (e: 'stopLoading'): void
    (e: 'onChildLayerToggle'): any
    (e: 'onGroupLayerToggle'): any
  }>()

  const props = defineProps<MenuProps>()

  const isMenuOpen = ref<boolean>(false)
  const convertedLayers = ref<ConvertedLayers>({})

  type CustomClasses = {
    layerMenu: string
    menuButton: string
    customMenu: string
  }

  const customClasses = computed((): CustomClasses => {
    const status = isMenuOpen.value ? 'open' : 'close'
    return {
      layerMenu: `layer-menu layer-menu-${props.options.size}`,
      menuButton: `map-menu-button map-menu-button-${status}`,
      customMenu: `map-custom-menu map-custom-menu-${status}`
    }
  })

  type IconButton = 'chevron-left' | 'chevron-right'

  const iconButton = computed((): IconButton => {
    return isMenuOpen.value ? 'chevron-left' : 'chevron-right'
  })

  const onChildLayerChange = (layer: any): void => {
    handleWmsLayer(layer)
    emit('onChildLayerToggle', layer)
  }

  const onGroupLayerToggle = (parent: any): void => {
    parent.layers.forEach((childLayer: any) => handleWmsLayer(childLayer))

    emit('onGroupLayerToggle', parent)
  }

  const convertToWmsLayer = (layer: any): L.TileLayer => {
    const wmsLayer = L.tileLayer.wms(layer.baseUrl, {
      layers: layer.layers,
      format: layer.format || 'image/png',
      transparent: layer.transparent,
      attribution: layer.name
    })

    watchLayerStatus(wmsLayer)

    return wmsLayer
  }

  const handleWmsLayer = (layer: any): void => {
    if (convertedLayers.value[layer.key]) {
      if (!layer.active) return removeWmsLayer(layer)
    }

    if (!layer.active) return

    const wmsLayer = convertToWmsLayer(layer)
    convertedLayers.value[layer.key] = wmsLayer

    wmsLayer.addTo(props.map)
    props.layerControl.addOverlay(wmsLayer, `${wmsLayer.options.attribution}`)
  }

  const removeWmsLayer = (layer: any): void => {
    props.map.removeLayer(convertedLayers.value[layer.key])
    props.layerControl.removeLayer(convertedLayers.value[layer.key])

    delete convertedLayers.value[layer.key]
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
</script>

<style>
  .layer-menu > .map-custom-menu,
  .layer-menu > .map-menu-button {
    position: absolute;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    z-index: 1001;
    transition: var(--mapa-base-transition);
  }

  .layer-menu > .map-custom-menu {
    box-shadow: var(--mapa-base-box-shadow);
    padding: var(--mapa-size-base-10);
    overflow-y: scroll;
    scrollbar-width: none;
    height: 100%;
  }

  .layer-menu > .map-menu-button {
    height: var(--mapa-size-base-40);
    width: var(--mapa-size-base-40);
    border-radius: 0 var(--mapa-size-base-20) var(--mapa-size-base-20) 0;
    color: var(--mapa-base-green);

    &:hover {
      background-color: var(--mapa-base-white);
      color: var(--mapa-base-green);
      border-color: var(--mapa-base-white);
    }
  }
</style>
