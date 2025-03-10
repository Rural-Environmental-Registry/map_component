import { LatLngExpression } from 'leaflet'
import { BaseMapLayersConfig } from './BaseMapLayer'
import { LayersConfig } from './GroupLayer'

export type MapOptions = {
  zoomControl: boolean
  minZoom: number
  maxZoom: number
  center: LatLngExpression
  zoom: number
}

type Configuration = {
  mapOptions: MapOptions
  layers: LayersConfig
  baseLayer: BaseMapLayersConfig
}

export type MapConfigurations = Partial<Configuration>
