import { LayerData } from '../types'

export const setHistory = (layer: LayerData): void => {
  const history = JSON.parse(window.sessionStorage.getItem('menuHistory') || '{}')

  window.sessionStorage.setItem('menuHistory', JSON.stringify({ ...history, [layer.key]: layer.active }))
}

export const getHistory = (layer: LayerData): void => {
  const history = JSON.parse(window.sessionStorage.getItem('menuHistory') || '{}')
  const isActive = history[layer.key]

  if (isActive !== undefined) {
    layer.active = isActive
    layer.activeDefault = isActive
  }
}
