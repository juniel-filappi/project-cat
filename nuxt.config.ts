// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxt/test-utils/module",
  ],
  googleFonts: {
    families: {
      Jost: [500, 700],
    }
  },
})