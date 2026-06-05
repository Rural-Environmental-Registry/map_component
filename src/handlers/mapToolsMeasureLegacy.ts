/**
 * Backup da medição via Geoman (não utilizada no mapa).
 * Mantida para referência/rollback. Ver leafletMeasureHandler.ts.
 */
import L, { FeatureGroup, LatLngBounds, Layer, Map, Path } from 'leaflet'
import '@geoman-io/leaflet-geoman-free'

import { resolveMapToolsConfig } from './toolsConstants'
import {
  calculateLayerArea,
  calculateLayerLength,
  formatAreaHa,
  formatLengthKm
} from '../utils/geometryCalculator'
import { GeomanDrawingEvent, MapToolsConfig, MeasureCompleteEvent } from '../types'

type MapToolsCallbacks = {
  onFullscreenChange?: (active: boolean) => void
  onMeasureComplete?: (data: MeasureCompleteEvent) => void
}

type InitialView = {
  center: L.LatLngExpression
  zoom: number
}

type MeasureShape = 'Line' | 'Polygon'

const FULLSCREEN_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>'

const EXIT_FULLSCREEN_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"/></svg>'

const CENTER_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>'

const MEASURE_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l18-18"/><circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="17" r="1.5" fill="currentColor" stroke="none"/></svg>'

export default class MapToolsMeasureLegacyHandler {
  private readonly _map: Map
  private readonly _config: MapToolsConfig
  private readonly _initialView: InitialView
  private readonly _callbacks: MapToolsCallbacks
  private readonly _fullscreenContainer: HTMLElement
  private readonly _measureGroup: FeatureGroup
  private readonly _measureSvgRenderer: L.SVG
  private _drawItemsGroup: FeatureGroup | null
  private _control: L.Control | null = null
  private _measureModeActive = false
  private _activeMeasureShape: MeasureShape | null = null
  private _suppressMeasureCancel = false
  private _measureBtn: HTMLButtonElement | null = null
  private _fullscreenBtn: HTMLButtonElement | null = null
  private _restoreZoomAnimation = true
  private _boundFullscreenChange: () => void
  private _boundMeasureCreate: (evt: GeomanDrawingEvent) => void
  private _boundMeasureCancel: () => void
  private _boundZoomEnd: () => void

  constructor(
    map: Map,
    toolsConfig: MapToolsConfig | undefined,
    initialView: InitialView,
    drawItemsGroup: FeatureGroup | null,
    fullscreenContainer: HTMLElement,
    callbacks: MapToolsCallbacks = {}
  ) {
    const resolved = resolveMapToolsConfig(toolsConfig)
    if (!resolved) {
      throw new Error('MapToolsHandler requires tools.show to be true')
    }

    this._map = map
    this._config = resolved
    this._initialView = initialView
    this._drawItemsGroup = drawItemsGroup
    this._callbacks = callbacks
    this._fullscreenContainer = fullscreenContainer
    this._measureGroup = new FeatureGroup()
    this._measureGroup.addTo(this._map)
    this._measureSvgRenderer = L.svg({ pane: 'overlayPane' })

    this._boundFullscreenChange = () => this.handleFullscreenChange()
    this._boundMeasureCreate = (evt: GeomanDrawingEvent) => this.handleMeasureCreate(evt)
    this._boundMeasureCancel = () => this.handleMeasureCancel()
    this._boundZoomEnd = () => this.redrawMeasureLayers()

    this.addControl()
    this.bindFullscreenEvents()
    this.bindMeasureEvents()
    this._map.on('zoomend', this._boundZoomEnd)
  }

  public setDrawItemsGroup(group: FeatureGroup | null): void {
    this._drawItemsGroup = group
  }

  public centerMap(): void {
    const padding = this._config.center?.padding ?? [20, 20]
    const target = this._config.center?.target ?? 'drawn'

    if (target === 'drawn' && this._drawItemsGroup && this._drawItemsGroup.getLayers().length > 0) {
      const bounds = this._drawItemsGroup.getBounds()
      if (bounds.isValid()) {
        this._map.fitBounds(bounds, { padding })
        return
      }
    }

    this._map.setView(this._initialView.center, this._initialView.zoom)
  }

