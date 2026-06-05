import 'leaflet'

export type LeafletMeasureFinishEvent = {
  area: number
  areaDisplay?: string
  length: number
  lengthDisplay?: string
  pointCount: number
  points: L.LatLng[]
  lastCoord?: unknown
}

export type LeafletMeasureFinishEventHandlerFn = (event: LeafletMeasureFinishEvent) => void

declare module 'leaflet' {
  namespace control {
    function measure(options?: Record<string, unknown>): Control
  }

  interface LeafletEventHandlerFnMap {
    measurestart?: LeafletEventHandlerFn
    measurefinish?: LeafletMeasureFinishEventHandlerFn
  }

  interface Evented {
    on(type: 'measurestart', fn: LeafletEventHandlerFn, context?: any): this
    on(type: 'measurefinish', fn: LeafletMeasureFinishEventHandlerFn, context?: any): this
    off(type: 'measurestart', fn?: LeafletEventHandlerFn, context?: any): this
    off(type: 'measurefinish', fn?: LeafletMeasureFinishEventHandlerFn, context?: any): this
  }
}
