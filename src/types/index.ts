import { Localization, MapOptions } from 'leaflet'

export type FaIconName = 'check' | 'xmark' | 'chevron-right' | 'chevron-left' | 'terminal' | 'file-lines' | 'upload' | 'pencil' | 'trash' | 'chevron-down'

export type DrawnArea = {
  m2: number
  km2: number
  ha: number
}

export type LeafletDrawCreateEvent = L.LeafletEvent & {
  layer: L.Layer
  layerType: string
}

export type LeafletDrawEditEvent = L.LeafletEvent & {
  layers: L.FeatureGroup
}

export type LeafletDrawDeleteEvent = L.LeafletEvent & {
  layers: L.FeatureGroup
}

export type IncrementedCreateLayer = LeafletDrawCreateEvent & {
  layer: L.Layer & { drawnArea: DrawnArea }
}

export type IncrementedEditLayer = L.Layer & {
  drawnArea: DrawnArea
  getLatLngs: () => L.LatLng[][]
}

export type LayerData = {
  baseUrl: string
  layers: string
  format: string
  transparent: boolean
  name: string
  activeDefault: boolean
  active: boolean
  key: string
  toggle: {
    active: string
    inactive: string
  }
  style: {
    color: string
    fillColor: string
  }
  options?: any
}

export type GroupLayerData = {
  name: string
  key: string
  toggle: {
    active: string
    inactive: string
  }
  layers: LayerData[]
}

export type LayersConfig = GroupLayerData[]

export type DrawingEvent = {
  type: 'created' | 'edited' | 'deleted'
  layer?: L.Layer
  layers?: L.Layer[]
}

export type BaseMapLayer = {
  name: string
  key: string
  default: boolean
  url: string
}

export type BaseMapLayers = BaseMapLayer[]

export type MapLayers = {
  mapLayers: BaseMapLayers
  customLayers?: LayersConfig
}

export type MapConfig = {
  config?: MapOptions
}

export type LayersMenuConfig = {
  size: 'small' | 'medium' | 'large'
}

export type DrawingConfig = {
  show: boolean
  config?: L.Control.DrawConstructorOptions
  controlTexts?: Localization.DrawLocal
}

export type MemorialConfig = {
  show: boolean
  config?: L.Control.DrawConstructorOptions
  controlTexts?: Localization.DrawLocal
}

export type MapOptionsConfig = {
  layersMenu?: LayersMenuConfig
  map: MapConfig
  drawing?: DrawingConfig
}
