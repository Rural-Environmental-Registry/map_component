import { FeatureGroup, Control } from 'leaflet'
import { GestaoAtivosShape } from '../types'

type EventLayer = {
  editing: {
    latlngs: L.LatLng[]
  }
  _leaflet_id: number
}

/*
- the types library does not have the "layers" property for LeafletEvent
- the property "layer" is renamed to "layers" in the "L.Draw.Event.EDITED" event
*/
type EditedEvent = L.LeafletEvent & {
  layers: L.FeatureGroup
}

const CONFIG: Control.DrawConstructorOptions = {
  position: 'topright',
  draw: {
    polygon: {
      showArea: false,
      showLength: false,
      precision: {
        km: 1,
        ha: 1,
        m: 0
      }
    },
    polyline: false,
    circle: false,
    rectangle: false,
    marker: false,
    circlemarker: false
  },
  edit: {
    featureGroup: new FeatureGroup(),
    edit: {
      selectedPathOptions: {
        fill: true,
        fillColor: '#42916e',
        fillOpacity: 0.1
      }
    }
  }
}

export class GestaoAtivosHandler {
  private featureGroup: FeatureGroup
  private drawControl!: Control.Draw

  constructor() {
    this.featureGroup = new FeatureGroup()
    this.config(CONFIG)
  }

  private config(configuration: Control.DrawConstructorOptions): void {
    configuration.edit!.featureGroup = this.featureGroup
    this.drawControl = new Control.Draw(configuration)
  }

  public handleCreatedShape(event: L.LeafletEvent): GestaoAtivosShape {
    // "layer" is marked deprecated, but "propagatedFrom" does not exist in event
    const { layer } = event

    const {
      _leaflet_id,
      editing: { latlngs }
    } = layer as EventLayer

    return {
      coordinates: latlngs[0],
      id: _leaflet_id,
      type: 'created'
    }
  }

  public handleEditedShapes(event: L.LeafletEvent): GestaoAtivosShape[] {
    const editedEvent = event as EditedEvent

    const { layers } = editedEvent

    const shapes: GestaoAtivosShape[] = []

    layers.eachLayer((layer: L.Layer) => {
      const {
        _leaflet_id,
        editing: { latlngs }
      } = layer as unknown as EventLayer

      shapes.push({
        coordinates: latlngs[0],
        id: _leaflet_id,
        type: 'edited'
      })
    })

    return shapes
  }

  public handleDeletedShapes(event: L.LeafletEvent): GestaoAtivosShape[] {
    const editedEvent = event as EditedEvent

    const { layers } = editedEvent

    const shapes: GestaoAtivosShape[] = []

    layers.eachLayer((layer: L.Layer) => {
      const {
        _leaflet_id,
        editing: { latlngs }
      } = layer as unknown as EventLayer

      shapes.push({
        coordinates: latlngs[0],
        id: _leaflet_id,
        type: 'deleted'
      })
    })

    return shapes
  }

  public init(): { control: Control.Draw; featureGroup: FeatureGroup } {
    return {
      control: this.drawControl,
      featureGroup: this.featureGroup
    }
  }
}
