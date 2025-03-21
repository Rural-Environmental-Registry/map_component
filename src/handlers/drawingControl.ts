import {
  FeatureGroup,
  Control,
  Map,
  GeometryUtil,
  drawLocal,
  LatLng
} from 'leaflet'
import {
  DEFAULT_DRAW_OPTIONS,
  DEFAULT_DRAWING_CONTROL_TEXTS
} from './constants'

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

  private calculateAreas(latLangs: LatLng[]): any {
    const area = GeometryUtil.geodesicArea(latLangs)
    return {
      m2: area,
      km2: area / 1000000,
      ha: area / 10000
    }
  }

  private incrementLayerInfosOnCreate(data: any): any {
    const polygons = ['marker', 'circle', 'rectangle', 'polygon']

    if (!polygons.includes(data.layerType)) return data

    data.layer.drawnArea = this.calculateAreas(data.layer.getLatLngs()[0])

    return data
  }

  private incrementLayerInfosOnEdit(data: any): any {
    if (!data.drawnArea) return data

    data.drawnArea = this.calculateAreas(data.getLatLngs()[0])

    return data
  }

  public handleDrawingEvents(eventEmitterCallback: Function): void {
    this._map.on('draw:created', (e: any) => {
      this._drawItemsGroup.addLayer(e.layer)

      const { layer } = this.incrementLayerInfosOnCreate(e)

      eventEmitterCallback({ type: 'created', layer })
    })

    this._map.on('draw:edited', (e: any) => {
      const layers: any = []

      e.layers.eachLayer((layer: any) => {
        const data = this.incrementLayerInfosOnEdit(layer)

        layers.push(data)
      })
      eventEmitterCallback({ type: 'edited', layers })
    })

    this._map.on('draw:deleted', (e: any) => {
      const layers: any = []

      e.layers.eachLayer((layer: any) => {
        layers.push(layer)
      })
      eventEmitterCallback({ type: 'deleted', layers })
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
