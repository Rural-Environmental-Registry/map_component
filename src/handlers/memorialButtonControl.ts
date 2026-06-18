import L, { Map } from 'leaflet'

import fileIconMemorial from '../assets/icons/file-lines-regular-full-gray.svg'

/** Controles Leaflet do memorial descritivo e importação de shapefile no toolbar de desenho. */
export default class MemorialButtonControl {
  private readonly _map: Map
  private _memorialButtonControl: L.Control | null = null

  constructor(map: Map) {
    this._map = map
  }

  private getOrCreateMemorialContainer(): HTMLElement {
    let controlContainer = this._map.getContainer().querySelector('.leaflet-control-memorial') as HTMLElement

    if (!controlContainer) {
      controlContainer = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-memorial')
    }

    return controlContainer
  }

  private ensureMemorialControlOnMap(): void {
    if (this._memorialButtonControl) return

    const handler = this

    const MemorialControl = L.Control.extend({
      options: {
        position: 'topright'
      },
      onAdd: () => handler.getOrCreateMemorialContainer()
    })

    this._memorialButtonControl = new MemorialControl()
    this._map.addControl(this._memorialButtonControl)
  }

  private getPolygonButtonContainer(): HTMLElement | null {
    const polygonIcon = this._map.getContainer().querySelector('.leaflet-pm-toolbar .leaflet-pm-icon-polygon')

    return polygonIcon?.closest('.button-container') as HTMLElement | null
  }

  public addMemorial(toggleCallback: () => void, buttonTitle: string): void {
    const existingButton = this._map.getContainer().querySelector('.memorial-btn')
    if (existingButton) return

    this.ensureMemorialControlOnMap()
    const controlContainer = this.getOrCreateMemorialContainer()

    const btn = L.DomUtil.create('button', 'memorial-btn leaflet-pm-icon-memorial', controlContainer)

    btn.innerHTML = `<img src="${fileIconMemorial}" alt="${buttonTitle}" />`
    btn.title = buttonTitle

    L.DomEvent.on(btn, 'click', (e: Event) => {
      e.stopPropagation()
      e.preventDefault()
      toggleCallback()
    })
  }

  public attachShapefileToDrawToolbar(importCallback: () => void, buttonTitle: string): boolean {
    if (this._map.getContainer().querySelector('.shapefile-toolbar-btn')) {
      return true
    }

    const polygonContainer = this.getPolygonButtonContainer()
    if (!polygonContainer) return false

    const shapefileContainer = L.DomUtil.create('div', 'button-container button-container-shapefile')

    const link = L.DomUtil.create('a', 'leaflet-buttons-control-button shapefile-toolbar-btn', shapefileContainer) as HTMLAnchorElement
    link.href = '#'
    link.title = buttonTitle
    link.setAttribute('role', 'button')
    link.innerHTML = '<div class="control-icon leaflet-pm-icon-shapefile"></div>'

    polygonContainer.insertAdjacentElement('afterend', shapefileContainer)

    L.DomEvent.on(link, 'click', (e: Event) => {
      e.stopPropagation()
      e.preventDefault()
      importCallback()
    })

    return true
  }

  public addShapefile(importCallback: () => void, buttonTitle: string, retries = 8): void {
    const attached = this.attachShapefileToDrawToolbar(importCallback, buttonTitle)

    if (!attached && retries > 0) {
      window.setTimeout(() => this.addShapefile(importCallback, buttonTitle, retries - 1), 150)
    }
  }

  public updateMemorialTitle(newTitle: string): void {
    const existingButton = this._map.getContainer().querySelector('.memorial-btn') as HTMLButtonElement

    if (existingButton) {
      existingButton.title = newTitle
      const img = existingButton.querySelector('img')
      if (img) {
        img.alt = newTitle
      }
    }
  }

  public updateShapefileTitle(newTitle: string): void {
    const existingButton = this._map.getContainer().querySelector('.shapefile-toolbar-btn') as HTMLAnchorElement

    if (existingButton) {
      existingButton.title = newTitle
    }
  }

  public removeShapefileFromToolbar(): void {
    this._map.getContainer().querySelector('.button-container-shapefile')?.remove()
  }

  public remove(): void {
    this.removeShapefileFromToolbar()

    const controlContainer = this._map.getContainer().querySelector('.leaflet-control-memorial')

    if (controlContainer) {
      controlContainer.querySelector('.memorial-btn')?.remove()

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
