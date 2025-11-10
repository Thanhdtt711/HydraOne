// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/style.css',
  ],
  vite: {
    optimizeDeps: {
      exclude: [
        'lucid-cardano', 
        '@emurgo/cardano-multiplatform-lib-browser', 
        '@emurgo/cardano-message-signing-browser'
      ],
    },
  },
})
