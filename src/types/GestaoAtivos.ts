import { LatLng } from 'leaflet'

export type GestaoAtivosShape = {
  id: number
  coordinates: LatLng
  type: 'edited' | 'created' | 'deleted'
}
