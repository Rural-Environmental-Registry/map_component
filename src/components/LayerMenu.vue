<template>
  <div :class="customClasses.layerMenu">
    <ElButton
      :class="customClasses.menuButton"
      @click="isMenuOpen = !isMenuOpen"
    >
      <FontAwesomeIcon :iconName="iconButton" />
    </ElButton>
    <ElMenu :class="customClasses.customMenu" mode="vertical">
      <template v-for="group in props.data.groups">
        <ParentMenu
          :data="group"
          @onChildVisibilityChange="onChildLayerChange"
          @onParentVisibilityChange="onParentLayerChange"
        />
      </template>
    </ElMenu>
  </div>
</template>

<script setup lang="ts">
  import { ElButton, ElMenu } from 'element-plus'
  import L from 'leaflet'
  import { computed, ref } from 'vue'
  import { ChildLayer, LayersConfig, ParentLayer } from '../types'
  import FontAwesomeIcon from './FontAwesomeIcon.vue'
  import ParentMenu from './car-menu/ParentMenu.vue'

  type MenuProps = {
    data: LayersConfig
    map: L.Map
    layerControl: L.Control.Layers
  }

  type ConvertedLayers = {
    [key: string]: L.TileLayer
  }

  const emit = defineEmits<{
    (e: 'startLoading'): void
    (e: 'stopLoading'): void
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
      layerMenu: `layer-menu layer-menu-${props.data.menu.size}`,
      menuButton: `map-menu-button map-menu-button-${status}`,
      customMenu: `map-custom-menu map-custom-menu-${status}`
    }
  })

  type IconButton = 'chevron-left' | 'chevron-right'

  const iconButton = computed((): IconButton => {
    return isMenuOpen.value ? 'chevron-left' : 'chevron-right'
  })

  const onChildLayerChange = (layer: ChildLayer): void => {
    handleWmsLayer(layer)
  }

  const onParentLayerChange = (parent: ParentLayer): void => {
    parent.layers.forEach((childLayer: ChildLayer) =>
      handleWmsLayer(childLayer)
    )
  }

  const convertToWmsLayer = (layer: ChildLayer): L.TileLayer => {
    const wmsLayer = L.tileLayer.wms(layer.baseUrl, {
      layers: layer.layers,
      format: layer.format || 'image/png',
      transparent: layer.transparent,
      attribution: layer.name
    })

    watchLayerStatus(wmsLayer)

    return wmsLayer
  }

  const handleWmsLayer = (layer: ChildLayer): void => {
    if (convertedLayers.value[layer.key]) {
      if (layer.active) return

      return removeWmsLayer(layer)
    }

    const wmsLayer = convertToWmsLayer(layer)
    convertedLayers.value[layer.key] = wmsLayer

    wmsLayer.addTo(props.map)
    props.layerControl.addOverlay(wmsLayer, `${wmsLayer.options.attribution}`)
  }

  const removeWmsLayer = (layer: ChildLayer): void => {
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
