<script setup lang="ts">
const { isOpen, isMobileOpen } = useCollapse()

const isSearchOpen = useState('search-open', () => false)
</script>

<template>
  <div class="flex h-16 w-full items-center justify-between px-6">
    <div class="flex size-16 items-center justify-center">
      <slot name="logo">
        <NuxtLink to="/" class="flex items-center justify-center">
          <Logo class="size-10 text-primary-500" />
        </NuxtLink>
      </slot>
    </div>

    <!--Action button-->
    <button
      type="button"
      class="nui-mask nui-mask-blob hidden size-10 cursor-pointer items-center justify-center text-muted-500 transition-colors duration-300 hover:bg-muted-200 dark:text-muted-400 dark:hover:bg-muted-700/60"
      :class="!isOpen ? 'hidden' : 'lg:flex'"
      @click="isSearchOpen = true"
    >
      <Icon name="lucide:search" class="size-4" />
    </button>

    <!--Mobile button-->
    <button
      type="button"
      class="nui-mask nui-mask-blob flex size-10 cursor-pointer items-center justify-center text-muted-700 transition-colors duration-300 hover:bg-muted-200 dark:text-muted-400 dark:hover:bg-muted-800 lg:hidden"
      @click="isMobileOpen = false"
    >
      <Icon name="lucide:arrow-left" class="size-5" />
    </button>
  </div>
</template>
