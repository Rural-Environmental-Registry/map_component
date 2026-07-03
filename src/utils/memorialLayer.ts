import type L from 'leaflet'

export const MEMORIAL_KEY = 'memorial'

export function isMemorialLayer(layer: L.Layer): boolean {
  return (layer as L.Layer & { options?: { memorialKey?: string } }).options?.memorialKey === MEMORIAL_KEY
}
