# MAPA DPG

MapaDPG é um componente de mapa interativo para aplicações Vue.js que permite customização de camadas, opções de mapa e ferramentas de desenho. A biblioteca é baseada em Leaflet.js e oferece suporte a múltiplas camadas, ferramentas de desenho personalizadas e interface adaptável.

*Atenção: Essa biblioteca pode ser utilizada apenas para projetos em Vue.js 3.*


> *** Antes de editar, leia [Wiki versionamento](https://inovacao.dataprev.gov.br/git/car-dpg/map-component/wikis/Versionamento) ***

## Instalação

Execute o seguinte comando uma única vez em sua máquina, substituindo `<SEU_USUARIO>` e `<SEU_TOKEN>` por suas credenciais de acesso:

```bash
git config --global url."https://<SEU_USUARIO>:<SEU_TOKEN>@inovacao.dataprev.gov.br".insteadOf "https://inovacao.dataprev.gov.br"
```

Após executar este comando, o Git irá automaticamente usar suas credenciais ao buscar dependências do `inovacao.dataprev.gov.br`.

Por se tratar de uma biblioteca versionada, substitua `<VERSION>` pela versão que deseja. Exemplo v3.0


```package.json
"dependencies": {
  "dpg-mapa": "git+https://inovacao.dataprev.gov.br/git/car-dpg/map-component.git#<VERSION>",
}

```

Registrando globalmente no main.js:

```js
import { createApp } from 'vue'
import MapaDpg from 'node_modules/dpg-mapa/dist'

const app = createApp({})


app.component('MapaDpg', MapaDpg)

app.mount('#app')
```

Ou registrando localmente:

```js
<template>
  <MapaDpg />
</template>

<script setup>
  import MapaDpg from 'node_modules/dpg-mapa/dist'
</script>
```

Em ambos os casos é necessário importar o arquivo de estilos do mapa.

```css
@import 'node_modules/dpg-mapa/dist/index.css';
```

## Utilização

O componente aceita parametros e emite eventos. Além disso, expôe instâncias atraves de refs.

```js
<MapaDpg
  :layers="layers"
  :options="options"
  :showLoading="showLoading"
  :disableLoading="disableLoading"
  :descriptiveMemorial="descriptiveMemorial"
  @onChildLayerToggle="onChildLayerToggle"
  @onGroupLayerToggle="onGroupLayerToggle"
  @onDrawing="onDrawing"
  ref="mapRef"
/>

const mapRef = ref(null)

const mapRefInstances = computed(() => {
  return {
    map: mapRef.value?.map,
    layerControl: mapRef.value?.layerControl,
    drawItemsGroup: mapRef.value?.drawItemsGroup,
    leaflet: mapRef.value?.leaflet
  }
})
```

### Propriedades

| Nome                | Tipo                                      | Obrigatório | Descrição                                                                  |
|---------------------|-------------------------------------------| ----------- | -------------------------------------------------------------------------- |
| showLoading         | boolean                                   | Opcional    | Controla a visibilidade da animação de carregamento.                       |
| layers              | [MapLayers](docs/properties.md)           | Opcional    | Define as camadas base e camadas customizadas.                             |
| options             | [MapOptionsConfig](docs/properties.md)    | Opcional    | Define as configurações do mapa, menu de camadas e ferramentas de desenho. |
| disableLoading      | boolean                                   | Opcional    | Desabilita o animação de carregamento.                                     |
| descriptiveMemorial | [DescriptiveMemorial](docs/properties.md) | Opcional    | Controla a visibilidade do memorial descritivo.                             |

### Eventos

| Nome               | Descrição                                                                                                                                 |
| ------------------ |-------------------------------------------------------------------------------------------------------------------------------------------| 
| onChildLayerToggle | Emite os dados da camada adicionada/removida do mapa                                                                                      |
| onGroupLayerToggle | Emite os dados do grupo e das suas camadas adicionadas/removidas do mapa                                                                  |
| onDrawing          | Emite os dados do(s) desenho(s) adicionado(s)/removido(s) do mapa. Poligonos e retângulos são incrementados com a propriedade "drawnArea" |

### Instâncias

| Nome           | Descrição                                                                          |
| -------------- | ---------------------------------------------------------------------------------- |
| map            | Mapa Leaflet. Utilizada para manipulação do mapa                                   |
| layerControl   | Controle de camadas Leaflet. Utilizada para manipulação das camadas                |
| drawItemsGroup | Grupo de desenhos Leaflet. Utilizada para manipulação dos desenhos                 |
| leaflet        | Instância Leaflet. 

### Injeção menu lateral

Esses pontos permitem que aplicações consumidoras injetem conteúdo próprio no menu lateral do MapaDPG.

| Nome       | ID                         | Posição no menu | Descrição                                                         |
| ---------- | -------------------------- | --------------- | ----------------------------------------------------------------- |
| Top menu   | `external-id-top-menu`     | topo            | Contêiner para inserir conteúdo antes da listagem de camadas.     |
| Bottom menu| `external-id-bottom-menu`  | base            | Contêiner para inserir conteúdo após a listagem de camadas.       |

Para exemplos, consulte o guia: [Injeção de Conteúdo](docs/contentInjection.md)

## Exemplos de parametros

```js
const props = {
    showLoading: true,
    disableLoading: false,
    descriptiveMemorial: {
      show: true,
      customTexts: {
        title: 'New title',
        addPoint: 'Custom text'
      }
    },
    layers: {
        baseMapLayers: [
          {
            name: 'OpenStreetMap',
            layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            key: 'osm',
            default: true
          }
        ],
        customLayers: [
          {
            name: 'Camadas Customizadas',
            key: 'custom',
            toggle: {
              active: 'Ativar',
              inactive: 'Desativar'
            },
            layers: [
                {
                    baseUrl: 'https://...',
                    layers: 'geoserver_key',
                    format: 'image/png',
                    transparent: true,
                    name: 'WMS Layer',
                    activeDefault: true,
                    active: true,
                    key: 'wms_layer',
                    cqlFilter: '...',
                    toggle: {
                        active: 'Ativar',
                        inactive: 'Desativar'
                    },
                    style: {
                        color: '#ff0000',
                        fillColor: '#00ff00'
                    },
                },
                {
                    geojson: {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": []
                        },
                    },
                    name: 'GEOJSON Layer',
                    activeDefault: true,
                    active: true,
                    key: 'geojson_layer',
                    toggle: {
                        active: 'Ativar',
                        inactive: 'Desativar'
                    },
                    style: {
                        color: '#ff0000',
                        fillColor: '#00ff00'
                    },
                }
            ]
          }
        ]
    },
    options: {
        map: {
            config: {
                id: 'map',
                zoomControl: true,
                zoomControlPosition: 'topright',
                minZoom: 3,
                maxZoom: 17,
                center: [-15.235, -51.9253],
                zoom: 4,
                dragging: true,
                scrollWheelZoom: true,
                removeControlLayers: true
            }
        },
        layersMenu: { size: 'small' },
        drawing: {
            show: true,
            translation: {
                lang: 'pt_br',
                customTexts: {
                    tooltips: {
                        placeMarker: 'Clique para posicionar o marcador',
                        firstVertex: 'Clique para posicionar o primeiro vértice',
                        continueLine: 'Clique para continuar desenhando',
                        finishLine: 'Clique em qualquer marcador existente para finalizar',
                        finishPoly: 'Clique no primeiro marcador para finalizar',
                        finishRect: 'Clique para finalizar',
                        startCircle: 'Clique para posicionar o centro do círculo',
                        finishCircle: 'Clique para finalizar o círculo',
                        placeCircleMarker: 'Clique para posicionar o marcador circular',
                        placeText: 'Clique para inserir texto'
                    },
                    actions: {
                        finish: 'Finalizar',
                        cancel: 'Cancelar',
                        removeLastVertex: 'Remover último vértice'
                    },
                    buttonTitles: {
                        drawMarkerButton: 'Desenhar Marcador',
                        drawPolyButton: 'Desenhar Polígonos',
                        drawLineButton: 'Desenhar Linha Poligonal',
                        drawCircleButton: 'Desenhar Círculo',
                        drawRectButton: 'Desenhar Retângulo',
                        editButton: 'Editar Camadas',
                        dragButton: 'Arrastar Camadas',
                        cutButton: 'Recortar Camadas',
                        deleteButton: 'Remover Camadas',
                        drawCircleMarkerButton: 'Desenhar Marcador de Círculo',
                        snappingButton: 'Ajustar marcador arrastado a outras camadas e vértices',
                        pinningButton: 'Unir vértices compartilhados',
                        rotateButton: 'Rotacionar Camadas',
                        drawTextButton: 'Desenhar Texto',
                        scaleButton: 'Redimensionar Camadas',
                        autoTracingButton: 'Traçado Automático de Linha'
                    },
                    measurements: {
                        totalLength: 'Comprimento',
                        segmentLength: 'Comprimento do Segmento',
                        area: 'Área',
                        radius: 'Raio',
                        perimeter: 'Perímetro',
                        height: 'Altura',
                        width: 'Largura',
                        coordinates: 'Posição',
                        coordinatesMarker: 'Marcador de Posição'
                    }
                }
            },
            options: {
                drawMarker: true,
                drawRectangle: true,
                drawPolyline: {
                    color: '#ff0000',
                    weight: 5,
                    opacity: 0.5,
                    stroke: true,
                    fill: true,
                    fillColor: '#ff0000',
                    fillOpacity: 0.2
                },
                drawPolygon: true,
                drawCircle: true,
                drawCircleMarker: true,
                drawText: true,
                editMode: true,
                dragMode: true,
                cutPolygon: false,
                rotateMode: false,
                removalMode: true,
                drawControls: true,
                editControls: true,
                position: 'topright',
                positions: {
                    draw: {
                        position: 'topleft',
                    },
                    edit: {
                        position: 'bottomright',
                    },
                }
            }
        }
    }
}
```
