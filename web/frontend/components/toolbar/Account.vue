<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
    <Menu as="div" class="relative size-9 text-left" v-slot="{ close }">
      <MenuButton as="template">
        <button
          type="button"
          class="inline-flex size-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary-500 group-hover:ring-offset-4 dark:ring-offset-muted-900"
        >
          <div
            class="relative inline-flex size-9 items-center justify-center rounded-full"
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
          class="absolute end-0 mt-2 w-64 origin-top-right divide-y divide-muted-100 rounded-md border border-muted-200 bg-white shadow-lg focus:outline-none dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800"
        >
          <div class="p-6 text-center">
            <div
              class="relative mx-auto flex size-20 items-center justify-center rounded-full"
            >
              <img
                src="/img/avatars/2.svg"
                class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                alt=""
              />
            </div>
            <div class="mt-3">
              <h6
                class="font-heading text-sm font-medium text-muted-800 dark:text-white"
              >
                Maya Rosselini
              </h6>
              <p class="mb-4 font-sans text-xs text-muted-400">maya@tairo.io</p>
              <BaseButton
                to="/layouts/profile-edit"
                shape="curved"
                class="w-full"
                @click.passive="close"
                >Manage Account</BaseButton
              >
            </div>
          </div>
          <div class="px-6 py-1.5">
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="#"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 text-primary-500 dark:bg-muted-700'
                    : 'text-muted-500',
                ]"
                @click.passive="close"
              >
                <div
                  class="relative inline-flex size-9 items-center justify-center rounded-full"
                >
                  <img
                    src="/img/avatars/3.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ms-2">
                  <h6
                    class="font-heading text-xs font-medium leading-none text-muted-800 dark:text-white"
                  >
                    Mike Miller
                  </h6>
                  <p class="font-sans text-xs text-muted-400">mike@tairo.io</p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="#"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 text-primary-500 dark:bg-muted-700'
                    : 'text-muted-500',
                ]"
                @click.passive="close"
              >
                <div
                  class="relative inline-flex size-9 items-center justify-center rounded-full"
                >
                  <img
                    src="/img/avatars/9.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ms-2">
                  <h6
                    class="font-heading text-xs font-medium leading-none text-muted-800 dark:text-white"
                  >
                    Claire Baker
                  </h6>
                  <p class="font-sans text-xs text-muted-400">
                    claire@tairo.io
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="#"
                class="group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 text-primary-500 dark:bg-muted-700'
                    : 'text-muted-500',
                ]"
                @click.passive="close"
              >
                <div
                  class="relative inline-flex size-9 items-center justify-center rounded-full"
                >
                  <img
                    src="/img/avatars/14.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ms-2">
                  <h6
                    class="font-heading text-xs font-medium leading-none text-muted-800 dark:text-white"
                  >
                    Alan Baxter
                  </h6>
                  <p class="font-sans text-xs text-muted-400">alan@tairo.io</p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>

          <div class="p-6">
            <BaseButton @click.passive="close" shape="curved" class="w-full">
              Logout
            </BaseButton>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
