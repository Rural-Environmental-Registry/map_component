import { Map, FeatureGroup, Control, GeometryUtil, drawLocal } from 'leaflet'

const DEFAULT_DRAW_OPTIONS: Control.DrawConstructorOptions = {
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
  }
}

export default class DrawingControlHandler {
  private _map: Map
  private _drawControl: Control.Draw
  private _drawItemsGroup: FeatureGroup
  private _drawOptions: Control.DrawConstructorOptions = DEFAULT_DRAW_OPTIONS

  constructor(
    map: L.Map,
    drawOptions: Control.DrawConstructorOptions,
    eventEmitter: Function
  ) {
    this._map = map
    this._drawItemsGroup = new FeatureGroup()

    if (drawOptions) {
      this._drawOptions = drawOptions
    }

    this._drawOptions.edit = {
      ...this._drawOptions.edit,
      featureGroup: this._drawItemsGroup
    }

    this._drawControl = new Control.Draw(this._drawOptions)

    this.init(eventEmitter)
  }

  private addDrawingControls(): void {
    this._map.addLayer(this._drawItemsGroup)

    this._map.addControl(this._drawControl)
  }

  init(eventEmitter: Function): void {
    this.addDrawingControls()
    this.addMapDrawingEvents(eventEmitter)
    this.addTranslation()
  }

  private addTranslation(): void {
    //   drawLocal = {
    //     draw: {
    //       toolbar: {
    //         actions: {
    //           title: 'Cancelar desenho',
    //           text: 'Cancelar'
    //         },
    //         finish: {
    //           title: 'Terminar desenho',
    //           text: 'Terminar'
    //         },
    //         undo: {
    //           title: 'Apagar último ponto desenhado',
    //           text: 'Apagar último ponto'
    //         },
    //         polyline: 'Desenhar uma linha',
    //         polygon: 'Desenhar um polígono',
    //         rectangle: 'Desenhar um retângulo',
    //         circle: 'Desenhar um círculo',
    //         marker: 'Desenhar um marcador'
    //       },
    //       handlers: {
    //         circle: {
    //           tooltip: {
    //             start: 'Clique e arraste para desenhar círculo.'
    //           },
    //           radius: 'Raio'
    //         },
    //         marker: {
    //           tooltip: {
    //             start: 'Clique no mapa para colocar um marcador.'
    //           }
    //         },
    //         polygon: {
    //           tooltip: {
    //             start: 'Clique para começar a desenhar forma.',
    //             cont: 'Clique para continuar desenhando forma.',
    //             end: 'Clique no primeiro ponto para fechar esta forma.'
    //           }
    //         },
    //         polyline: {
    //           error:
    //             '<strong>Erro:</strong> as bordas da forma não podem se cruzar!',
    //           tooltip: {
    //             start: 'Clique para começar a desenhar linha.',
    //             cont: 'Clique para continuar desenhando linha.',
    //             end: 'Clique no último ponto para terminar a linha.'
    //           }
    //         },
    //         rectangle: {
    //           tooltip: {
    //             start: 'Clique e arraste para desenhar retângulo.'
    //           }
    //         },
    //         simpleshape: {
    //           tooltip: {
    //             end: 'Solte o mouse para terminar o desenho.'
    //           }
    //         }
    //       }
    //     },
    //     edit: {
    //       toolbar: {
    //         actions: {
    //           save: {
    //             title: 'Salvar alterações',
    //             text: 'Salvar'
    //           },
    //           cancel: {
    //             title: 'Cancelar edição, descartar todas as alterações',
    //             text: 'Cancelar'
    //           },
    //           clearAll: {
    //             title: 'Limpar todas as camadas',
    //             text: 'Limpar tudo'
    //           }
    //         },
    //         buttons: {
    //           edit: 'Editar camadas',
    //           editDisabled: 'Nenhuma camada para editar',
    //           remove: 'Apagar camadas',
    //           removeDisabled: 'Nenhuma camada para apagar'
    //         }
    //       },
    //       handlers: {
    //         edit: {
    //           tooltip: {
    //             text: 'Arraste os pontos ou marcadores para editar a forma.',
    //             subtext: 'Clique em cancelar para desfazer as alterações.'
    //           }
    //         },
    //         remove: {
    //           tooltip: {
    //             text: 'Clique em uma forma para removê-la.'
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }

  private incrementLayerInfos(data: any): any {
    let area = 0

    if (data.layerType === 'polygon') {
      area = GeometryUtil.geodesicArea(data.layer.getLatLngs()[0])
    }

    data.layer.drawnArea = {
      m2: area,
      km2: area / 1000000,
      ha: area / 10000
    }

    return data
  }

  private addMapDrawingEvents(eventEmitterCallback: Function): void {
    this._map.on('draw:created', (e: any) => {
      this._drawItemsGroup.addLayer(e.layer)

      const data = this.incrementLayerInfos(e)

      eventEmitterCallback({ type: 'created', data })
    })

    this._map.on('draw:edited', (e: any) => {
      this._drawItemsGroup.addLayer(e.layer)

      const data = this.incrementLayerInfos(e)

      eventEmitterCallback({ type: 'edited', data })
    })

    this._map.on('draw:deleted', (e: any) => {
      eventEmitterCallback({ type: 'deleted', data: e })
    })
  }

  get drawItemsGroup(): FeatureGroup {
    return this._drawItemsGroup
  }

  get drawControl(): Control.Draw {
    return this._drawControl
  }

  get map(): Map {
    return this._map
  }
}
