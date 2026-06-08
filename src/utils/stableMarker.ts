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
    layerGroup.eachLayer(layer => {
      if (typeof (layer as Marker).getLatLng !== 'function') return
      const latlng = (layer as Marker).getLatLng()
      if (latlng) {
        ;(layer as Marker).setLatLng(latlng)
      }
    })
  }

  map.on('zoomend', handler)

  return () => {
    map.off('zoomend', handler)
  }
}
