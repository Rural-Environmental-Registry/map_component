import { area, booleanValid, kinks } from '@turf/turf'
import type { Feature, MultiPolygon, Polygon, Position } from 'geojson'

export type ShapefileValidationResult =
  | { ok: true; feature: Feature<Polygon | MultiPolygon> }
  | { ok: false; error: string }

const COORD_TOLERANCE = 1e-9

function coordsEqual(a: Position, b: Position): boolean {
  return Math.abs(a[0] - b[0]) <= COORD_TOLERANCE && Math.abs(a[1] - b[1]) <= COORD_TOLERANCE
}

function isRingClosed(ring: Position[]): boolean {
  if (ring.length < 4) return false
  return coordsEqual(ring[0], ring[ring.length - 1])
}

function validateRingsClosed(geometry: Polygon | MultiPolygon): boolean {
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates
  return polygons.every(polygon => polygon.every(ring => isRingClosed(ring)))
}

export function validateShapefileGeometry(features: Feature[]): ShapefileValidationResult {
  if (features.length !== 1) {
    return { ok: false, error: 'O shapefile deve conter exatamente uma geometria' }
  }

  const feature = features[0]
  const geometry = feature.geometry

  if (!geometry || (geometry.type !== 'Polygon' && geometry.type !== 'MultiPolygon')) {
    return { ok: false, error: 'A geometria deve ser Polygon ou MultiPolygon' }
  }

  if (!validateRingsClosed(geometry)) {
    return { ok: false, error: 'Anel de polígono não está fechado ou é inválido' }
  }

  if (!booleanValid(geometry)) {
    return { ok: false, error: 'Geometria inválida' }
  }

  if (kinks(geometry).features.length > 0) {
    return { ok: false, error: 'Geometria com auto-interseção' }
  }

  if (area(geometry) <= 0) {
    return { ok: false, error: 'Polígono com área zero' }
  }

  return { ok: true, feature: feature as Feature<Polygon | MultiPolygon> }
}
