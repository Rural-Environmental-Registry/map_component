# RER - Componente de Mapa

[![Vue.js](https://img.shields.io/badge/Vue.js-3-green.svg)](https://vuejs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/) [![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green.svg)](https://leafletjs.com/) [![Vite](https://img.shields.io/badge/Vite-5-purple.svg)](https://vitejs.dev/)

## 📑 Índice

- [🎯 Sobre o Módulo](#-sobre-o-módulo)
- [Instalação](#instalação)
- [Uso](#uso)
- [Propriedades](#propriedades)
- [Eventos](#eventos)
- [Instâncias](#instâncias)
- [Injeção de Menu Lateral](#injeção-de-menu-lateral)
- [Exemplos de Configuração](#exemplos-de-configuração)
- [Tecnologias](#tecnologias)
- [Licença](#licença)
- [Contribuição](#contribuição)
- [Suporte](#suporte)

---

## 🎯 Sobre o Módulo

O **RER** (Registro Eletrônico Rural) é uma solução moderna e abrangente para gerenciamento de registros ambientais rurais, desenvolvida como um bem público digital. Este projeto fornece uma arquitetura robusta e escalável para sistemas que registram propriedades rurais com suporte para dados geoespaciais. O módulo **Componente de Mapa** faz parte do projeto RER como um submódulo.

É um componente de mapa interativo para aplicações Vue.js que permite personalização de camadas, opções de mapa e ferramentas de desenho. A biblioteca é baseada em Leaflet.js e oferece suporte para múltiplas camadas, ferramentas de desenho personalizadas e uma interface adaptável.

*Nota: Esta biblioteca só pode ser usada para projetos Vue.js 3.*

### Principais Funcionalidades

- 🗺️ Mapa interativo baseado em Leaflet.js
- 🎨 Camadas e ferramentas de desenho personalizáveis
- 🔧 Opções de configuração flexíveis
- 📐 Ferramentas de desenho e medição
- 🌐 Suporte para WMS, GeoJSON e vetores personalizados
- 📍 Injeção de conteúdo no menu lateral
- ⚡ Construído com Vite para desempenho otimizado

---

## Instalação

### Pré-requisitos

- **Node.js** versão 18+
- **Vue.js** versão 3
- Credenciais **Git** para acesso ao repositório privado

### Registro Global

No seu `main.js`:

```js
import { createApp } from 'vue'
import MapaDpg from 'node_modules/dpg-mapa/dist'

const app = createApp({})

app.component('MapaDpg', MapaDpg)

app.mount('#app')
```

### Registro Local

```vue
<template>
  <MapaDpg />
</template>

<script setup>
  import MapaDpg from 'node_modules/dpg-mapa/dist'
</script>
```

### Importar Estilos

Em ambos os casos, você precisa importar os estilos do mapa:

```css
@import 'node_modules/dpg-mapa/dist/index.css';
```

---

## Uso

O componente aceita parâmetros e emite eventos. Ele também expõe instâncias através de refs.

```vue
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
```

```js
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

---

## Propriedades

| Nome                | Tipo                                      | Obrigatório | Descrição                                                                    |
|---------------------|-------------------------------------------|-------------|------------------------------------------------------------------------------|
| showLoading         | boolean                                   | Opcional    | Controla a visibilidade da animação de carregamento                         |
| layers              | [MapLayers](docs/properties.md)           | Opcional    | Define camadas base e camadas personalizadas                                 |
| options             | [MapOptionsConfig](docs/properties.md)    | Opcional    | Define configurações do mapa, menu de camadas e ferramentas de desenho       |
| disableLoading      | boolean                                   | Opcional    | Desabilita a animação de carregamento                                        |
| descriptiveMemorial | [DescriptiveMemorial](docs/properties.md) | Opcional    | Controla a visibilidade do memorial descritivo                              |

Para documentação detalhada das propriedades, consulte [Documentação de Propriedades](docs/properties.md).

---

## Eventos

| Nome               | Descrição                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| onChildLayerToggle | Emite dados da camada adicionada/removida do mapa                                                                                           |
| onGroupLayerToggle | Emite dados do grupo e suas camadas adicionadas/removidas do mapa                                                                          |
| onDrawing          | Emite dados do(s) desenho(s) adicionado(s)/removido(s) do mapa. Polígonos e retângulos são incrementados com a propriedade "drawnArea"     |

---

## Instâncias

| Nome           | Descrição                                                                            |
|----------------|--------------------------------------------------------------------------------------|
| map            | Mapa Leaflet. Usado para manipulação do mapa                                         |
| layerControl   | Controle de camadas Leaflet. Usado para manipulação de camadas                      |
| drawItemsGroup | Grupo de desenhos Leaflet. Usado para manipulação de desenhos                       |
| leaflet        | Instância Leaflet                                                                    |

---

## Injeção de Menu Lateral

Estes pontos permitem que aplicações consumidoras injetem seu próprio conteúdo no menu lateral do MapaDPG.

| Nome        | ID                         | Posição no Menu | Descrição                                                           |
|-------------|----------------------------|-----------------|---------------------------------------------------------------------|
| Menu topo   | `external-id-top-menu`     | topo            | Container para inserir conteúdo antes da listagem de camadas        |
| Menu rodapé | `external-id-bottom-menu`  | rodapé          | Container para inserir conteúdo após a listagem de camadas          |

Para exemplos, consulte o guia: [Injeção de Conteúdo](docs/contentInjection.md)

---

## Exemplos de Configuração

Para exemplos completos de configuração incluindo camadas, ferramentas de desenho e opções de mapa, consulte o README original ou a [Documentação de Propriedades](docs/properties.md).

---

## Tecnologias

- **Vue.js 3** - Framework JavaScript progressivo
- **TypeScript** - Superconjunto tipado de JavaScript
- **Leaflet.js** - Biblioteca JavaScript de código aberto para mapas interativos
- **Vite** - Ferramenta de frontend de próxima geração
- **Geoman** - Plugin Leaflet para desenho e edição

---

## Licença

Este projeto é distribuído sob a [GPL-3.0](https://github.com/Rural-Environmental-Registry/core/blob/main/LICENSE).

---

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/FuncionalidadeIncrivel`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona FuncionalidadeIncrivel'`)
4. Faça push para a branch (`git push origin feature/FuncionalidadeIncrivel`)
5. Abra um Pull Request

Ao enviar um pull request ou patch, você afirma que é o autor do código e que concorda em licenciar sua contribuição sob os termos da Licença Pública Geral GNU v3.0 (ou posterior) para este projeto. Você também concorda em atribuir os direitos autorais de sua contribuição ao Ministério da Gestão e da Inovação em Serviços Públicos (MGI), proprietário deste projeto.

---

## Suporte

Para suporte técnico ou questões relacionadas ao projeto:

- **Documentação:** Consulte os READMEs individuais de cada submódulo
- **Issues:** Reporte problemas através do rastreador de issues do repositório

---

Copyright (C) 2024-2025 Ministério da Gestão e da Inovação em Serviços Públicos (MGI), Governo do Brasil.

Este programa foi desenvolvido pela Dataprev como parte de um contrato com o Ministério da Gestão e da Inovação em Serviços Públicos (MGI).
