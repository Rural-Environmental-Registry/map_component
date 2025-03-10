<template>
  <ElSubMenu :index="data.key" class="parent-menu">
    <template #title>
      <div class="parent-menu-row">
        <div class="parent-layer-title">{{ data.name }}</div>
        <span class="switch-component">
          <ElSwitch v-model="allLayersActive" @click.stop>
            <template #active-action>
              <FontAwesomeIcon iconName="check" />
            </template>
            <template #inactive-action>
              <FontAwesomeIcon iconName="xmark" />
            </template>
          </ElSwitch>
          <span class="parent-layer-status">
            {{
              allLayersActive
                ? data.activeLabel.active
                : data.activeLabel.inactive
            }}
          </span>
          <ElDivider class="divider-bar" direction="vertical" />
        </span>
      </div>
    </template>
    <template v-for="(child, idx) in childrenLayers">
      <ChildMenu
        v-if="child.name"
        :data="child"
        @onChildVisibilityChange="onChildChange($event, idx)"
      />
    </template>
  </ElSubMenu>
  <ElDivider class="parent-menu-divider-row" />
</template>

<script setup lang="ts">
  import { ElDivider, ElSubMenu, ElSwitch } from 'element-plus'
  import { computed, ref } from 'vue'
  import { ChildLayer, ParentLayer } from '../../types'
  import FontAwesomeIcon from '../FontAwesomeIcon.vue'
  import ChildMenu from './ChildMenu.vue'

  type ParentMenuProps = {
    data: ParentLayer
  }

  const props = defineProps<ParentMenuProps>()

  const emit = defineEmits<{
    onChildVisibilityChange: [ChildLayer]
    onParentVisibilityChange: [ParentLayer]
  }>()

  const childrenLayers = ref<ChildLayer[]>(props.data.layers)

  const toggleVisibleAllLayers = (): void => {
    emit('onParentVisibilityChange', {
      ...props.data,
      layers: childrenLayers.value
    })
  }

  const allLayersActive = computed<boolean>({
    get: () => childrenLayers.value.every((layer: ChildLayer) => layer.active),
    set: (visible: boolean) => {
      childrenLayers.value = props.data.layers.map((layer: ChildLayer) => {
        return {
          ...layer,
          active: visible
        }
      })

      toggleVisibleAllLayers()
    }
  })

  const onChildChange = (layer: ChildLayer, idx: number): void => {
    childrenLayers.value[idx] = layer
    emit('onChildVisibilityChange', layer)
  }
</script>

<style>
  .parent-menu .parent-menu-row {
    display: flex;
    justify-content: space-between;
    gap: var(--mapa-size-base-10);
    width: 100%;
    font-size: var(--mapa-fs-12);
  }

  .parent-menu .switch-component {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--mapa-size-base-5);
  }

  .parent-menu .parent-layer-title {
    word-wrap: break-word;
    white-space: normal;
    line-height: 150%;
    margin-block: auto;
    font-weight: bold;
  }

  .parent-menu .divider-bar {
    height: var(--mapa-size-base-20);
    border-width: var(--mapa-size-base-2);
  }

  .parent-menu-divider-row {
    margin: 0 !important;
  }
</style>
