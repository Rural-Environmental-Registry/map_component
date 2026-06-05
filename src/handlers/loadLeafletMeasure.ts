import L from 'leaflet'

/** leaflet-measure registra L.Control.Measure no objeto global L. */
;(globalThis as typeof globalThis & { L: typeof L }).L = L

import 'leaflet-measure/dist/leaflet-measure.css'
import 'leaflet-measure/dist/leaflet-measure.js'