  public enterFullscreen(): void {
    if (!document.fullscreenElement) {
      void this._fullscreenContainer.requestFullscreen?.()
    }
  }

  public exitFullscreen(): void {
    if (document.fullscreenElement) {
      void document.exitFullscreen?.()
    }
  }

  public toggleFullscreen(): void {
    if (document.fullscreenElement) {
      this.exitFullscreen()
    } else {
      this.enterFullscreen()
    }
  }

  public toggleMeasureArea(): void {
    this.toggleMeasureMode()
  }

  public destroy(): void {
    this.stopMeasureMode()
    document.removeEventListener('fullscreenchange', this._boundFullscreenChange)
    this._map.off('pm:create', this._boundMeasureCreate)
    this._map.off('pm:drawcancel', this._boundMeasureCancel)
    this._map.off('zoomend', this._boundZoomEnd)

    if (this._control) {
      this._map.removeControl(this._control)
      this._control = null
    }

    this._measureGroup.clearLayers()
    this._map.removeLayer(this._measureGroup)
  }

  private addControl(): void {
    const position = this._config.position ?? 'topright'
    const config = this._config
    const handler = this

    const MapToolsControl = L.Control.extend({
      options: { position },
      onAdd() {
        const container = L.DomUtil.create('div', 'leaflet-control leaflet-control-map-tools')

        if (config.fullscreen?.show !== false) {
          handler._fullscreenBtn = handler.createButton(
            container,
            'map-tools-btn map-tools-btn--fullscreen',
            config.fullscreen?.title ?? 'Fullscreen',
            FULLSCREEN_ICON,
            (e) => {
              L.DomEvent.stop(e)
              handler.toggleFullscreen()
            }
          )
        }

        if (config.center?.show !== false) {
          handler.createButton(
            container,
            'map-tools-btn map-tools-btn--center',
            config.center?.title ?? 'Center map',
            CENTER_ICON,
            (e) => {
              L.DomEvent.stop(e)
              handler.centerMap()
            }
          )
        }

        if (config.measureArea?.show !== false) {
          handler._measureBtn = handler.createButton(
            container,
            'map-tools-btn map-tools-btn--measure',
            config.measureArea?.title ?? 'Measure',
            MEASURE_ICON,
            (e) => {
              L.DomEvent.stop(e)
              handler.toggleMeasureMode()
            }
          )
        }

        L.DomEvent.disableClickPropagation(container)
        L.DomEvent.disableScrollPropagation(container)

        return container
      }
    })

    this._control = new MapToolsControl()
    this._map.addControl(this._control)
    this.alignTopRightControls()
  }

  public alignTopRightControls(): void {
    const corner = this._map.getContainer().querySelector('.leaflet-top.leaflet-right')
    if (!corner) return

    const prioritySelectors = [
      '.leaflet-control-map-tools',
      '.leaflet-control-zoom',
      '.leaflet-control-layers'
    ]

    const controls = Array.from(corner.querySelectorAll(':scope > .leaflet-control'))
    const sorted = [
      ...prioritySelectors.flatMap((selector) => controls.filter((control) => control.matches(selector))),
      ...controls.filter((control) => !prioritySelectors.some((selector) => control.matches(selector)))
    ]

    sorted.forEach((control) => corner.appendChild(control))
  }

  private createButton(
    container: HTMLElement,
    className: string,
    title: string,
    iconHtml: string,
    onClick: (e: Event) => void
  ): HTMLButtonElement {
    const btn = L.DomUtil.create('button', className, container) as HTMLButtonElement
    btn.type = 'button'
    btn.title = title
    btn.innerHTML = iconHtml

    L.DomEvent.on(btn, 'click', onClick)

    return btn
  }

  private bindFullscreenEvents(): void {
    document.addEventListener('fullscreenchange', this._boundFullscreenChange)
  }

