import { DEFAULT_MAP_OPTIONS } from './constants'
import { BaseMapLayer, MapLayers, MapConfigConfig } from '../types'
import DEFAULT_MAP_LAYER from '../assets/layers/mapLayers.json'

import L from 'leaflet'

export default class MapHandler {
  private readonly _map: L.Map
  private readonly _mapOptions: MapConfigConfig
  private _mapLayers!: MapLayers
  private _layerControl!: L.Control.Layers

  constructor(mapOptions: MapConfigConfig | undefined) {
    this._mapOptions = {
        ...DEFAULT_MAP_OPTIONS,
        ...mapOptions
    }

    this._map = L.map(this._mapOptions.id, {
      preferCanvas: true,
      zoomControl: this._mapOptions.zoomControl,
      minZoom: this._mapOptions.minZoom,
      maxZoom: this._mapOptions.maxZoom,
      dragging: this._mapOptions.dragging,
      scrollWheelZoom: this._mapOptions.scrollWheelZoom,
      doubleClickZoom: this._mapOptions.doubleClickZoom
    }).setView(this._mapOptions.center!, this._mapOptions.zoom);
  }

  get map(): L.Map {
    return this._map
  }

  get layerControl(): L.Control.Layers {
    return this._layerControl
  }

  private addControls(): void {
    if (this._mapOptions.zoomControl && this._mapOptions.zoomControlPosition) {
      this._map.zoomControl.setPosition(this._mapOptions.zoomControlPosition);
    }

    if (!this._mapOptions.removeControlLayers) {
      this._layerControl = L.control.layers().addTo(this._map)
    }
  }

  private addBaseLayer(eventEmitterCallback: Function): void {
    const baseMap = this._mapLayers?.mapLayers

    baseMap.forEach((layer: BaseMapLayer) => {
      const tileLayer = L.tileLayer(layer.url)

      this.watchLayerStatus(tileLayer, eventEmitterCallback)

      if (layer.default) {
        tileLayer.addTo(this._map)
      }

      this._layerControl.addBaseLayer(tileLayer, layer.name)
    })
  }

  private disableLayerControlHover(): void {
    setTimeout(() => {
      const container = document.querySelector(
        '.leaflet-control-layers'
      ) as HTMLElement & {
        _expand: () => void
        _collapse: () => void
      }
      if (!container) return

      const originalExpand =
        (L.DomEvent as any)._originalExpand || container._expand

      L.DomEvent.off(container)

      L.DomEvent.on(container, 'click', function (e ) {
        if (container.classList.contains('leaflet-control-layers-expanded')) {
          container._collapse()
        } else if (originalExpand) {
          originalExpand.call(container)
        } else {
          container.classList.add('leaflet-control-layers-expanded')
        }

        L.DomEvent.stopPropagation(e)
        L.DomEvent.preventDefault(e)
      })
      ;(L.DomEvent as any)._originalExpand = originalExpand
    }, 100)
  }

  private watchLayerStatus(
    tileLayer: L.TileLayer,
    eventEmitterCallback: Function
  ): void {
    tileLayer.on('loading', () => {
      eventEmitterCallback('startLoading')
    })

    tileLayer.on('load', () => {
      eventEmitterCallback('stopLoading')
    })

    tileLayer.on('error', () => {
      eventEmitterCallback('stopLoading')
    })
  }

  public init(mapLayers: MapLayers, eventEmitterCallback: Function): void {
    this._mapLayers = mapLayers || DEFAULT_MAP_LAYER

    this.addControls()
    this.addBaseLayer(eventEmitterCallback)

    setTimeout(() => {
      this._map.invalidateSize()
    }, 300)

    this.disableLayerControlHover()
  }
}
