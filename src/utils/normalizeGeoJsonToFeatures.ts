import type { Feature, FeatureCollection, Geometry } from 'geojson'

function isFeatureCollection(value: unknown): value is FeatureCollection {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    (value as FeatureCollection).type === 'FeatureCollection'
  )
}

function isFeature(value: unknown): value is Feature {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    (value as Feature).type === 'Feature'
  )
}

function isGeometry(value: unknown): value is Geometry {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    !('features' in value) &&
    (value as { type: string }).type !== 'Feature'
  )
}

export function normalizeGeoJsonToFeatures(geojson: unknown): Feature[] {
  if (Array.isArray(geojson)) {
    return geojson.flatMap(item => normalizeGeoJsonToFeatures(item))
  }

  if (isFeatureCollection(geojson)) {
    return geojson.features
  }

  if (isFeature(geojson)) {
    return [geojson]
  }

  if (isGeometry(geojson)) {
    return [{ type: 'Feature', properties: null, geometry: geojson }]
  }

  return []
}
