// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Дрим тур", // default fallback title
      htmlAttrs: {
        lang: "ru",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2025-07-15",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  icon: {
    customCollections: [
      {
        prefix: "my-icon", // Префикс для использования: <Icon name="my-icon:home" />
        dir: "./assets/icons", // Путь к папке с SVG
      },
    ],
  },
  tailwindcss: {
    // Options
  },
  devtools: { enabled: true },
});
