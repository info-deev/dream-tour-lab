<template>
  <div class="min-h-screen font-sans">
    <!-- NuxtPage — это компонент, который рендерит содержимое папки /pages -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup></script>

<style>
/* Глобальные настройки шрифтов и плавности */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-gray-50 text-slate-900 antialiased;
}

/* Кастомизация скроллбара */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  @apply bg-gray-100;
}
::-webkit-scrollbar-thumb {
  @apply bg-cyan-400 rounded-full border-2 border-gray-100;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-cyan-600;
}
</style>
