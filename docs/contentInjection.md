## Injeção de conteúdo no menu lateral

Esta funcionalidade permite injetar elementos HTML externos dentro do menu de camadas do MapaDPG, sem a necessidade de alterar o componente. Há dois pontos de injeção disponíveis, posicionados antes da lista de camadas e depois.

## Pontos de injeção

| Nome        | ID                        | Localização no menu | Descrição                                                      |
| ----------- | ------------------------- | -------------------- | -------------------------------------------------------------- |
| Top menu    | `external-id-top-menu`    | topo                 | Contêiner para conteúdo exibido acima da listagem de camadas.  |
| Bottom menu | `external-id-bottom-menu` | base                 | Contêiner para conteúdo exibido abaixo da listagem de camadas. |

## Como injetar conteúdo (JavaScript)

Você pode anexar o conteúdo ao ponto de injeção usando JavaScript puro após o componente estar montado na página, por exemplo:

```js
const injectHelloTopMenu = () => {
  const topContainer = document.getElementById('external-id-top-menu')
  if (!topContainer) return
  const h1 = document.createElement('h1')
  h1.textContent = 'Hello Word'
  topContainer.appendChild(h1)
}

// Execute após a montagem do MapaDPG na tela
injectHelloTopMenu()
```

## Dica como injetar componente (Vue 3)

No Vue 3 existe a funcionalidade `Teleport`, que permite inserir um elemento em outra árvore do DOM, mesmo que ele não tenha sido declarado naquele local. Por exemplo:

Suponha que temos o componente `HelloWorld`:

```vue
<!-- HelloWorld.vue -->
<template>
  <h1>Hello World</h1>
</template>
```

Agora, no componente que consome o MapaDPG, você pode teletransportar esse componente para o container que está dentro do MapaDPG:

```vue
<template>
  <Teleport v-if="readyToInsert" to="#external-id-bottom-menu">
    <HelloWorld />
  </Teleport>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import HelloWorld from '@/exemplo/HelloWorld.vue'

const readyToInsert = ref(false)

// É interessante verificar a existência do contêiner após a renderização do MapaDPG
const enableGroupLayerTeleport = () => {
  readyToInsert.value = !!document.getElementById('external-id-bottom-menu')
}

onMounted(async () => {
  await nextTick()
  enableGroupLayerTeleport()
})
</script>
```

## Boas práticas

- Verifique se o componente MapaDPG carregou e se existe o contêiner antes de inserir conteúdo (`getElementById`).

## Observações

- Os contêineres são renderizados dentro do componente `LayerMenu` do MapaDPG, não interferindo na lógica de camadas.


