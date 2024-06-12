<script lang="ts" setup>
interface Props {
  selected?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <BaseCard
    class="border !border-primary-500 bg-white p-1 dark:border-slate-900 dark:bg-slate-300"
    :class="props.selected ? 'border-4' : ''"
  >
    <slot name="default"></slot>
  </BaseCard>
</template>

<style lang="css">
.vue-flow__node {
  @apply bg-white !p-0 border-0 bg-transparent;
}
</style>
