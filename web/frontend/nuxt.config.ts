// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@shuriken-ui/nuxt'],
  ssr: false,
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
})
