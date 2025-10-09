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
      zoomControl: false,
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
      L.control.zoom({ position: this._mapOptions.zoomControlPosition }).addTo(this._map)
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
    const container: HTMLElement | null = this._map.getContainer().querySelector('.leaflet-control-layers.leaflet-control')

    if (!container) return

    L.DomEvent.on(container, 'click', function (e) {
      e.stopPropagation()
      e.preventDefault()
    })

    L.DomEvent.off(container)
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
