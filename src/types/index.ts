export type FaIconName = 'check' | 'xmark' | 'chevron-right' | 'chevron-left'

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

export type CustomMapOptions = L.MapOptions & {
  center: L.LatLng
  zoom: number
}
