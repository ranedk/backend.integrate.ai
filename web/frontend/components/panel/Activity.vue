<script setup lang="ts">
const { close } = usePanels()
const activeTab = ref('tab-1')
</script>

<template>
  <div
    class="border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-lg font-semibold text-muted-700 dark:text-white"
      >
        Activity
      </h2>
      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 dark:hover:text-white"
        @click="close"
      >
        <Icon name="feather:chevron-right" class="size-6" />
      </button>
    </div>

    <div class="flex h-16 items-center px-10">
      <!-- Tabs -->
      <div
        class="relative flex h-10 w-full items-center rounded-lg bg-muted-100 font-sans text-sm dark:bg-muted-700"
      >
        <button
          type="button"
          class="relative z-20 flex h-full flex-1 items-center justify-center"
          :class="activeTab === 'tab-1' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-1'"
        >
          <span>Team</span>
        </button>
        <button
          type="button"
          class="relative z-20 flex h-full flex-1 items-center justify-center"
          :class="activeTab === 'tab-2' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-2'"
        >
          <span>Projects</span>
        </button>
        <button
          type="button"
          class="relative z-20 flex h-full flex-1 items-center justify-center"
          :class="activeTab === 'tab-3' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-3'"
        >
          <span>Schedule</span>
        </button>
        <div
          class="absolute start-0 top-0 z-10 h-full w-1/3 rounded-lg bg-primary-600 transition-all duration-300"
          :class="[
            activeTab === 'tab-1' && 'ms-0',
            activeTab === 'tab-2' && 'ms-[33.3%]',
            activeTab === 'tab-3' && 'ms-[66.6%]',
          ]"
        ></div>
      </div>
    </div>

    <div
      class="slimscroll relative h-[calc(100%_-_128px)] w-full overflow-y-auto px-10"
    >
      <div class="py-6">
        <!-- Team tab content -->
        <div v-if="activeTab === 'tab-1'" class="space-y-4">
          <!-- Team member -->
          <div
            class="flex items-center rounded-lg border border-muted-200 bg-white p-4 dark:border-muted-600 dark:bg-muted-700"
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
            <div class="ms-3">
              <h6
                class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
              >
                You
              </h6>
              <p class="font-sans text-xs text-muted-400">Product Manager</p>
            </div>
            <NuxtLink
              to="#"
              class="ms-auto flex size-9 items-center justify-center rounded-full border border-muted-200 text-muted-400 transition-colors duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500"
            >
              <Icon name="feather:arrow-right" class="size-4" />
            </NuxtLink>
          </div>
          <!-- Team member -->
          <div
            class="flex items-center rounded-lg border border-muted-200 bg-white p-4 dark:border-muted-600 dark:bg-muted-700"
          >
            <div
              class="relative inline-flex size-9 items-center justify-center rounded-full"
            >
              <img
                src="/img/avatars/16.svg"
                class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                alt=""
              />
            </div>
            <div class="ms-3">
              <h6
                class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
              >
                Aaaron Splatter
              </h6>
              <p class="font-sans text-xs text-muted-400">Mobile Developer</p>
            </div>
            <NuxtLink
              to="#"
              class="ms-auto flex size-9 items-center justify-center rounded-full border border-muted-200 text-muted-400 transition-colors duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500"
            >
              <Icon name="feather:arrow-right" class="size-4" />
            </NuxtLink>
          </div>
          <!-- Team member -->
          <div
            class="flex items-center rounded-lg border border-muted-200 bg-white p-4 dark:border-muted-600 dark:bg-muted-700"
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
            <div class="ms-3">
              <h6
                class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
              >
                Mike Miller
              </h6>
              <p class="font-sans text-xs text-muted-400">Frontend Developer</p>
            </div>
            <NuxtLink
              to="#"
              class="ms-auto flex size-9 items-center justify-center rounded-full border border-muted-200 text-muted-400 transition-colors duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500"
            >
              <Icon name="feather:arrow-right" class="size-4" />
            </NuxtLink>
          </div>
          <!-- Team member -->
          <div
            class="flex items-center rounded-lg border border-muted-200 bg-white p-4 dark:border-muted-600 dark:bg-muted-700"
          >
            <div
              class="relative inline-flex size-9 items-center justify-center rounded-full"
            >
              <img
                src="/img/avatars/19.svg"
                class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                alt=""
              />
            </div>
            <div class="ms-3">
              <h6
                class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
              >
                Clarissa Perez
              </h6>
              <p class="font-sans text-xs text-muted-400">Sales Manager</p>
            </div>
            <NuxtLink
              to="#"
              class="ms-auto flex size-9 items-center justify-center rounded-full border border-muted-200 text-muted-400 transition-colors duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500"
            >
              <Icon name="feather:arrow-right" class="size-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Project tab content -->
        <div v-else-if="activeTab === 'tab-2'" class="space-y-4">
          <!-- Project -->
          <div
            class="rounded-lg border border-muted-200 bg-white p-4 dark:border-muted-600 dark:bg-muted-700"
          >
            <div class="mb-4 flex items-center">
              <div
                class="relative inline-flex size-9 items-center justify-center rounded-xl"
              >
                <img
                  src="/img/icons/logos/slicer.svg"
                  class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  The slicer project
                </h6>
                <p class="font-sans text-xs text-muted-400">getslicer.io</p>
              </div>
              <NuxtLink
                to="#"
                class="ms-auto flex size-9 items-center justify-center rounded-full border border-muted-200 text-muted-400 transition-colors duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500"
              >
                <Icon name="feather:arrow-right" class="size-4" />
              </NuxtLink>
            </div>
            <div
              class="relative mb-4 h-1 w-full overflow-hidden rounded-lg bg-muted-200 dark:bg-muted-800"
            >
              <div
                class="absolute start-0 top-0 h-full w-[34%] rounded-lg bg-primary-500 transition duration-300"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-sans text-muted-400">5/24</span>
              <div class="flex items-end">
                <div
                  class="relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white dark:border-muted-700"
                >
                  <img
                    src="/img/avatars/2.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div
                  class="relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white dark:border-muted-700"
                >
                  <img
                    src="/img/avatars/3.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div
                  class="relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white dark:border-muted-700"
                >
                  <img
                    src="/img/avatars/4.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div
                  class="relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white bg-muted-200 dark:border-muted-700 dark:bg-muted-800"
                >
                  <span
                    class="-ms-1 font-alt text-sm font-normal uppercase text-muted-500 dark:text-muted-300"
                  >
                    +3
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- Project -->
          <div
            class="rounded-lg border border-muted-200 bg-white p-4 dark:border-muted-600 dark:bg-muted-700"
          >
            <div class="mb-4 flex items-center">
              <div
                class="relative inline-flex size-9 items-center justify-center rounded-xl"
              >
                <img
                  src="/img/icons/logos/metamovies.svg"
                  class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Metamovies reworked
                </h6>
                <p class="font-sans text-xs text-muted-400">metamovies.co</p>
              </div>
              <NuxtLink
                to="#"
                class="ms-auto flex size-9 items-center justify-center rounded-full border border-muted-200 text-muted-400 transition-colors duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500"
              >
                <Icon name="feather:arrow-right" class="size-4" />
              </NuxtLink>
            </div>
            <div
              class="relative mb-4 h-1 w-full overflow-hidden rounded-lg bg-muted-200 dark:bg-muted-800"
            >
              <div
                class="absolute start-0 top-0 h-full w-[88%] rounded-lg bg-primary-500 transition duration-300"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-sans text-muted-400">28/31</span>
              <div class="flex items-end">
                <div
                  class="relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white dark:border-muted-700"
                >
                  <img
                    src="/img/avatars/13.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div
                  class="relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white dark:border-muted-700"
                >
                  <img
                    src="/img/avatars/24.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Project -->
          <div
            class="rounded-lg border border-muted-200 bg-white p-4 dark:border-muted-600 dark:bg-muted-700"
          >
            <div class="mb-4 flex items-center">
              <div
                class="relative inline-flex size-9 items-center justify-center rounded-xl"
              >
                <img
                  src="/img/icons/logos/fastpizza.svg"
                  class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Fast Pizza redesign
                </h6>
                <p class="font-sans text-xs text-muted-400">fastpizza.com</p>
              </div>
              <NuxtLink
                to="#"
                class="ms-auto flex size-9 items-center justify-center rounded-full border border-muted-200 text-muted-400 transition-colors duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500"
              >
                <Icon name="feather:arrow-right" class="size-4" />
              </NuxtLink>
            </div>
            <div
              class="relative mb-4 h-1 w-full overflow-hidden rounded-lg bg-muted-200 dark:bg-muted-800"
            >
              <div
                class="absolute start-0 top-0 h-full w-[62%] rounded-lg bg-primary-500 transition duration-300"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-sans text-muted-400">25/39</span>
              <div class="flex items-end">
                <div
                  class="relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white dark:border-muted-700"
                >
                  <img
                    src="/img/avatars/11.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div
                  class="relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white dark:border-muted-700"
                >
                  <img
                    src="/img/avatars/3.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline tab content -->
        <div v-else-if="activeTab === 'tab-3'" class="space-y-4">
          <!-- Timeline -->
          <div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:border-muted-300 after:content-[''] dark:after:border-muted-600"
            >
              <div
                class="relative flex size-9 items-center justify-center rounded-full border border-muted-200 bg-white text-muted-400 shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:border-muted-300 after:content-[''] dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600"
              >
                <Icon name="ph:phone-duotone" class="" />
              </div>
              <div class="ms-10">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Call Danny at Colby's
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 11:30am</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:border-muted-300 after:content-[''] dark:after:border-muted-600"
            >
              <div
                class="relative flex size-9 items-center justify-center rounded-full border border-muted-200 bg-white text-muted-400 shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:border-muted-300 after:content-[''] dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600"
              >
                <div
                  class="relative inline-flex size-7 items-center justify-center rounded-full"
                >
                  <img
                    src="/img/avatars/3.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
              </div>
              <div class="ms-10">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Meeting with Mike
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 01:00pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:border-muted-300 after:content-[''] dark:after:border-muted-600"
            >
              <div
                class="relative flex size-9 items-center justify-center rounded-full border border-muted-200 bg-white text-muted-400 shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:border-muted-300 after:content-[''] dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600"
              >
                <Icon name="ph:chat-circle-duotone" class="" />
              </div>
              <div class="ms-10">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Answer Annie's message
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 01:45pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:border-muted-300 after:content-[''] dark:after:border-muted-600"
            >
              <div
                class="relative flex size-9 items-center justify-center rounded-full border border-muted-200 bg-white text-muted-400 shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:border-muted-300 after:content-[''] dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600"
              >
                <div
                  class="relative inline-flex size-7 items-center justify-center rounded-full"
                >
                  <img
                    src="/img/avatars/18.svg"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
              </div>
              <div class="ms-10">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Meeting with John
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 03:00pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:border-muted-300 after:content-[''] dark:after:border-muted-600"
            >
              <div
                class="relative flex size-9 items-center justify-center rounded-full border border-muted-200 bg-white text-muted-400 shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:border-muted-300 after:content-[''] dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600"
              >
                <Icon name="ph:envelope-duotone" class="" />
              </div>
              <div class="ms-10">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Send marketing campaign
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 03:30pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:border-muted-300 after:content-[''] dark:after:border-muted-600"
            >
              <div
                class="relative flex size-9 items-center justify-center rounded-full border border-muted-200 bg-white text-muted-400 shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:border-muted-300 after:content-[''] dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600"
              >
                <Icon name="ph:selection-all-duotone" class="" />
              </div>
              <div class="ms-10">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Project review
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 04:30pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-l after:border-muted-300 after:content-[''] dark:after:border-muted-600"
            >
              <div
                class="relative flex size-9 items-center justify-center rounded-full border border-muted-200 bg-white text-muted-400 shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:border-muted-300 after:content-[''] dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600"
              >
                <Icon name="ph:note-duotone" class="" />
              </div>
              <div class="ms-10">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Write proposal for Andy
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 06:30pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
