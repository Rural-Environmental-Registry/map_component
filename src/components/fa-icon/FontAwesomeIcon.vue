<template>
  <FontAwesomeIcon :icon="['fas', iconName]" />
</template>

<script setup lang="ts">
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faCheck,
    faChevronLeft,
    faChevronRight,
    faXmark,
    faTerminal,
    faFileLines,
    faUpload,
    faPencil,
    faTrash,
    faChevronDown
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { FaIconName } from '../../types'

  type IconProps = {
    iconName: FaIconName
  }

  defineProps<IconProps>()

  library.add(faCheck, faXmark, faChevronRight, faChevronLeft, faTerminal, faFileLines, faUpload, faPencil, faTrash, faChevronDown)
</script>

<style>
  @import '@fortawesome/fontawesome-svg-core/styles.css';
</style>
