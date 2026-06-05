/**
 * Backup da medição via leaflet-measure (não utilizada no mapa).
 * Mantida para referência/rollback. Ver measureToolsHandler.ts.
 */
import L, { Map } from 'leaflet'
import type { LineString, Point, Polygon } from 'geojson'

import './loadLeafletMeasure'
import { MapToolsConfig, MeasureCompleteEvent } from '../types'
import type { LeafletMeasureFinishEvent } from '../types/leaflet-measure'

type LeafletMeasureCallbacks = {
  onMeasureComplete?: (data: MeasureCompleteEvent) => void
}

type InternalMeasureControl = L.Control & {
  _container?: HTMLElement
  _expand?: () => void
  _collapse?: () => void
  _startMeasure?: () => void
  _handleMeasureClick?: (event: L.LeafletMouseEvent) => void
  _centerCaptureMarker?: () => void
  _setCaptureMarkerIcon?: () => void
  _locked?: boolean
}

export default class LeafletMeasureHandler {
  private readonly _map: Map
  private readonly _mapContainer: HTMLElement
  private readonly _outerContainer: HTMLElement | null
  private readonly _control: InternalMeasureControl
  private readonly _callbacks: LeafletMeasureCallbacks
  private readonly _boundMeasureStart: () => void
  private readonly _boundMeasureFinish: (event: LeafletMeasureFinishEvent) => void
  private readonly _boundEscapeKey: (event: KeyboardEvent) => void
  private readonly _boundToggleClick: (event: Event) => void
  private _finishedWithResult = false
  private _panelOpen = false

  constructor(map: Map, config: MapToolsConfig, callbacks: LeafletMeasureCallbacks = {}) {
    this._map = map
    this._mapContainer = map.getContainer()
    this._outerContainer = this._mapContainer.closest('.map-container')
    this._callbacks = callbacks

    this._boundMeasureStart = () => this.handleMeasureStart()
    this._boundMeasureFinish = (event) => this.handleMeasureFinish(event)
    this._boundEscapeKey = (event) => {
      if (event.key !== 'Escape') return

      if (this.isMeasureLocked()) {
        this.cancel()
        return
      }

      if (this._panelOpen) {
        this.hideMeasurePanel()
      }
    }
    this._boundToggleClick = (event) => this.handleToggleClick(event)

    const shapeOptions = config.measureArea?.shapeOptions ?? {}

    this._control = L.control.measure({
      position: config.position ?? 'topright',
      primaryLengthUnit: 'kilometers',
      secondaryLengthUnit: undefined,
      primaryAreaUnit: 'hectares',
      secondaryAreaUnit: undefined,
      activeColor: shapeOptions.color ?? '#e67e22',
      completedColor: shapeOptions.fillColor ?? '#e67e22',
      captureZIndex: 10000,
      popupOptions: {
        className: 'leaflet-measure-resultpopup',
        autoPan: false,
        autoPanPadding: [10, 10]
      }
    }) as InternalMeasureControl

    this._control.addTo(map)
    this.patchMeasureControlInteraction()
    this.patchMeasureMapPan()
    this.patchMeasureClickStability()
    this.bindEvents()
    this.setupControlActions(config)
    this.localizeToggle(config.measureArea?.title ?? 'Measure')
  }

  public destroy(): void {
    this.removeEscapeListener()
    this.unbindToggleClick()
    this._map.off('measurestart', this._boundMeasureStart)
    this._map.off('measurefinish', this._boundMeasureFinish)
    this.setMeasureActive(false)
    this._map.removeControl(this._control)
  }

  /** Abre o painel nativo do leaflet-measure (API programática). */
  public open(): void {
    if (!this.isMeasureLocked()) {
      this.showMeasurePanel()
    }
  }

  /** Cancela medição em andamento e restaura cursor/interação padrão. */
  public cancel(): void {
    const cancelBtn = this._map.getContainer().querySelector('.leaflet-control-measure .js-cancel')
    if (cancelBtn instanceof HTMLElement) {
      cancelBtn.click()
      return
    }

    this.setMeasureActive(false)
    this.hideMeasurePanel()
  }

