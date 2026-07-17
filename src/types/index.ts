import { MapOptions, Layer, PathOptions, ControlOptions, ControlPosition } from 'leaflet'
import { GeoJsonObject } from 'geojson'

// @ts-ignore
import { PM } from '@geoman-io/leaflet-geoman-free'

export type FaIconName =
  | 'check'
  | 'xmark'
  | 'chevron-right'
  | 'chevron-left'
  | 'terminal'
  | 'file-lines'
  | 'upload'
  | 'pencil'
  | 'trash'
  | 'chevron-down'

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
  tms?: boolean
  minZoom?: number
  maxZoom?: number
  maxNativeZoom?: number
  errorTileUrl?: string
  minZoomWarning?: number | null
}

export type BaseMapLayers = BaseMapLayer[]

export type MapLayers = {
  mapLayers: BaseMapLayers
  customLayers?: LayersConfig
}

export type MapConfigConfig = MapOptions & {
  id: string
  removeControlLayers?: boolean
  zoomControlPosition?: ControlPosition
  /** Reposiciona marcadores após zoom (evita drift de divIcon). Padrão: true. */
  stabilizeMarkersOnZoom?: boolean
}

export type MapConfig = {
  config?: MapConfigConfig
}

export type LayersMenuConfig = {
  size: 'small' | 'medium' | 'large'
  removeMenu?: boolean
  persist: boolean
}

export type MemorialConfig = {
  show: boolean
  config?: any
  controlTexts?: any
}

export type MapToolsConfig = {
  show?: boolean
  position?: ControlPosition
  zoom?: { show?: boolean; titleIn?: string; titleOut?: string }
  fullscreen?: { show?: boolean; title?: string }
  center?: {
    show?: boolean
    title?: string
    target?: 'drawn' | 'initial'
    padding?: [number, number]
  }
  measureArea?: {
    show?: boolean
    title?: string
    shapeOptions?: PathOptions
  }
  measureLine?: {
    show?: boolean
    title?: string
  }
  measurePolygon?: {
    show?: boolean
    title?: string
  }
  texts?: {
    measureResult?: string
    measureLength?: string
    measureArea?: string
    measureCancel?: string
    measureFinish?: string
    measurePanelTitle?: string
    measureLineTitle?: string
    measurePolygonTitle?: string
    measureLineHelp?: string
    measurePolygonHelp?: string
    noGeometry?: string
  }
}

export type MeasureCompleteEvent = {
  m2?: number
  km2?: number
  ha?: number
  lengthM?: number
  lengthKm?: number
  geojson: GeoJsonObject
}

export type MapOptionsConfig = {
  layersMenu?: LayersMenuConfig
  map: MapConfig
  drawing?: DrawingConfig
  tools?: MapToolsConfig
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
  shapefileUpload?: string
  shapefileFileUpload?: string
  dragShapefileZip?: string
  shapefileZipInfo?: string
  shapefileAppliedSuccess?: string
  geometryImportUnsupportedFormat?: string
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
  show: boolean
  customTexts?: CoordinatePanelTexts
}
