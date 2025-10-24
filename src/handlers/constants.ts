import { DrawingControlOptions, MapConfigConfig } from '../types'

export const DEFAULT_MAP_OPTIONS: MapConfigConfig = {
  id: 'map',
  zoomControl: false,
  minZoom: 3,
  maxZoom: 17,
  center: [-15.235, -51.9253],
  zoom: 4,
  zoomControlPosition: 'topright',
  removeControlLayers: false,
}

export const DEFAULT_DRAW_OPTIONS: DrawingControlOptions = {
  options: {
    drawMarker: true,
    drawRectangle: true,
    drawPolyline: true,
    drawPolygon: true,
    drawCircle: true,
    drawCircleMarker: true,
    drawText: true,
    editMode: true,
    dragMode: true,
    cutPolygon: false,
    rotateMode: false,
    removalMode: true,
    drawControls: true,
    editControls: true,
    position: 'topright'
  },
  translation: {
    lang: 'en',
  }
}
