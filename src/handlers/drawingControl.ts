import L, { Map, FeatureGroup, Layer, PathOptions, Icon, Point } from 'leaflet'
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
  ToolbarOptions,
  PMToolbarOptions,
  PMSupportedShapes
} from '../types'

import markerIcon from '../assets/icons/marker-icon.svg'
import fileIconMemorial from '../assets/icons/file-lines-regular-full-gray.svg'

export default class DrawingControlHandler {
  private readonly _map: Map
  private readonly _drawItemsGroup: FeatureGroup
  private readonly _options: ToolbarOptions
  private _memorialButtonControl: L.Control | null = null

  constructor(map: Map, drawItemsGroup: FeatureGroup, controlOptions?: DrawingConfig) {
    this._map = map
    this._drawItemsGroup = drawItemsGroup
    this._options = this.formatMenuOptions(controlOptions?.options || DEFAULT_DRAW_OPTIONS.options)
    this.addTranslation(controlOptions?.translation || DEFAULT_DRAW_OPTIONS.translation)
  }

  get drawItemsGroup(): FeatureGroup {
    return this._drawItemsGroup
  }

  get map(): Map {
    return this._map
  }

  get options(): ToolbarOptions {
    return this._options
  }

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

  private formatMenuOptions(options: ToolbarOptions): PMToolbarOptions {
    const toolbarOptions: ToolbarOptions = {
      drawPolygon: false,
      drawCircle: false,
      drawCircleMarker: false,
      drawText: false,
      dragMode: false,
      cutPolygon: false,
      rotateMode: false
    }

    const isPathOption = (option: any): boolean => {
      return typeof option === 'object' && ('color' in option || 'fillColor' in option || 'weight' in option)
    }

    Object.entries(options).forEach(([key, value]) => {
      if (isPathOption(value)) {
        this.applyShapeStyles(key, value as PathOptions)
        if (key === 'drawMarker') this.setMartkerIcon()
        toolbarOptions[key] = true
      } else {
        toolbarOptions[key] = value
      }
    })

    return toolbarOptions
  }

  private applyShapeStyles(key: string, props: PathOptions): void {
    const shapes: { [key: string]: PMSupportedShapes } = {
      drawMarker: 'Marker',
      drawRectangle: 'Rectangle',
      drawPolyline: 'Line',
      drawPolygon: 'Polygon',
      drawCircle: 'Circle',
      drawCircleMarker: 'CircleMarker'
    }

    const ignoredShapes = (currentShape: PMSupportedShapes): string[] => {
      return ['Marker', 'Circle', 'Line', 'Rectangle', 'Polygon', 'CircleMarker'].filter(
        (shape: string) => shape !== currentShape
      )
    }

    this._map.pm.setPathOptions(props, { ignoreShapes: ignoredShapes(shapes[key]), merge: true })
  }

  private setMartkerIcon(): void {
    const MyCustomMarker = new Icon({
      iconAnchor: new Point(12, 12),
      iconSize: new Point(24, 24),
      iconUrl: markerIcon
    })

    this._map.pm.setGlobalOptions({ markerStyle: { icon: MyCustomMarker } })
  }

  private getOrCreateCustomContainer(): HTMLElement {
    let controlContainer = this._map.getContainer().querySelector('.leaflet-control-memorial') as HTMLElement

    if (!controlContainer) {
      controlContainer = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-memorial')
    }

    return controlContainer
  }

  public addMemorialDescriptiveButton(toggleCallback: () => void, buttonTitle: string): void {
    const existingButton = this._map.getContainer().querySelector('.memorial-btn')
    if (existingButton) {
      return
    }

    const MemorialDescriptive = L.Control.extend({
      options: {
        position: 'topright'
      },
      onAdd: () => {
        const controlContainer = this.getOrCreateCustomContainer()

        const btn = L.DomUtil.create('button', 'memorial-btn leaflet-pm-icon-memorial', controlContainer)

        btn.innerHTML = `<img src="${fileIconMemorial}" alt="${buttonTitle}" />`
        btn.title = buttonTitle

        L.DomEvent.on(btn, 'click', (e: Event) => {
          e.stopPropagation()
          e.preventDefault()
          if (typeof toggleCallback === 'function') {
            toggleCallback()
          }
        })

        return controlContainer
      }
    })

    this._memorialButtonControl = new MemorialDescriptive()
    this._map.addControl(this._memorialButtonControl)
  }

  public updateMemorialDescriptiveButtonTitle(newTitle: string): void {
    const existingButton = this._map.getContainer().querySelector('.memorial-btn') as HTMLButtonElement

    if (existingButton) {
      existingButton.title = newTitle
      const img = existingButton.querySelector('img')
      if (img) {
        img.alt = newTitle
      }
    }
  }

  public removeMemorialDescriptiveButton(): void {
    const controlContainer = this._map.getContainer().querySelector('.leaflet-control-memorial')

    if (controlContainer) {
      const existingButton = controlContainer.querySelector('.memorial-btn')

      if (existingButton) {
        existingButton.remove()
      }

      if (controlContainer.children.length === 0) {
        controlContainer.remove()
      }
    }

    if (this._memorialButtonControl) {
      this._map.removeControl(this._memorialButtonControl)
      this._memorialButtonControl = null
    }
  }
}
