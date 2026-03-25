<template>
  <div
    class="min-h-screen flex flex-col font-sans selection:bg-cyan-100 selection:text-cyan-900"
  >
    <!-- Шапка сайта (всегда сверху) -->
    <AppHeader />

    <!-- Основной контент страницы -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Футер сайта (всегда снизу) -->
    <AppFooter />

    <!-- Кнопка "Наверх" (скрыта по умолчанию, появляется при скролле) -->
    <Transition name="fade">
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 w-12 h-12 bg-cyan-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-cyan-700 transition-all hover:-translate-y-1 active:scale-95"
      >
        <Icon name="i-lucide:arrow-up" size="24" />
      </button>
    </Transition>

    <!-- Виджет WhatsApp/Telegram (фишка как на оригинале) -->
    <div class="fixed bottom-8 left-8 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me"
        target="_blank"
        class="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Icon name="i-simple-icons:whatsapp" size="24" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 600;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Настройка SEO по умолчанию
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Dream Tour`
      : "Dream Tour — Путешествия вашей мечты";
  },
  meta: [
    {
      name: "description",
      content: "Организация индивидуальных и групповых туров по всему миру.",
    },
  ],
});
</script>

<style scoped>
/* Анимация для кнопки "Наверх" */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
