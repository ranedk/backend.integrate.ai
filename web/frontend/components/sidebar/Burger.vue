<script setup lang="ts">
import { useSidebar } from '@/composables/sidebar'

const { isOpen, toggle } = useSidebar()
</script>

<template>
  <button
    type="button"
    class="flex size-10 items-center justify-center"
    @click="toggle"
  >
    <div class="relative size-5" :class="isOpen ? 'scale-90' : ''">
      <span
        class="absolute block h-0.5 w-full bg-primary-500 transition-all duration-300"
        :class="
          isOpen ? '-rotate-45 rtl:rotate-45 max-w-[75%] top-1' : 'top-0.5'
        "
      ></span>
      <span
        class="absolute top-1/2 block h-0.5 w-full max-w-[50%] bg-primary-500 transition-all duration-300"
        :class="isOpen ? 'opacity-0 translate-x-4' : ''"
      ></span>
      <span
        class="absolute block h-0.5 w-full bg-primary-500 transition-all duration-300"
        :class="
          isOpen ? 'rotate-45 rtl:-rotate-45 max-w-[75%] bottom-1' : 'bottom-0'
        "
      ></span>
    </div>
  </button>
</template>
