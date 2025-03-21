<template>
  <ElMenuItem :index="data.key" class="child-menu">
    <template #title>
      <div class="child-menu-row">
        <div class="child-layer-title">
          <span
            class="child-layer-legend"
            :style="{
              borderColor: data.style.fillColor,
              backgroundColor: data.style.color
            }"
          />

          <span>{{ data.name }}</span>
        </div>
        <span class="switch-component">
          <ElSwitch v-model="active" @click.stop>
            <template #active-action>
              <FontAwesomeIcon iconName="check" />
            </template>
            <template #inactive-action>
              <FontAwesomeIcon iconName="xmark" />
            </template>
          </ElSwitch>
          <span class="child-layer-status">
            {{ active ? data.toggle.active : data.toggle.inactive }}
          </span>
        </span>
      </div>
    </template>
  </ElMenuItem>
  <ElDivider class="child-menu-divider-row" />
</template>

<script setup lang="ts">
  import { ElDivider, ElMenuItem, ElSwitch } from 'element-plus'
  import { computed, onMounted } from 'vue'
  import FontAwesomeIcon from '../fa-icon/FontAwesomeIcon.vue'
  import { LayerData } from '../../types'

  type ChildMenuProps = {
    data: LayerData
  }

  const props = defineProps<ChildMenuProps>()

  const emit = defineEmits<{ onChildLayerToggle: [LayerData] }>()

  const active = computed<boolean>({
    get: () => props.data.active,
    set: (active: boolean) => {
      toggleLayerVisible(active)
    }
  })

  const toggleLayerVisible = (active: boolean): void => {
    const layer = { ...props.data, active }
    emit('onChildLayerToggle', layer)
  }

  onMounted(() => {
    if (props.data.activeDefault) {
      setTimeout(() => {
        toggleLayerVisible(props.data.activeDefault)
      }, 100)
    }
  })
</script>

<style>
  .child-menu {
    padding-left: var(--mapa-size-base-20) !important;
  }

  .child-menu .child-menu-row {
    display: flex;
    justify-content: space-between;
    gap: var(--mapa-size-base-10);
    width: 100%;
    font-size: var(--mapa-fs-12);
  }

  .child-menu .switch-component {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--mapa-size-base-5);
  }

  .child-menu .child-layer-title {
    display: flex;
    align-items: center;
    gap: var(--mapa-size-base-5);
    word-wrap: break-word;
    white-space: normal;
    line-height: 150%;
    margin-block: auto;
  }

  .child-menu .child-layer-legend {
    display: inline-block;
    width: var(--mapa-size-base-8);
    height: var(--mapa-size-base-8);
    min-width: var(--mapa-size-base-8);
  }

  .child-menu-divider-row {
    margin: 0 !important;
  }
</style>