  private handleFullscreenChange(): void {
    const isActive = document.fullscreenElement === this._fullscreenContainer
    this._fullscreenContainer.classList.toggle('map-container--fullscreen', isActive)

    if (this._fullscreenBtn) {
      this._fullscreenBtn.innerHTML = isActive ? EXIT_FULLSCREEN_ICON : FULLSCREEN_ICON
      this._fullscreenBtn.title = isActive ? 'Exit fullscreen' : (this._config.fullscreen?.title ?? 'Fullscreen')
      this._fullscreenBtn.classList.toggle('map-tools-btn--active', isActive)
    }

    setTimeout(() => {
      this._map.invalidateSize()
      this.redrawMeasureLayers()
    }, 100)
    this._callbacks.onFullscreenChange?.(isActive)
  }

  private bindMeasureEvents(): void {
    this._map.on('pm:create', this._boundMeasureCreate)
    this._map.on('pm:drawcancel', this._boundMeasureCancel)
  }

  /** 1st click: line; 2nd click (active): polygon; 3rd click: off. */
  private toggleMeasureMode(): void {
    if (!this._measureModeActive) {
      this.startMeasureMode('Line')
    } else if (this._activeMeasureShape === 'Line') {
      this.startMeasureMode('Polygon')
    } else {
      this.stopMeasureMode()
    }
  }

  private setMeasuringUi(active: boolean): void {
    this._fullscreenContainer.classList.toggle('map-container--measuring', active)
    this._map.getContainer().classList.toggle('map-container--measuring', active)
  }

  private startMeasureMode(shape: MeasureShape): void {
    if (this._measureModeActive) {
      this._suppressMeasureCancel = true
      this._map.pm.disableDraw()
      this._suppressMeasureCancel = false
    }

    this._measureGroup.clearLayers()
    this._measureModeActive = true
    this._activeMeasureShape = shape
    ;(this._map as Map & { _measureModeActive?: boolean })._measureModeActive = true

    this._measureBtn?.classList.add('map-tools-btn--active')
    this.updateMeasureButtonTitle(shape)
    this.setMeasuringUi(true)

    if (this._map.doubleClickZoom.enabled()) {
      this._map.doubleClickZoom.disable()
    }

    this._restoreZoomAnimation = this._map.options.zoomAnimation !== false
    this._map.options.zoomAnimation = false

    const shapeOptions = this._config.measureArea?.shapeOptions ?? {
      color: '#e67e22',
      fillColor: '#e67e22',
      fillOpacity: 0.2,
      weight: 2
    }

    const drawOptions = {
      snappable: true,
      templineStyle: shapeOptions,
      hintlineStyle: shapeOptions,
      pathOptions: shapeOptions
    }

    if (shape === 'Line') {
      this._map.pm.enableDraw('Line', {
        ...drawOptions,
        finishOn: 'dblclick'
      } as unknown as L.PM.DrawModeOptions)
    } else {
      this._map.pm.enableDraw('Polygon', {
        ...drawOptions,
        finishOn: null,
        allowSelfIntersection: true
      } as unknown as L.PM.DrawModeOptions)
    }
  }

  private stopMeasureMode(): void {
    this._measureModeActive = false
    this._activeMeasureShape = null
    ;(this._map as Map & { _measureModeActive?: boolean })._measureModeActive = false

    this._map.pm.disableDraw()
    this._map.options.zoomAnimation = this._restoreZoomAnimation
    this.setMeasuringUi(false)

    if (!this._map.doubleClickZoom.enabled()) {
      this._map.doubleClickZoom.enable()
    }

    this._measureBtn?.classList.remove('map-tools-btn--active')
    this.updateMeasureButtonTitle(null)
  }

  private finalizeMeasureDraw(): void {
    this._map.pm.disableDraw()
    this._map.options.zoomAnimation = this._restoreZoomAnimation
    this.setMeasuringUi(false)

    if (!this._map.doubleClickZoom.enabled()) {
      this._map.doubleClickZoom.enable()
    }

    this._measureBtn?.classList.remove('map-tools-btn--active')
    this.updateMeasureButtonTitle(null)
  }

