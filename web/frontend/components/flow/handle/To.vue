<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'

interface Props {
  id: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="flex justify-between">
    <Handle type="target" :id="props.id" :position="Position.Left" />
    <slot></slot>
  </div>
</template>

<style scoped>
.vue-flow__handle.target.vue-flow__handle-left {
  @apply relative !top-3 !right-1 !left-auto bg-white !size-4 border !border-primary-500;
}
</style>
