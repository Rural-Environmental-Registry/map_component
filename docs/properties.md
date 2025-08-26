## MapLayers

| Nome           | Tipo                          | Descrição             |
| -------------- | ----------------------------- | --------------------- |
| baseMapLayers  | [BaseLayer[]](#baselayer)     | Camadas base.         |
| customLayers   | [CustomLayer[]](#customlayer) | Camadas customizadas. |

## BaseLayer

| Nome        | Tipo             | Descrição                            |
| ----------- | ---------------- | ------------------------------------ |
| name        | string           | Nome da camada base.                 |
| key         | string           | Identificador único.                 |
| default     | boolean          | Define se essa camada será a padrão. |
| url         | string           | URL do serviço de tiles.             |

## CustomLayer

| Nome   | Tipo                      | Descrição                                              |
| ------ | ------------------------- | ------------------------------------------------------ |
| name   | string                    | Nome do grupo de camadas.                              |
| key    | string                    | Chave do grupo.                                        |
| toggle | {active, inactive}        | Textos utilizados nos botões ativar/desativar camadas. |
| layers | [LayerData[]](#layerdata) | Lista de camadas dentro do grupo.                      |

## LayerData

| Nome          | Tipo               | Descrição                                              |
| ------------- | ------------------ | ------------------------------------------------------ |
| baseUrl       | string             | URL base da camada.                                    |
| layers        | string             | Nome das layers no serviço.                            |
| format        | string             | Formato da imagem (ex: image/png).                     |
| transparent   | boolean            | Se a camada é transparente.                            |
| name          | string             | Nome exibido no menu.                                  |
| activeDefault | boolean            | Ativa por padrão.                                      |
| active        | boolean            | Estado atual da camada.                                |
| key           | string             | Identificador único.                                   |
| toggle        | {active, inactive} | Textos utilizados nos botões ativar/desativar camadas. |
| style         | {color, fillColor} | Cores utilizadas nas legendas de menu.                 |
| options       | any                | Configurações adicionais (opcional).                   |


## MapOptionsConfig

| Nome        | Tipo                                  | Descrição                                                 |
| ----------- | ------------------------------------- | --------------------------------------------------------- |
| map         | [MapConfig](#mapconfig)               | Configurações básicas do mapa (centro, zoom, etc).        |
| layersMenu  | [LayersMenuConfig](#layersmenuconfig) | Configuração do menu de camadas, se houver.               |
| drawing     | [DrawingConfig](#drawingconfig)       | Opções para ativar e personalizar ferramentas de desenho. |

## MapConfig

| Campo  | Tipo                 | Descrição             |
| ------ |----------------------|-----------------------|
| config | [MapConfigConfig](#mapconfigconfig) | Define opções do mapa |

## MapConfigConfig

| Campo               | Tipo                                       | Descrição                                         |
|---------------------|--------------------------------------------|---------------------------------------------------|
| --                  | [MapOptions](#mapoptions)                  | Define opções do mapa com base na API do Leaflet. |
| id                  | string                                     | Define id do mapa.                                |
| removeControlLayers | boolean                                    | Define exibição dos controles do mapa.            |
| zoomControlPosition | [zoomControlPosition](zoomcontrolposition) | Posição dos controles de zoom.                    |


## LayersMenuConfig

| Campo       | Tipo       | Descrição                                          |
| ----------- | ---------- | -------------------------------------------------- |
|size         | string     | Tamanho do menu de camadas (small, medium, large). |

## DrawingConfig

| Campo        | Tipo               | Descrição                                                |
| ------------ |--------------------| -------------------------------------------------------- |
| show         | boolean            | Ativa ou desativa as ferramentas de desenho.             |
| options      | [ToolbarOptions](#toolbaroptions) | Opções para personalizar ferramentas de desenho.          |
|translation  | [TranslationConfig](#translationconfig) | Traduções para ferramentas de desenho.          |

[//]: # (## ToolbarOptions)
 Esse campo define opções de cada ferramenta de desenho. É um tipo composto que pode ser:
 - [ControlOptions](https://geoman.io/docs/leaflet/toolbar)
 - [BlockPositions](https://geoman.io/docs/leaflet/toolbar#toolbar-block-position)
 - Boolean
 - [PathOptions](https://leafletjs.com/reference.html#path)


## Links externos

#### [MapOptions](https://leafletjs.com/reference.html#map-option)
#### [TranslationConfig](https://github.com/geoman-io/leaflet-geoman/tree/master/src/assets/translations)
#### [ZoomControlPosition](https://leafletjs.com/reference.html#control-zoom-position)