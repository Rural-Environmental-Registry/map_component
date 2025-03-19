<template>
  <FontAwesomeIcon :icon="['fas', iconName]" />
</template>

<script setup lang="ts">
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faCheck,
    faChevronLeft,
    faChevronRight,
    faXmark
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  type IconProps = {
    iconName: any
  }

  defineProps<IconProps>()

  library.add(faCheck, faXmark, faChevronRight, faChevronLeft)
</script>

<style>
  @import '@fortawesome/fontawesome-svg-core/styles.css';
</style>