  public isActive(): boolean {
    return !!(this._map as Map & { _leafletMeasureActive?: boolean })._leafletMeasureActive
  }

  private bindEvents(): void {
    this._map.on('measurestart', this._boundMeasureStart)
    this._map.on('measurefinish', this._boundMeasureFinish)
  }

  private setupControlActions(config: MapToolsConfig): void {
    const root = this.getMeasureRoot()
    if (!root) return

    const cancelBtn = root.querySelector('.js-cancel')
    const finishBtn = root.querySelector('.js-finish')

    cancelBtn?.addEventListener('click', () => {
      this._finishedWithResult = false
    })

    finishBtn?.addEventListener('click', () => {
      this._finishedWithResult = true
    })

    this.localizeMeasuringPrompt(config)
  }

  /** Desativa hover/auto-close do plugin; painel abre/fecha só por clique no botão ou Esc. */
  private patchMeasureControlInteraction(): void {
    this._control._expand = () => undefined
    this._control._collapse = () => undefined

    const root = this.getMeasureRoot()
    const interaction = root?.querySelector('.js-interaction')

    if (root instanceof HTMLElement) {
      L.DomEvent.disableClickPropagation(root)
      L.DomEvent.disableScrollPropagation(root)
    }

    if (interaction instanceof HTMLElement) {
      L.DomEvent.disableClickPropagation(interaction)
      L.DomEvent.disableScrollPropagation(interaction)
    }

    this.hideMeasurePanel()
    this.bindToggleClick()
  }

  /** Evita pan do mapa ao adicionar pontos (move/resize do marcador de captura). */
  private patchMeasureMapPan(): void {
    const originalStart = this._control._startMeasure?.bind(this._control)
    if (!originalStart) return

    this._control._startMeasure = () => {
      originalStart()
      this.detachMeasureMapPanHandlers()
    }
  }

  private detachMeasureMapPanHandlers(): void {
    if (this._control._centerCaptureMarker) {
      this._map.off('move', this._control._centerCaptureMarker, this._control)
    }

    if (this._control._setCaptureMarkerIcon) {
      this._map.off('resize', this._control._setCaptureMarkerIcon, this._control)
    }
  }

  /** Mantém centro/zoom ao incluir vértice (evita pan por reflow do controle). */
  private patchMeasureClickStability(): void {
    const originalClick = this._control._handleMeasureClick?.bind(this._control)
    if (!originalClick) return

    this._control._handleMeasureClick = (event) => {
      const center = this._map.getCenter()
      const zoom = this._map.getZoom()

      originalClick(event)

      queueMicrotask(() => {
        if (!this.isMeasureLocked()) return

        const nextCenter = this._map.getCenter()
        const nextZoom = this._map.getZoom()

        if (!nextCenter.equals(center) || nextZoom !== zoom) {
          this._map.setView(center, zoom, { animate: false })
        }
      })
    }
  }

  private bindToggleClick(): void {
    const toggle = this.getMeasureRoot()?.querySelector('.js-toggle')
    if (!(toggle instanceof HTMLElement)) return

    L.DomEvent.on(toggle, 'click', this._boundToggleClick)
  }

  private unbindToggleClick(): void {
    const toggle = this.getMeasureRoot()?.querySelector('.js-toggle')
    if (!(toggle instanceof HTMLElement)) return

    L.DomEvent.off(toggle, 'click', this._boundToggleClick)
  }

  private handleToggleClick(event: Event): void {
    L.DomEvent.stopPropagation(event)
    L.DomEvent.preventDefault(event)

    if (this.isMeasureLocked()) return

    if (this._panelOpen) {
      this.hideMeasurePanel()
    } else {
      this.showMeasurePanel()
    }
  }

  private showMeasurePanel(): void {
    const root = this.getMeasureRoot()
    const toggle = root?.querySelector('.js-toggle')
    const interaction = root?.querySelector('.js-interaction')

    if (!(root instanceof HTMLElement) || !(interaction instanceof HTMLElement)) return

    this._panelOpen = true
    interaction.style.removeProperty('display')

    if (toggle instanceof HTMLElement) {
      toggle.style.removeProperty('display')
    }

    root.classList.add('leaflet-measure-expanded')
    this.addEscapeListener()
  }

