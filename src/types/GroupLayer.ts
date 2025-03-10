type ActiveLabel = {
  active: string
  inactive: string
}

export type ChildLayer = {
  baseUrl: string
  layers: string
  format: string
  transparent: boolean
  name: string
  active: boolean
  key: string
  activeLabel: ActiveLabel
  style: {
    color: string
    fillColor: string
  }
}

export type ParentLayer = {
  name: string
  key: string
  color: string
  activeLabel: ActiveLabel
  layers: ChildLayer[]
}

export type LayersConfig = {
  groups: ParentLayer[]
  menu: {
    show: boolean
    size: 'small' | 'medium' | 'large'
  }
}
