import type { Map, PathOptions } from 'leaflet'
import type { DrawingConfig } from '../types'

const DEFAULT_PATH_OPTIONS: PathOptions = { color: '#3388ff' }

export type MemorialDrawShape = 'polygon' | 'polyline'

const GEOMAN_SHAPE: Record<MemorialDrawShape, 'Polygon' | 'Line'> = {
  polygon: 'Polygon',
  polyline: 'Line'
}

const CONFIG_KEY: Record<MemorialDrawShape, 'drawPolygon' | 'drawPolyline'> = {
  polygon: 'drawPolygon',
  polyline: 'drawPolyline'
}

function isPathOptions(value: unknown): value is PathOptions {
  return (
    typeof value === 'object' &&
    value !== null &&
    ('color' in value || 'fillColor' in value || 'weight' in value)
  )
}

function fromGeomanDraw(map: Map, shape: MemorialDrawShape): PathOptions | undefined {
  const pm = (map as Map & { pm?: { Draw?: Record<string, { options?: { pathOptions?: PathOptions } }> } }).pm
  const pathOptions = pm?.Draw?.[GEOMAN_SHAPE[shape]]?.options?.pathOptions
  return isPathOptions(pathOptions) ? pathOptions : undefined
}

function fromDrawingConfig(
  drawingConfig: DrawingConfig | undefined,
  shape: MemorialDrawShape
): PathOptions | undefined {
  const value = drawingConfig?.options?.[CONFIG_KEY[shape]]
  return isPathOptions(value) ? value : undefined
}

/**
 * Resolve estilos de desenho para geometrias do memorial.
 * Prioridade: opções ativas do Geoman (camada selecionada) → config estática → padrão.
 */
export function resolveDrawingPathOptions(
  map: Map | undefined,
  drawingConfig: DrawingConfig | undefined,
  shape: MemorialDrawShape
): PathOptions {
  const fromGeoman = map ? fromGeomanDraw(map, shape) : undefined
  const fromConfig = fromDrawingConfig(drawingConfig, shape)

  return {
    ...DEFAULT_PATH_OPTIONS,
    ...fromConfig,
    ...fromGeoman
  }
}
