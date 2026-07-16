import { normalizeGeoJsonToFeatures } from './normalizeGeoJsonToFeatures'
import type { GeometryFileParseResult } from './geometryFileParseResult'

export async function parseGeoJsonFile(file: File): Promise<GeometryFileParseResult> {
  const fileName = file.name.toLowerCase()
  if (!fileName.endsWith('.geojson') && !fileName.endsWith('.json')) {
    return { ok: false, error: 'The file must be a .geojson or .json file' }
  }

  try {
    const content = await file.text()
    const parsed = JSON.parse(content) as unknown
    const features = normalizeGeoJsonToFeatures(parsed)

    if (features.length === 0) {
      return { ok: false, error: 'The GeoJSON file contains no geometries' }
    }

    return { ok: true, features }
  } catch {
    return { ok: false, error: 'Could not read the file. Check that it contains valid GeoJSON' }
  }
}
