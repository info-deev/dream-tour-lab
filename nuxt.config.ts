// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="node" />
export default defineNuxtConfig({
  app: {
    baseURL: "/dream-tour-lab/",
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
  // Строгая типизация + проверка типов при сборке
  typescript: {
    strict: true,
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000/api",
      appName: "Dream Tour",
    },
  },
  icon: {
    mode: "css",
    cssLayer: "base",
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
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
