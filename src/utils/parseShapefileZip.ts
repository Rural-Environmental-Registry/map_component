import shp from 'shpjs'
import { normalizeGeoJsonToFeatures } from './normalizeGeoJsonToFeatures'
import type { GeometryFileParseResult } from './geometryFileParseResult'

export type ShapefileParseResult = GeometryFileParseResult

export async function parseShapefileZip(file: File): Promise<ShapefileParseResult> {
  const fileName = file.name.toLowerCase()
  if (!fileName.endsWith('.zip')) {
    return { ok: false, error: 'The file must be a .zip containing the shapefile' }
  }

  try {
    const buffer = await file.arrayBuffer()
    const geojson = await shp(buffer)
    const features = normalizeGeoJsonToFeatures(geojson)

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
