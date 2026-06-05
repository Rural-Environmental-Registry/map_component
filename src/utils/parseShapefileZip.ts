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
    return { ok: false, error: 'O arquivo deve ser um .zip contendo o shapefile' }
  }

  try {
    const buffer = await file.arrayBuffer()
    const geojson = await shp(buffer)
    const features = normalizeToFeatures(geojson as FeatureCollection | Feature | Feature[])

    if (features.length === 0) {
      return { ok: false, error: 'O shapefile não contém geometrias' }
    }

    return { ok: true, features }
  } catch {
    return {
      ok: false,
      error: 'Não foi possível ler o arquivo. Verifique se o .zip contém .shp, .shx e .dbf válidos'
    }
  }
}
