import { MapOptions, Layer } from 'leaflet'
// @ts-ignore
import { PM } from '@geoman-io/leaflet-geoman-free'

export type FaIconName = 'check' | 'xmark' | 'chevron-right' | 'chevron-left' | 'terminal' | 'file-lines' | 'upload' | 'pencil' | 'trash' | 'chevron-down'

export type DrawnArea = {
  m2: number
  km2: number
  ha: number
}

export type IncrementedLayer = Layer & { drawnArea: DrawnArea }

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
  layer: IncrementedLayer
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

export type MemorialConfig = {
  show: boolean
  config?: any
  controlTexts?: any
}

export type MapOptionsConfig = {
  layersMenu?: LayersMenuConfig
  map: MapConfig
  drawing?: DrawingConfig
}

export type TranslationConfig = {
  lang?: PM.SupportLocales
  customTexts?: PM.Translations
}

export type GeomanDrawingEvent = {
  shape: PM.SUPPORTED_SHAPES
  layer: Layer
  [key: string]: any
}

export type ToolbarOptions = PM.ToolbarOptions

export type DrawingControlOptions = {
  options: ToolbarOptions
  translation: TranslationConfig
}

type DisplayDrawingControl = {
  show: boolean
}

export type DrawingConfig = DrawingControlOptions & DisplayDrawingControl

type DrawingToolsStyleOptions = {
  color?: string
  weight?: number
  fillColor?: string
  fillOpacity?: number
}

export type DrawingToolsStyles = {
  rectangle: DrawingToolsStyleOptions
  polygon: DrawingToolsStyleOptions
  polyline: DrawingToolsStyleOptions
  circle: DrawingToolsStyleOptions
  circleMarker: DrawingToolsStyleOptions
}