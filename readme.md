# RER - Map Component

[![Vue.js](https://img.shields.io/badge/Vue.js-3-green.svg)](https://vuejs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/) [![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green.svg)](https://leafletjs.com/) [![Vite](https://img.shields.io/badge/Vite-5-purple.svg)](https://vitejs.dev/)

## 📑 Table of Contents

- [🎯 About the Module](#-about-the-module)
- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Events](#events)
- [Instances](#instances)
- [Side Menu Injection](#side-menu-injection)
- [Configuration Examples](#configuration-examples)
- [Technologies](#technologies)
- [License](#license)
- [Contribution](#contribution)
- [Support](#support)

---

## 🎯 About the Module

The **RER** (Rural Environmental Registry) is a modern, comprehensive solution for managing rural environmental registrations, developed as a digital public good. This project provides a robust and scalable architecture for systems that register rural land properties with support for geospatial data. The **Map Component** module is part of RER project as a submodule from it.

It is an interactive map component for Vue.js applications that allows customization of layers, map options, and drawing tools. The library is based on Leaflet.js and offers support for multiple layers, custom drawing tools, and an adaptable interface.

*Note: This library can only be used for Vue.js 3 projects.*

### Main Features

- 🗺️ Interactive map based on Leaflet.js
- 🎨 Customizable layers and drawing tools
- 🔧 Flexible configuration options
- 📐 Drawing and measurement tools
- 🌐 Support for WMS, GeoJSON, and custom vectors
- 📍 Side menu content injection
- ⚡ Built with Vite for optimal performance

---

## Installation

### Prerequisites

- **Node.js** version 18+
- **Vue.js** version 3
- **Git** credentials for private repository access

### Global Registration

In your `main.js`:

```js
import { createApp } from 'vue'
import MapaDpg from 'node_modules/dpg-mapa/dist'

const app = createApp({})

app.component('MapaDpg', MapaDpg)

app.mount('#app')
```

### Local Registration

```vue
<template>
  <MapaDpg />
</template>

<script setup>
  import MapaDpg from 'node_modules/dpg-mapa/dist'
</script>
```

### Import Styles

In both cases, you need to import the map styles:

```css
@import 'node_modules/dpg-mapa/dist/index.css';
```

---

## Usage

The component accepts parameters and emits events. It also exposes instances through refs.

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

## Properties

| Name                | Type                                      | Required | Description                                                                  |
|---------------------|-------------------------------------------|----------|------------------------------------------------------------------------------|
| showLoading         | boolean                                   | Optional | Controls the visibility of the loading animation                             |
| layers              | [MapLayers](docs/properties.md)           | Optional | Defines base layers and custom layers                                        |
| options             | [MapOptionsConfig](docs/properties.md)    | Optional | Defines map settings, layer menu, and drawing tools                          |
| disableLoading      | boolean                                   | Optional | Disables the loading animation                                               |
| descriptiveMemorial | [DescriptiveMemorial](docs/properties.md) | Optional | Controls the visibility of the descriptive memorial                          |

For detailed property documentation, see [Properties Documentation](docs/properties.md).

---

## Events

| Name               | Description                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| onChildLayerToggle | Emits data of the layer added/removed from the map                                                                                          |
| onGroupLayerToggle | Emits data of the group and its layers added/removed from the map                                                                           |
| onDrawing          | Emits data of the drawing(s) added/removed from the map. Polygons and rectangles are incremented with the "drawnArea" property              |

---

## Instances

| Name           | Description                                                                          |
|----------------|--------------------------------------------------------------------------------------|
| map            | Leaflet map. Used for map manipulation                                               |
| layerControl   | Leaflet layer control. Used for layer manipulation                                   |
| drawItemsGroup | Leaflet drawing group. Used for drawing manipulation                                 |
| leaflet        | Leaflet instance                                                                     |

---

## Side Menu Injection

These points allow consuming applications to inject their own content into the MapaDPG side menu.

| Name        | ID                         | Menu Position | Description                                                         |
|-------------|----------------------------|---------------|---------------------------------------------------------------------|
| Top menu    | `external-id-top-menu`     | top           | Container to insert content before the layer listing                |
| Bottom menu | `external-id-bottom-menu`  | bottom        | Container to insert content after the layer listing                 |

For examples, see the guide: [Content Injection](docs/contentInjection.md)

---

## Configuration Examples

For complete configuration examples including layers, drawing tools, and map options, see the original README or refer to the [Properties Documentation](docs/properties.md).

---

## Technologies

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Typed superset of JavaScript
- **Leaflet.js** - Open-source JavaScript library for interactive maps
- **Vite** - Next generation frontend tooling
- **Geoman** - Leaflet plugin for drawing and editing

---

## License

This project is distributed under the [GPL-3.0](https://github.com/Rural-Environmental-Registry/core/blob/main/LICENSE).

---

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

By submitting a pull request or patch, you affirm that you are the author of the code and that you agree to license your contribution under the terms of the GNU General Public License v3.0 (or later) for this project. You also agree to assign the copyright of your contribution to the Ministry of Management and Innovation in Public Services (MGI), the owner of this project.

---

## Support

For technical support or project-related questions:

- **Documentation:** Check the individual READMEs for each submodule
- **Issues:** Report problems via the repository issue tracker

---

Copyright (C) 2024-2025 Ministry of Management and Innovation in Public Services (MGI), Government of Brazil.

This program was developed by Dataprev as part of a contract with the Ministry of Management and Innovation in Public Services (MGI).
