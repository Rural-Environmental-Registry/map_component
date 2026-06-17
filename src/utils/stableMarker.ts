import type { FeatureGroup, LatLngExpression, Map, Marker, MarkerOptions } from 'leaflet'
import type { default as LeafletType } from 'leaflet'

export type StableMarkerOptions = MarkerOptions & Record<string, unknown>

/** Opções padrão para evitar drift de divIcon durante zoom no Leaflet. */
export const STABLE_MARKER_DEFAULTS: StableMarkerOptions = {
  pane: 'markerPane',
  riseOnHover: false,
  zoomAnimation: false
}

/**
 * Cria marcador com opções estáveis para ícones customizados (divIcon).
 * Consumidores podem passar `icon` e metadados de domínio (ex.: layerCode, rules).
 */
export function createStableMarker(
  leaflet: typeof LeafletType,
  latlng: LatLngExpression,
  options: StableMarkerOptions = {}
): Marker {
  return leaflet.marker(latlng, {
    ...STABLE_MARKER_DEFAULTS,
    ...options
  })
}

/**
 * Reposiciona marcadores após zoom (workaround para desalinhamento de divIcon).
 * Retorna função de cleanup para remover o listener.
 */
export function bindMarkerZoomStability(map: Map, layerGroup: FeatureGroup): () => void {
  const handler = (): void => {
    const stabilize = (layer: any): void => {
      if (typeof layer.getLatLng === 'function' && typeof layer.setLatLng === 'function') {
        const latlng = layer.getLatLng()
        if (latlng) {
          layer.setLatLng(latlng)
        }
      } else if (typeof layer.eachLayer === 'function') {
        layer.eachLayer(stabilize)
      }
    }
    layerGroup.eachLayer(stabilize)
  }

  map.on('zoomend', handler)

  return () => {
    map.off('zoomend', handler)
  }
}