  private updateMeasureButtonTitle(shape: MeasureShape | null): void {
    if (!this._measureBtn) return

    const baseTitle = this._config.measureArea?.title ?? 'Measure'

    if (shape === 'Line') {
      this._measureBtn.title = `${baseTitle} (line) — click for polygon`
    } else if (shape === 'Polygon') {
      this._measureBtn.title = `${baseTitle} (polygon) — Finish/Cancel or close on first point`
    } else {
      this._measureBtn.title = baseTitle
    }
  }

  private applyMeasureLayerOptions(layer: Layer): void {
    if (layer instanceof Path) {
      layer.options.renderer = this._measureSvgRenderer
      if (typeof (layer as Path).redraw === 'function') {
        ;(layer as Path).redraw()
      }
    }
  }

  private redrawMeasureLayers(): void {
    this._measureGroup.eachLayer((layer) => {
      this.applyMeasureLayerOptions(layer)
    })
  }

  private buildMeasurePopup(layer: Layer, shape: MeasureShape): { html: string; event: MeasureCompleteEvent } {
    const label = this._config.texts?.measureResult ?? 'Measurement'

    if (shape === 'Polygon') {
      const areas = calculateLayerArea(layer)
      const areaLine = `${this._config.texts?.measureArea ?? 'Area'}: ${formatAreaHa(areas.ha)}`
      return {
        html: `<strong>${label}</strong><br/>${areaLine}`,
        event: {
          m2: areas.m2,
          ha: areas.ha,
          geojson: (layer as L.Polygon).toGeoJSON() as MeasureCompleteEvent['geojson']
        }
      }
    }

    const lengths = calculateLayerLength(layer)
    const distanceLine = `${this._config.texts?.measureLength ?? 'Distance'}: ${formatLengthKm(lengths.km)}`
    return {
      html: `<strong>${label}</strong><br/>${distanceLine}`,
      event: {
        lengthM: lengths.m,
        lengthKm: lengths.km,
        geojson: (layer as L.Polyline).toGeoJSON() as MeasureCompleteEvent['geojson']
      }
    }
  }

  private normalizeMeasureShape(shape: string): MeasureShape | null {
    const normalized = shape.toLowerCase()
    if (normalized === 'line' || normalized === 'polyline') return 'Line'
    if (normalized === 'polygon' || normalized === 'rectangle') return 'Polygon'
    return null
  }

  private handleMeasureCreate(evt: GeomanDrawingEvent): void {
    if (!this._measureModeActive) return

    const measureShape = this.normalizeMeasureShape(String(evt.shape))
    if (!measureShape) return

    const { layer } = evt

    this._measureModeActive = false
    this._activeMeasureShape = null
    ;(this._map as Map & { _measureModeActive?: boolean })._measureModeActive = false

    window.setTimeout(() => {
      this.finalizeMeasureDraw()
      this.applyMeasureLayerOptions(layer)

      if (this._map.hasLayer(layer)) {
        this._map.removeLayer(layer)
      }

      this._measureGroup.clearLayers()
      this._measureGroup.addLayer(layer)

      const { html, event } = this.buildMeasurePopup(layer, measureShape)

      layer.bindPopup(html, { closeOnClick: false, autoClose: false }).openPopup()

      layer.on('popupclose', () => {
        this._measureGroup.removeLayer(layer)
      })

      this._callbacks.onMeasureComplete?.(event)
    }, 0)
  }

  private handleMeasureCancel(): void {
    if (this._suppressMeasureCancel || !this._measureModeActive) return
    this.stopMeasureMode()
    this._measureGroup.clearLayers()
  }
}

export function isMeasureModeActive(map: Map): boolean {
  return !!(map as Map & { _measureModeActive?: boolean })._measureModeActive
}

export function getDrawnBounds(drawItemsGroup: FeatureGroup | null): LatLngBounds | null {
  if (!drawItemsGroup || drawItemsGroup.getLayers().length === 0) return null
  const bounds = drawItemsGroup.getBounds()
  return bounds.isValid() ? bounds : null
}
