/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.demo/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
    BaseButton: {
      variant: 'solid',
      rounded: 'md',
    },
  },
  tairo: {
    title: 'Tairo',
    sidebar: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'ThemeToggle',
            props: {
              disableTransitions: true,
            },
          },
          {
            component: 'ToolbarLanguage',
          },
          {
            component: 'ToolbarNotifications',
          },
          {
            component: 'ToolbarActivity',
          },
          {
            component: 'ToolbarAccount',
          },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'ThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'ToolbarLanguage',
          },
          {
            component: 'ToolbarNotifications',
          },
          {
            component: 'ToolbarActivity',
          },
        ],
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: 'Logo',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [
          {
            title: 'Dashboard',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'MenuDashboard' },
            activePath: '/app/sub-dashboard',
          },
          {
            title: 'UML Tools',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            activePath: '/app/uml',
          },
          {
            title: 'Search',
            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('search-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
          {
            title: 'Settings',
            icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },
            to: '/app/dashboard',
            position: 'end',
          },
          {
            title: 'My Account',
            component: 'ToolbarAccountMenu',
            position: 'end',
          },
        ],
      },
    },
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: false,
        showNavBurger: false,
        tools: [
          {
            component: 'ThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'ToolbarLanguage',
          },
          {
            component: 'ToolbarNotifications',
          },
          {
            component: 'ToolbarActivity',
          },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'ThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'ToolbarLanguage',
          },
          {
            component: 'ToolbarNotifications',
          },
          {
            component: 'ToolbarActivity',
          },
        ],
      },
      navigation: {
        enabled: true,
        header: {
          component: 'CollapseNavigationHeader',
        },
        footer: {
          component: 'CollapseNavigationFooter',
        },
        items: [
          {
            name: 'Dashboard',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            to: '/app/uml',
          },
          {
            name: 'UML Tools',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            to: '/app/uml',
          },
          {
            name: 'Search',
            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('search-open', () => false)
              isOpen.value = true
            },
          },
          {
            name: 'Settings',
            icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },
            to: '/app/dashboard',
          },
        ],
      },
    },
    panels: [
      {
        name: 'language',
        position: 'right',
        component: 'PanelLanguage',
      },
      {
        name: 'activity',
        position: 'right',
        component: 'PanelActivity',
      },
      {
        name: 'search',
        position: 'left',
        component: 'PanelSearch',
      },
      {
        name: 'task',
        position: 'right',
        component: 'DemoPanelTask',
      },
    ],
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
})
