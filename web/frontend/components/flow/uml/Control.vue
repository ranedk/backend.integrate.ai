<script setup lang="ts">
const emit = defineEmits(['add-model'])
const addModel = () => {
  emit('add-model')
}
</script>

<template>
  <BaseCard class="flex h-20 w-full flex-col justify-center">
    <BaseCard
      color="primary"
      class="m-3 flex h-16 w-20 flex-col items-center text-primary-700 dark:text-primary-300"
      @click="addModel"
    >
      <Icon class="size-8" name="ph:app-window" />
      <span class="text-sm">Add Model</span>
    </BaseCard>
  </BaseCard>
</template>
