import shp from 'shpjs'
import type { Feature, FeatureCollection } from 'geojson'

export type ShapefileParseResult =
  | { ok: true; features: Feature[] }
  | { ok: false; error: string }

function normalizeToFeatures(geojson: FeatureCollection | Feature | Feature[]): Feature[] {
  if (Array.isArray(geojson)) {
    return geojson
  }
  if (geojson.type === 'FeatureCollection') {
    return geojson.features
  }
  return [geojson]
}

export async function parseShapefileZip(file: File): Promise<ShapefileParseResult> {
  const fileName = file.name.toLowerCase()
  if (!fileName.endsWith('.zip')) {
    return { ok: false, error: 'The file must be a .zip containing the shapefile' }
  }

  try {
    const buffer = await file.arrayBuffer()
    const geojson = await shp(buffer)
    const features = normalizeToFeatures(geojson as FeatureCollection | Feature | Feature[])

    if (features.length === 0) {
      return { ok: false, error: 'The shapefile contains no geometries' }
    }

    return { ok: true, features }
  } catch {
    return {
      ok: false,
      error: 'Could not read the file. Check that the .zip contains valid .shp, .shx and .dbf files'
    }
  }
}
