<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const props = defineProps<{
  horizontal?: boolean
}>()
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
    <Menu as="div" class="relative size-10 text-left" v-slot="{ close }">
      <MenuButton as="template">
        <button
          type="button"
          class="inline-flex size-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary-500 group-hover:ring-offset-4 dark:ring-offset-muted-800"
        >
          <div
            class="relative inline-flex size-10 items-center justify-center rounded-full"
          >
            <img
              src="/img/avatars/2.svg"
              class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
              alt=""
            />
          </div>
        </button>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute mt-2 w-60 origin-bottom-right rounded-md border border-muted-200 bg-white text-left shadow-lg focus:outline-none dark:border-muted-700 dark:bg-muted-800"
          :class="props.horizontal ? 'top-10 end-0' : 'bottom-0 -end-64'"
        >
          <div class="bg-muted-50 p-6 dark:bg-muted-700/40">
            <div class="flex items-center">
              <div
                class="relative inline-flex size-14 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/2.svg"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-sm font-medium text-muted-800 dark:text-white"
                >
                  Maya Rosselini
                </h6>
                <p class="font-sans text-xs text-muted-400">Product Manager</p>
              </div>
            </div>
          </div>
          <div class="p-2">
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/profile"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 text-primary-500 dark:bg-muted-700'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:user-circle-duotone" class="size-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-xs font-medium leading-none text-muted-800 dark:text-white"
                  >
                    Profile
                  </h6>
                  <p class="font-sans text-xs text-muted-400">
                    View your profile
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/projects"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 text-primary-500 dark:bg-muted-700'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:briefcase-duotone" class="size-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-xs font-medium leading-none text-muted-800 dark:text-white"
                  >
                    Projects
                  </h6>
                  <p class="font-sans text-xs text-muted-400">
                    All my projects
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/user-grid-4"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 text-primary-500 dark:bg-muted-700'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:users-three-duotone" class="size-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-xs font-medium leading-none text-muted-800 dark:text-white"
                  >
                    Team
                  </h6>
                  <p class="font-sans text-xs text-muted-400">Manage my team</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/profile-edit"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 text-primary-500 dark:bg-muted-700'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:gear-six-duotone" class="size-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-xs font-medium leading-none text-muted-800 dark:text-white"
                  >
                    Settings
                  </h6>
                  <p class="font-sans text-xs text-muted-400">
                    Account settings
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
