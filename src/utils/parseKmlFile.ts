import { kml } from '@tmcw/togeojson'
import { normalizeGeoJsonToFeatures } from './normalizeGeoJsonToFeatures'
import type { GeometryFileParseResult } from './geometryFileParseResult'

export async function parseKmlFile(file: File): Promise<GeometryFileParseResult> {
  const fileName = file.name.toLowerCase()
  if (!fileName.endsWith('.kml')) {
    return { ok: false, error: 'The file must be a .kml file' }
  }

  try {
    const content = await file.text()
    const xmlDoc = new DOMParser().parseFromString(content, 'text/xml')
    const parserError = xmlDoc.querySelector('parsererror')

    if (parserError) {
      return { ok: false, error: 'Could not read the file. Check that it contains valid KML' }
    }

    const geojson = kml(xmlDoc)
    const features = normalizeGeoJsonToFeatures(geojson)

    if (features.length === 0) {
      return { ok: false, error: 'The KML file contains no geometries' }
    }

    return { ok: true, features }
  } catch {
    return { ok: false, error: 'Could not read the file. Check that it contains valid KML' }
  }
}
