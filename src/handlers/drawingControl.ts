import {
  FeatureGroup,
  Control,
  Map,
  GeometryUtil,
  drawLocal,
  Localization
} from 'leaflet'
import {
  DEFAULT_DRAW_OPTIONS,
  DEFAULT_DRAWING_CONTROL_TEXTS
} from './constants'

export default class DrawingControlHandler {
  private _map: Map
  private _drawItemsGroup: FeatureGroup
  private _options: Control.DrawConstructorOptions

  constructor(
    map: Map,
    drawItemsGroup: FeatureGroup,
    controlOptions: any,
    controlTexts: Localization.DrawToolbar
  ) {
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

  private incrementLayerInfos(data: any): any {
    let area = 0

    if (data.layerType === 'polygon') {
      area = GeometryUtil.geodesicArea(data.layer.getLatLngs()[0])
    }

    data.layer.drawnArea = {
      m2: area,
      km2: area / 1000000,
      ha: area / 10000
    }

    return data
  }

  public handleDrawingEvents(eventEmitterCallback: Function): void {
    this._map.on('draw:created', (e: any) => {
      this._drawItemsGroup.addLayer(e.layer)

      const data = this.incrementLayerInfos(e)

      eventEmitterCallback({ type: 'created', data })
    })

    this._map.on('draw:edited', (e: any) => {
      this._drawItemsGroup.addLayer(e.layer)

      const data = this.incrementLayerInfos(e)

      eventEmitterCallback({ type: 'edited', data })
    })

    this._map.on('draw:deleted', (e: any) => {
      eventEmitterCallback({ type: 'deleted', data: e })
    })
  }

  private addTranslation(customTexts: any): void {
    /*
     * due to a runtime issue in leaflet-draw, this workaround is needed
     * to override the default texts
     */
    drawLocal.draw = customTexts.draw
    drawLocal.edit = customTexts.edit
  }
}
