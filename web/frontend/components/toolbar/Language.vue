<script setup lang="ts">
const { open } = usePanels()
</script>

<template>
  <button
    type="button"
    class="flex size-9 items-center justify-center rounded-full border border-muted-200 bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-muted-200 hover:ring-offset-4 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 dark:hover:ring-muted-700"
    @click="open('language')"
  >
    <img
      class="size-7 rounded-full"
      src="/img/icons/flags/united-states-of-america.svg"
      alt="flag icon"
    />
  </button>
</template>
