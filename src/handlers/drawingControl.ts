/* The following workaround is needed to avoid a runtime error in leaflet-draw */
// @ts-ignore
window.type = true

// @ts-ignore
window.radius = true

import {
  FeatureGroup,
  Control,
  Map,
  GeometryUtil,
  drawLocal,
  LatLng,
  LeafletEvent,
  Localization,
  Layer
} from 'leaflet'
import {
  DEFAULT_DRAW_OPTIONS,
  DEFAULT_DRAWING_CONTROL_TEXTS
} from './constants'
import {
  DrawnArea,
  IncrementedCreateLayer,
  IncrementedEditLayer,
  LeafletDrawCreateEvent,
  LeafletDrawDeleteEvent,
  LeafletDrawEditEvent
} from '../types'

export default class DrawingControlHandler {
  private _map: Map
  private _drawItemsGroup: FeatureGroup
  private _options: Control.DrawConstructorOptions

  constructor(map: Map, drawItemsGroup: FeatureGroup, controlOptions: any) {
    this._map = map
    this._drawItemsGroup = drawItemsGroup
    this._options = this.formatOptions(controlOptions.config)
    this.addTranslation(
      controlOptions.controlTexts || DEFAULT_DRAWING_CONTROL_TEXTS
    )
  }

  get drawItemsGroup(): FeatureGroup {
    return this._drawItemsGroup
  }

  get map(): Map {
    return this._map
  }

  get options(): Control.DrawConstructorOptions {
    return this._options
  }

  private formatOptions(
    controlOptions: Control.DrawConstructorOptions
  ): Control.DrawConstructorOptions {
    let options = DEFAULT_DRAW_OPTIONS

    if (controlOptions) {
      options = controlOptions
    }

    options.edit = {
      ...options.edit,
      featureGroup: this._drawItemsGroup
    }

    return options
  }

  private calculateAreas(latLangs: LatLng[]): DrawnArea {
    const area = GeometryUtil.geodesicArea(latLangs)
    return {
      m2: area,
      km2: area / 1000000,
      ha: area / 10000
    }
  }

  private incrementLayerInfosOnCreate(
    data: LeafletDrawCreateEvent
  ): IncrementedCreateLayer {
    const polygons = ['rectangle', 'polygon']

    if (!polygons.includes(data.layerType)) return data

    data.layer.drawnArea = this.calculateAreas(data.layer.getLatLngs()[0])

    return data
  }

  private incrementLayerInfosOnEdit(data: Layer): IncrementedEditLayer {
    const layer = data as IncrementedEditLayer

    if (!layer.drawnArea) return layer

    layer.drawnArea = this.calculateAreas(layer.getLatLngs()[0])

    return layer
  }

  public handleDrawingEvents(eventEmitterCallback: Function): void {
    this._map.on('draw:created', (e: LeafletEvent) => {
      const evt = e as LeafletDrawCreateEvent

      this._drawItemsGroup.addLayer(evt.layer)

      const { layer } = this.incrementLayerInfosOnCreate(evt)

      eventEmitterCallback({ type: 'created', layer })
    })

    this._map.on('draw:edited', (e: LeafletEvent) => {
      const evt = e as LeafletDrawEditEvent

      const layers: Layer[] = []

      evt.layers.eachLayer((layer: Layer) => {
        const data = this.incrementLayerInfosOnEdit(layer)

        layers.push(data)
      })
      eventEmitterCallback({ type: 'edited', layers })
    })

    this._map.on('draw:deleted', (e: LeafletEvent) => {
      const evt = e as LeafletDrawDeleteEvent

      const layers: Layer[] = []

      evt.layers.eachLayer((layer: Layer) => {
        layers.push(layer)
      })
      eventEmitterCallback({ type: 'deleted', layers })
    })
  }

  private addTranslation(customTexts: Localization.DrawLocal): void {
    /*
     * due to a runtime issue in leaflet-draw, this workaround is needed
     * to override the default texts
     */
    drawLocal.draw = customTexts.draw
    drawLocal.edit = customTexts.edit
  }
}
