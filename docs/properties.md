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

## DescriptiveMemorial

| Campo       | Tipo                                          | Descrição                                          |
|-------------|-----------------------------------------------|----------------------------------------------------|
| show        | boolean                                       | Ativa ou desativa o menu de memorial descritivo.   |
| customTexts | [CoordinatePanelTexts](#coordinatepaneltexts) | Textos personalizados para o menu de memorial descritivo. |

## CoordinatePanelTexts

| Campo | Tipo | Descrição |
|-------|------|-----------|
| title | string | Título do painel de coordenadas. |
| addPoint | string | Texto para adicionar ponto. |
| editPoint | string | Texto para editar ponto. |
| removePoint | string | Texto para remover ponto. |
| actions | string | Rótulo para a seção de ações. |
| clearGeometries | string | Texto para limpar geometrias. |
| index | string | Rótulo para o índice. |
| x | string | Rótulo para coordenada X. |
| y | string | Rótulo para coordenada Y. |
| azimuth | string | Rótulo para azimute. |
| distance | string | Rótulo para distância. |
| noPoints | string | Mensagem quando não há pontos. |
| addPointTitle | string | Título do botão de adicionar ponto. |
| editPointTitle | string | Título do botão de editar ponto. |
| removePointTitle | string | Título do botão de remover ponto. |
| clearGeometriesTitle | string | Título do botão de limpar geometrias. |
| addPointDescription | string | Descrição do botão de adicionar ponto. |
| editPointDescription | string | Descrição do botão de editar ponto. |
| removePointDescription | string | Descrição do botão de remover ponto. |
| clearGeometriesDescription | string | Descrição do botão de limpar geometrias. |
| memorialDescriptive | string | Rótulo para memorial descritivo. |
| referenceSystem | string | Rótulo para sistema de referência. |
| selectSystem | string | Texto para selecionar sistema. |
| sirgas2000 | string | Rótulo para SIRGAS 2000. |
| coordinateFormat | string | Rótulo para formato de coordenada. |
| selectFormat | string | Texto para selecionar formato. |
| decimalDegrees | string | Rótulo para graus decimais. |
| degreesMinutesSeconds | string | Rótulo para graus, minutos e segundos. |
| manualInput | string | Rótulo para entrada manual. |
| insertCoordinates | string | Texto para inserir coordenadas. |
| xLongitude | string | Rótulo para longitude (X). |
| yLatitude | string | Rótulo para latitude (Y). |
| degrees | string | Rótulo para graus. |
| minutes | string | Rótulo para minutos. |
| seconds | string | Rótulo para segundos. |
| addedPoints | string | Rótulo para pontos adicionados. |
| finalizeGeometry | string | Texto para finalizar geometria. |
| csvUpload | string | Rótulo para upload de CSV. |
| csvFileUpload | string | Texto para upload de arquivo CSV. |
| dragCsvFile | string | Texto para arrastar arquivo CSV. |
| csvColumnsInfo | string | Informações sobre colunas do CSV. |
| applyCsvCoordinates | string | Texto para aplicar coordenadas do CSV. |
| placeholderLongitude | string | Placeholder para longitude. |
| placeholderLatitude | string | Placeholder para latitude. |
| placeholderAzimuth | string | Placeholder para azimute. |
| placeholderDistance | string | Placeholder para distância. |
| placeholderDegrees | string | Placeholder para graus. |
| placeholderMinutes | string | Placeholder para minutos. |
| placeholderSeconds | string | Placeholder para segundos. |
| errorXYRequired | string | Mensagem de erro para X/Y obrigatório. |
| errorDegreesRequired | string | Mensagem de erro para graus obrigatório. |
| errorFirstRowXY | string | Mensagem de erro para primeira linha X/Y. |
| errorProvideCoordinatesOrAzimuthDistance | string | Mensagem de erro para coordenadas ou azimute/distância necessários. |

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