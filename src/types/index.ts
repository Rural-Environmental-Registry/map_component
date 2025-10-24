import { MapOptions, Layer, PathOptions, ControlOptions, ControlPosition } from 'leaflet'
import { GeoJsonObject } from 'geojson'

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
  geojson?: GeoJsonObject | GeoJsonObject[]
  layers: string
  format: string
  transparent: boolean
  name: string
  activeDefault: boolean
  cqlFilter?: string
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

export type MapConfigConfig = MapOptions & { id: string, removeControlLayers?: boolean, zoomControlPosition?: ControlPosition }

export type MapConfig = {
  config?: MapConfigConfig
}

export type LayersMenuConfig = {
  size: 'small' | 'medium' | 'large',
  removeMenu?: boolean
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

export type DrawingConfig = DrawingControlOptions & DisplayDrawingControl

export type TranslationConfig = {
  lang?: PM.SupportLocales
  customTexts?: PM.Translations
}

export type GeomanDrawingEvent = {
  shape: PM.SUPPORTED_SHAPES
  layer: Layer
  [key: string]: any
}

export type ToolbarOptions = {
  [K in PM.ToolbarOptions]: ControlOptions | PM.BlockPositions | boolean | PathOptions | undefined
}

export type PMToolbarOptions = PM.ToolbarOptions

export type DrawingControlOptions = {
  options: ToolbarOptions
  translation: TranslationConfig
}

type DisplayDrawingControl = {
  show: boolean
}

export type PMSupportedShapes = PM.SUPPORTED_SHAPES

export type CoordinatePanelTexts = {
  title?: string
  addPoint?: string
  editPoint?: string
  removePoint?: string
  actions?: string
  clearGeometries?: string
  index?: string
  x?: string
  y?: string
  azimuth?: string
  distance?: string
  noPoints?: string
  addPointTitle?: string
  editPointTitle?: string
  removePointTitle?: string
  clearGeometriesTitle?: string
  addPointDescription?: string
  editPointDescription?: string
  removePointDescription?: string
  clearGeometriesDescription?: string
  memorialDescriptive?: string
  referenceSystem?: string
  selectSystem?: string
  sirgas2000?: string
  coordinateFormat?: string
  selectFormat?: string
  decimalDegrees?: string
  degreesMinutesSeconds?: string
  manualInput?: string
  insertCoordinates?: string
  xLongitude?: string
  yLatitude?: string
  degrees?: string
  minutes?: string
  seconds?: string
  addedPoints?: string
  finalizeGeometry?: string
  csvUpload?: string
  csvFileUpload?: string
  dragCsvFile?: string
  csvColumnsInfo?: string
  applyCsvCoordinates?: string
  placeholderLongitude?: string
  placeholderLatitude?: string
  placeholderAzimuth?: string
  placeholderDistance?: string
  placeholderDegrees?: string
  placeholderMinutes?: string
  placeholderSeconds?: string
  errorXYRequired?: string
  errorDegreesRequired?: string
  errorFirstRowXY?: string
  errorProvideCoordinatesOrAzimuthDistance?: string
}

export type DescriptiveMemorial = {
  show: boolean,
  customTexts?: CoordinatePanelTexts
}