<script setup lang="ts">
const { current, isOpen } = useSidebar()
</script>

<template>
  <div class="flex h-16 w-full items-center px-6">
    <div
      v-if="current"
      class="font-heading text-lg font-light capitalize text-muted-700 dark:text-white"
    >
      {{ current.title }}
    </div>
    <button
      type="button"
      class="ms-auto flex size-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 xl:hidden"
      @click="isOpen = false"
    >
      <Icon name="feather:chevron-left" class="size-6" />
    </button>
  </div>
</template>
