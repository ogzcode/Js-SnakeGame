// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  content: {
    renderer: {
      anchorLinks: {
        h1: true,
        h2: true,
        h3: true,
        h4: true,
        h5: true,
        h6: true
      }
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  }
})
