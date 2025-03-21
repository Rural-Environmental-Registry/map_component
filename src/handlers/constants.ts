import { Control, Localization } from 'leaflet'

export const DEFAULT_DRAW_OPTIONS: Control.DrawConstructorOptions = {
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

export const DEFAULT_DRAWING_CONTROL_TEXTS: Localization.DrawLocal = {
  draw: {
    toolbar: {
      actions: {
        title: 'Cancelar desenho',
        text: 'Cancelar'
      },
      finish: {
        title: 'Terminar desenho',
        text: 'Terminar'
      },
      undo: {
        title: 'Apagar último ponto desenhado',
        text: 'Apagar último ponto'
      },
      buttons: {
        polyline: 'Desenhar uma linha',
        polygon: 'Desenhar um polígono',
        rectangle: 'Desenhar um retângulo',
        circle: 'Desenhar um círculo',
        marker: 'Desenhar um marcador',
        circlemarker: 'Desenhar um marcador de círculo'
      }
    },
    handlers: {
      circle: {
        tooltip: {
          start: 'Clique e arraste para desenhar círculo'
        },
        radius: 'Raio'
      },
      circlemarker: {
        tooltip: {
          start: 'Clique no mapa para colocar um marcador de círculo'
        }
      },
      marker: {
        tooltip: {
          start: 'Clique no mapa para colocar um marcador'
        }
      },
      polygon: {
        tooltip: {
          start: 'Clique para começar a desenhar forma',
          cont: 'Clique para continuar desenhando forma',
          end: 'Clique no primeiro ponto para fechar esta forma'
        }
      },
      polyline: {
        error: '<strong>Erro:</strong> as bordas da forma não podem se cruzar!',
        tooltip: {
          start: 'Clique para começar a desenhar linha',
          cont: 'Clique para continuar desenhando linha',
          end: 'Clique no último ponto para terminar a linha'
        }
      },
      rectangle: {
        tooltip: {
          start: 'Clique e arraste para desenhar retângulo'
        }
      },
      simpleshape: {
        tooltip: {
          end: 'Solte o mouse para terminar o desenho'
        }
      }
    }
  },
  edit: {
    toolbar: {
      actions: {
        save: {
          title: 'Salvar alterações',
          text: 'Salvar'
        },
        cancel: {
          title: 'Cancelar edição, descartar todas as alterações',
          text: 'Cancelar'
        },
        clearAll: {
          title: 'Limpar todas as camadas',
          text: 'Limpar tudo'
        }
      },
      buttons: {
        edit: 'Editar camadas',
        editDisabled: 'Nenhuma camada para editar',
        remove: 'Apagar camadas',
        removeDisabled: 'Nenhuma camada para apagar'
      }
    },
    handlers: {
      edit: {
        tooltip: {
          text: 'Arraste os pontos ou marcadores para editar a forma',
          subtext: 'Clique em cancelar para desfazer as alterações'
        }
      },
      remove: {
        tooltip: {
          text: 'Clique em uma forma para removê-la'
        }
      }
    }
  }
}
