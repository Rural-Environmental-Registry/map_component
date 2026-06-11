import { LayerData } from '../types'

const MENU_HISTORY_KEY = 'menuHistory'

const readHistory = (): Record<string, boolean> => {
  const raw = window.sessionStorage.getItem(MENU_HISTORY_KEY)
  if (!raw) return {}

  const parsed: unknown = JSON.parse(raw)
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    return {}
  }

  return parsed as Record<string, boolean>
}

export const setHistory = (layer: LayerData): void => {
  try {
    const history = readHistory()
    window.sessionStorage.setItem(
      MENU_HISTORY_KEY,
      JSON.stringify({ ...history, [layer.key]: layer.active })
    )
  } catch {
    // sessionStorage indisponível ou JSON inválido — ignora persistência
  }
}

/** Retorna o estado salvo da camada ou `undefined` se não houver histórico. */
export const getHistory = (layerKey: string): boolean | undefined => {
  try {
    const history = readHistory()
    const isActive = history[layerKey]

    return isActive !== undefined ? isActive : undefined
  } catch {
    return undefined
  }
}

/** Resolve `active`/`activeDefault` sem mutar o objeto original (mesma regra do fluxo legado). */
export const resolveLayerActiveState = (layer: LayerData, persist: boolean): LayerData => {
  const savedActive = persist ? getHistory(layer.key) : undefined

  let active = layer.active ?? false
  let activeDefault = layer.activeDefault

  if (savedActive !== undefined) {
    active = savedActive
    activeDefault = savedActive
  }

  if (activeDefault) {
    active = activeDefault
  }

  return { ...layer, active, activeDefault }
}

/** Indica se a camada deve ser aplicada ao mapa na inicialização. */
export const shouldInitLayerOnMap = (layer: LayerData, persist: boolean): boolean => {
  const resolved = resolveLayerActiveState(layer, persist)

  if (resolved.activeDefault) return true

  return persist && getHistory(layer.key) !== undefined
}
