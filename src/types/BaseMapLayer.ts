export type BaseMapLayer = {
  name: string
  url: string
  default: boolean
  key: string
}

export type BaseMapLayersConfig = {
  baseMap: BaseMapLayer[]
}
