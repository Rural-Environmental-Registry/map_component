import L, { Map } from 'leaflet'

import fileIconMemorial from '../assets/icons/file-lines-regular-full-gray.svg'

/** Controle Leaflet do botão do memorial descritivo (sem efeitos no Geoman). */
export default class MemorialButtonControl {
  private readonly _map: Map
  private _memorialButtonControl: L.Control | null = null

  constructor(map: Map) {
    this._map = map
  }

  private getOrCreateCustomContainer(): HTMLElement {
    let controlContainer = this._map.getContainer().querySelector('.leaflet-control-memorial') as HTMLElement

    if (!controlContainer) {
      controlContainer = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-memorial')
    }

    return controlContainer
  }

  public add(toggleCallback: () => void, buttonTitle: string): void {
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

  public updateTitle(newTitle: string): void {
    const existingButton = this._map.getContainer().querySelector('.memorial-btn') as HTMLButtonElement

    if (existingButton) {
      existingButton.title = newTitle
      const img = existingButton.querySelector('img')
      if (img) {
        img.alt = newTitle
      }
    }
  }

  public remove(): void {
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