  private hideMeasurePanel(): void {
    const root = this.getMeasureRoot()
    const toggle = root?.querySelector('.js-toggle')
    const interaction = root?.querySelector('.js-interaction')

    if (!(root instanceof HTMLElement) || !(interaction instanceof HTMLElement)) return

    this._panelOpen = false
    interaction.style.display = 'none'

    if (toggle instanceof HTMLElement) {
      toggle.style.removeProperty('display')
    }

    root.classList.remove('leaflet-measure-expanded')

    if (!this.isMeasureLocked()) {
      this.removeEscapeListener()
    }
  }

  private getMeasureRoot(): HTMLElement | null {
    const root = this._map.getContainer().querySelector('.leaflet-control-measure')
    return root instanceof HTMLElement ? root : null
  }

  private isMeasureLocked(): boolean {
    return !!this._control._locked
  }

  private addEscapeListener(): void {
    document.addEventListener('keydown', this._boundEscapeKey)
  }

  private removeEscapeListener(): void {
    document.removeEventListener('keydown', this._boundEscapeKey)
  }

  private handleMeasureStart(): void {
    this._finishedWithResult = false
    this.showMeasurePanel()
    this.detachMeasureMapPanHandlers()
    this.setMeasureActive(true)
    this.addEscapeListener()
  }

  private handleMeasureFinish(event: LeafletMeasureFinishEvent): void {
    this.setMeasureActive(false)
    this.removeEscapeListener()
    this.hideMeasurePanel()

    if (!this._finishedWithResult || event.pointCount <= 0) {
      this._finishedWithResult = false
      return
    }

    const payload: MeasureCompleteEvent = {
      geojson: this.buildGeoJson(event)
    }

    if (event.length > 0) {
      payload.lengthM = event.length
      payload.lengthKm = event.length / 1000
    }

    if (event.area > 0) {
      payload.m2 = event.area
      payload.ha = event.area / 10000
    }

    this._callbacks.onMeasureComplete?.(payload)
    this._finishedWithResult = false
  }

  private buildGeoJson(event: LeafletMeasureFinishEvent): MeasureCompleteEvent['geojson'] {
    const coordinates = event.points.map((point) => [point.lng, point.lat])

    if (event.pointCount <= 1) {
      const [lng, lat] = coordinates[0] ?? [0, 0]
      return { type: 'Point', coordinates: [lng, lat] } as Point
    }

    if (event.pointCount === 2) {
      return { type: 'LineString', coordinates } as LineString
    }

    const ring = [...coordinates]
    const first = ring[0]
    const last = ring[ring.length - 1]
    if (first && last && (first[0] !== last[0] || first[1] !== last[1])) {
      ring.push(first)
    }

    return { type: 'Polygon', coordinates: [ring] } as Polygon
  }

  private setMeasureActive(active: boolean): void {
    ;(this._map as Map & { _leafletMeasureActive?: boolean })._leafletMeasureActive = active
    this._mapContainer.classList.toggle('map-container--measuring', active)

    if (this._outerContainer instanceof HTMLElement) {
      this._outerContainer.classList.toggle('map-container--measuring', active)
    }
  }

  private localizeToggle(title: string): void {
    const toggle = this._map.getContainer().querySelector('.leaflet-control-measure .js-toggle')
    if (toggle instanceof HTMLElement) {
      toggle.title = title
      toggle.setAttribute('aria-label', title)
    }
  }

  private localizeMeasuringPrompt(config: MapToolsConfig): void {
    const root = this.getMeasureRoot()
    if (!root) return

    const cancelBtn = root.querySelector('.js-cancel')
    const finishBtn = root.querySelector('.js-finish')

    if (cancelBtn instanceof HTMLElement) {
      cancelBtn.textContent = config.texts?.measureCancel ?? 'Cancel'
    }

    if (finishBtn instanceof HTMLElement) {
      finishBtn.textContent = config.texts?.measureFinish ?? 'Finish measurement'
    }
  }
}
