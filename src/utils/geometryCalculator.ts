import L, { Layer } from 'leaflet'
import { area, length } from '@turf/turf'
import { DrawnArea } from '../types'

export function isClosedPolygonLayer(layer: Layer): boolean {
  if (layer instanceof L.Polygon || layer instanceof L.Rectangle) return true

  const geo = (layer as L.Polyline).toGeoJSON() as GeoJSON.Feature
  const geomType = geo.geometry?.type
  return geomType === 'Polygon' || geomType === 'MultiPolygon'
}

export function calculateLayerArea(layer: Layer): DrawnArea {
  if (isClosedPolygonLayer(layer)) {
    const drawnArea = area((layer as L.Polygon).toGeoJSON())

    return {
      m2: drawnArea,
      km2: drawnArea / 1_000_000,
      ha: drawnArea / 10_000
    }
  }

  return { m2: 0, km2: 0, ha: 0 }
}

export function calculateLayerLength(layer: Layer): { m: number; km: number } {
  const geo = (layer as L.Polyline).toGeoJSON() as GeoJSON.Feature
  const geomType = geo.geometry?.type

  if (
    geomType === 'LineString' ||
    geomType === 'MultiLineString' ||
    geomType === 'Polygon' ||
    geomType === 'MultiPolygon'
  ) {
    const km = length(geo, { units: 'kilometers' })
    return { m: km * 1000, km }
  }

  return { m: 0, km: 0 }
}

export function formatLengthKm(km: number): string {
  return `${km.toLocaleString(undefined, { maximumFractionDigits: 4 })} km`
}

export function formatAreaKm2(km2: number): string {
  return `${km2.toLocaleString(undefined, { maximumFractionDigits: 6 })} km²`
}

export function formatAreaHa(value: number): string {
  return `${value.toLocaleString(undefined, { maximumFractionDigits: 4 })} ha`
}

export function formatLengthValue(value: number, unit: 'm' | 'km'): string {
  const decimals = unit === 'm' ? 2 : 4
  const suffix = unit === 'km' ? ' km' : ' m'
  return `${value.toLocaleString(undefined, { maximumFractionDigits: decimals })}${suffix}`
}

export { formatAreaHa as formatAreaValue }
