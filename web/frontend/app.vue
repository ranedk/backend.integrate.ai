<script setup lang="ts"></script>

<template>
  <div class="relative">
    <SearchApp />
    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--color-primary-500)" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
