import type { Feature } from 'geojson'

export type GeometryFileParseResult =
  | { ok: true; features: Feature[] }
  | { ok: false; error: string }
