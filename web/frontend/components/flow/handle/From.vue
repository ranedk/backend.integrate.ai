<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'

interface Props {
  id: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="flex justify-between">
    <slot></slot>
    <Handle :id="props.id" type="source" :position="Position.Right" />
  </div>
</template>

<style lang="css">
.vue-flow__handle.source.vue-flow__handle-right {
  @apply relative top-3 left-1 bg-white !size-4 border !border-primary-500;
}
</style>
