import L, { Map, FeatureGroup, Layer } from 'leaflet'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import { area } from '@turf/turf'

import { DEFAULT_DRAW_OPTIONS } from './constants'
import {
  DrawingConfig,
  GeomanDrawingEvent,
  IncrementedLayer,
  TranslationConfig,
  DrawnArea,
    ToolbarOptions
} from '../types'

export default class DrawingControlHandler {
  private readonly _map: Map
  private readonly _drawItemsGroup: FeatureGroup
  private readonly _options: ToolbarOptions

   constructor( map: Map, drawItemsGroup: FeatureGroup, controlOptions?: DrawingConfig ) {
     this._map = map
     this._drawItemsGroup = drawItemsGroup
     this._options = this.formatMenuOptions(controlOptions)
     this.addTranslation(controlOptions?.translation || DEFAULT_DRAW_OPTIONS.translation)
  }

  get drawItemsGroup(): FeatureGroup { return this._drawItemsGroup }

  get map(): Map { return this._map }

  get options(): ToolbarOptions { return this._options }

  private calculateAreas(layer: Layer): DrawnArea {
    if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
      const drawnArea: number = area(layer.toGeoJSON())

      return {
        m2: drawnArea,
        km2: drawnArea / 1000000,
        ha: drawnArea / 10000
      }
    }

    return {
      m2: 0,
      km2: 0,
      ha: 0
    }
  }

  private incrementLayerInfos(layer: Layer): IncrementedLayer {
    const newLayer = layer as IncrementedLayer
    newLayer.drawnArea = this.calculateAreas(layer)

    return newLayer
  }

  public handleDrawingEvents(eventEmitterCallback: Function): void {
    this._map.on('pm:create', (evt: GeomanDrawingEvent) => {

      const { layer } = evt

      this._drawItemsGroup.addLayer(layer)

      const createdLayer: IncrementedLayer = this.incrementLayerInfos(layer)

      eventEmitterCallback({ type: 'created', layer: createdLayer })

      this.handleUpdateDrawingEvents(eventEmitterCallback, layer)
      this.handleDeleteDrawingEvents(eventEmitterCallback, layer)
    })
  }

  private handleUpdateDrawingEvents(eventEmitterCallback: Function, layer: Layer): void {
    layer.on('pm:update', (evt: GeomanDrawingEvent) => {
      const childLayer: Layer = evt.layer

      const editedLayer: IncrementedLayer = this.incrementLayerInfos(childLayer)

      eventEmitterCallback({ type: 'edited', layer: editedLayer })
    })
  }

  private handleDeleteDrawingEvents(eventEmitterCallback: Function, layer: Layer): void {
    layer.on('pm:remove', (evt: GeomanDrawingEvent) => {
      eventEmitterCallback({ type: 'deleted', layer: evt.layer })
    })
  }

  private addTranslation({ lang = 'en', customTexts = {} }: TranslationConfig): void {
    this._map.pm.setLang(lang, customTexts, 'en')
  }

  private formatMenuOptions(options: DrawingConfig | undefined): ToolbarOptions {
    if (!options) return DEFAULT_DRAW_OPTIONS.options
    // TODO: receber um objeto de opções e formatar conforme o leaflet-geoman
  }

  private applyShapeStyles(): void {
    // TODO: baseado no objeto de opcoes, aplicar as estilizacoes

  }
}
