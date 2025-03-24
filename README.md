# MAPA DPG

MapaDPG é um componente de mapa interativo para aplicações Vue.js que permite customização de camadas, opções de mapa e ferramentas de desenho. A biblioteca é baseada em Leaflet.js e oferece suporte a múltiplas camadas, ferramentas de desenho personalizadas e interface adaptável.

*Atenção: Essa biblioteca pode ser utilizada apenas para projetos em Vue.js 3.*

## Instalação

```package.json
"dependencies": {
  "dpg-mapa": "git+https://<username>:<token>@gitlab.criainovacao.com.br/sfb/car-federal/dpg-mapa.git#main",
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
    drawControl: mapRef.value?.drawControl,
    drawItemsGroup: mapRef.value?.drawItemsGroup
  }
})
```

### Propriedades

| Nome        | Tipo                                | Obrigatório | Descrição                                                                  |
| ----------- | ----------------------------------- | ----------- | -------------------------------------------------------------------------- |
| showLoading | boolean                             | Opcional    | Controla a visibilidade da animação de carregamento.                       |
| layers      | [MapLayers](docs/properties.md)        | Opcional    | Define as camadas base e camadas customizadas.                             |
| options     | [MapOptionsConfig](docs/properties.md) | Opcional    | Define as configurações do mapa, menu de camadas e ferramentas de desenho. |

### Eventos

| Nome               | Descrição                                                                |
| ------------------ | ------------------------------------------------------------------------ | 
| onChildLayerToggle | Emite os dados da camada adicionada/removida do mapa                     |
| onGroupLayerToggle | Emite os dados do grupo e das suas camadas adicionadas/removidas do mapa |
| onDrawing          | Emite os dados do(s) desenho(s) adicionado(s)/removido(s) do mapa        |

### Instâncias

| Nome           | Descrição                                                                          |
| -------------- | ---------------------------------------------------------------------------------- |
| map            | Mapa Leaflet. Utilizada para manipulação do mapa                                   |
| layerControl   | Controle de camadas Leaflet. Utilizada para manipulação das camadas                |
| drawControl    | Controle de desenho Leaflet. Utilizada para manipulação das ferramentas de desenho |
| drawItemsGroup | Grupo de desenhos Leaflet. Utilizada para manipulação dos desenhos                 |

