<template>
  <div :class="customClasses.layerMenu">
    <ElButton
      v-if="!props.options?.removeMenu"
      :class="customClasses.menuButton"
      @click="isMenuOpen = !isMenuOpen"
    >
      <FontAwesomeIcon :iconName="iconButton" />
    </ElButton>
    <ElMenu :class="customClasses.customMenu" mode="vertical">
      <div id="external-id-top-menu"></div>
      <template v-for="group in props.layersConfig">
        <ParentMenu
          :groupData="group"
          @onChildLayerToggle="onChildLayerChange"
          @onGroupLayerToggle="onGroupLayerToggle"
        />
      </template>
      <div id="external-id-bottom-menu"></div>
    </ElMenu>
  </div>
</template>

<script setup lang="ts">
  import { ElButton, ElMenu } from 'element-plus'
  import L from 'leaflet'
  import { computed, ref } from 'vue'
  import FontAwesomeIcon from '../fa-icon/FontAwesomeIcon.vue'
  import ParentMenu from './ParentMenu.vue'
  import {
    GroupLayerData,
    LayerData,
    LayersConfig,
    LayersMenuConfig
  } from '../../types'

  type MenuProps = {
    layersConfig: LayersConfig
    options?: LayersMenuConfig
    map: L.Map
    layerControl: L.Control.Layers
  }

  type ConvertedLayers = {
    [key: string]: L.TileLayer
  }

  type ConvertedGeoJsonLayers = {
    [key: string]: L.GeoJSON
  }

  const emit = defineEmits<{
    (e: 'startLoading'): void
    (e: 'stopLoading'): void
    (e: 'onChildLayerToggle', data: LayerData): void
    (e: 'onGroupLayerToggle', data: GroupLayerData): void
  }>()

  const props = defineProps<MenuProps>()

  const isMenuOpen = ref<boolean>(false)
  const convertedLayers = ref<ConvertedLayers>({})
  const convertedGeoJsonLayers = ref<ConvertedGeoJsonLayers>({})

  type CustomClasses = {
    layerMenu: string
    menuButton: string
    customMenu: string
  }

  const customClasses = computed((): CustomClasses => {


    const status = isMenuOpen.value ? 'open' : 'close'
    return {
      layerMenu: `layer-menu layer-menu-${props.options?.size || 'medium'}`,
      menuButton: `map-menu-button map-menu-button-${status}`,
      customMenu: `map-custom-menu map-custom-menu-${status}`
    }
  })

  type IconButton = 'chevron-left' | 'chevron-right'

  const iconButton = computed((): IconButton => {
    return isMenuOpen.value ? 'chevron-left' : 'chevron-right'
  })

  const onChildLayerChange = (layer: LayerData): void => {

    if(layer.geojson){
      handleGeoJsonLayer(layer)
    }else{
      handleWmsLayer(layer)
    }
    
    emit('onChildLayerToggle', layer)
  }

  const onGroupLayerToggle = (parent: GroupLayerData): void => {
    
    parent.layers.forEach((childLayer: LayerData) => {
      if(childLayer.geojson){
        handleGeoJsonLayer(childLayer)
      }else{
        handleWmsLayer(childLayer)
      }
    })

    emit('onGroupLayerToggle', parent)
  }

  const convertToWmsLayer = (layer: LayerData): L.TileLayer => {
    const wmsLayer = L.tileLayer.wms(layer.baseUrl, {
      layers: layer.layers,
      format: layer.format || 'image/png',
      transparent: layer.transparent 
    })
   
    if (layer?.cqlFilter && layer.cqlFilter.length > 0) {
      wmsLayer.setParams({ 
        cql_filter: layer.cqlFilter 
      } as any) 
    } 
 
    watchLayerStatus(wmsLayer) 
    
    return wmsLayer
  }

  const handleWmsLayer = (layer: LayerData): void => {
    if (convertedLayers.value[layer.key]) {
      if (!layer.active) return removeWmsLayer(layer)
    }

    if (!layer.active) return

    const wmsLayer = convertToWmsLayer(layer)
    convertedLayers.value[layer.key] = wmsLayer

    wmsLayer.addTo(props.map)
    props.layerControl.addOverlay(wmsLayer, `${wmsLayer.options.attribution}`)
  }

  const removeWmsLayer = (layer: LayerData): void => {
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

  const convertToGeojsonLayer = (layer: LayerData): L.GeoJSON => {
   const geojsonLayer = L.geoJSON(layer.geojson, {
     ...layer,
      style: layer.style,
    })

    watchGeoJsonLayerStatus(geojsonLayer)
    
    return geojsonLayer

}

  const handleGeoJsonLayer = (layer: LayerData): void => {
    if (convertedGeoJsonLayers.value[layer.key]) {
      if (!layer.active) return removeGeoJsonLayer(layer)
    }

    if (!layer.active) return

    const geoJsonLayer = convertToGeojsonLayer(layer)
    convertedGeoJsonLayers.value[layer.key] = geoJsonLayer

    geoJsonLayer.addTo(props.map)
    props.layerControl.addOverlay(geoJsonLayer, `${geoJsonLayer.options.attribution}`)
  }

  const removeGeoJsonLayer = (layer: LayerData): void => {
    props.map.removeLayer(convertedGeoJsonLayers.value[layer.key])
    props.layerControl.removeLayer(convertedGeoJsonLayers.value[layer.key])

    delete convertedGeoJsonLayers.value[layer.key]
  }

  const watchGeoJsonLayerStatus = (geoJsonLayer: L.GeoJSON): void => {
    geoJsonLayer.on('loading', () => {
      emit('startLoading')
    })

    geoJsonLayer.on('load', () => {
      emit('stopLoading')
    })

    geoJsonLayer.on('error', () => {
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
