<template>
  <ElSubMenu :index="groupData.key" class="parent-menu" :disabled="!childrenLayers.length">
    <template #title>
      <div class="parent-menu-row">
        <div class="parent-layer-title">{{ groupData.name }}</div>
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
                ? groupData.toggle.active
                : groupData.toggle.inactive
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
        @onChildLayerToggle="onChildChange($event, idx)"
      />
    </template>
  </ElSubMenu>
  <ElDivider class="parent-menu-divider-row" />
</template>

<script setup lang="ts">
  import { ElDivider, ElSubMenu, ElSwitch } from 'element-plus'
  import { computed, ref } from 'vue'
  import FontAwesomeIcon from '../fa-icon/FontAwesomeIcon.vue'
  import ChildMenu from './ChildMenu.vue'
  import { GroupLayerData, LayerData } from '../../types'

  type ParentMenuProps = {
    groupData: GroupLayerData
  }

  const props = defineProps<ParentMenuProps>()

  const emit = defineEmits<{
    onChildLayerToggle: [LayerData]
    onGroupLayerToggle: [GroupLayerData]
  }>()

  const childrenLayers = ref<LayerData[]>(props.groupData.layers)

  const toggleVisibleAllLayers = (): void => {
    emit('onGroupLayerToggle', {
      ...props.groupData,
      layers: childrenLayers.value
    })
  }

  const allLayersActive = computed<boolean>({
    get: () => childrenLayers.value.some((layer: LayerData) => layer.active),
    set: (active: boolean) => {
      childrenLayers.value = props.groupData.layers.map((layer: LayerData) => {
        return {
          ...layer,
          active
        }
      })

      toggleVisibleAllLayers()
    }
  })

  const onChildChange = (layer: LayerData, idx: number): void => {
    childrenLayers.value[idx] = layer
    emit('onChildLayerToggle', layer)
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
