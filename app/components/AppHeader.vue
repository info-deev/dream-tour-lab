<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router"; // Импортируем хук роута

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isModalOpen = ref(false);

// Создаем вычисляемое свойство: "активный" вид, если проскроллили ИЛИ мы не на главной
const isMenuSticky = computed(() => {
  return isScrolled.value || route.path !== "/";
});

const navLinks = [
  { name: "Главная", path: "/" },
  { name: "Туры", path: "/tours" },
  { name: "Новости", path: "/blog" },
  { name: "О нас", path: "/about" },
  { name: "Контакты", path: "/contacts" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      { absolute: !isMenuSticky, fixed: isMenuSticky },
      ' top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ',
      isMenuSticky ? 'bg-white shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Логотип -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          src="@@/assets/dream-tour-logo.svg"
          alt="Logo"
          height="30px"
          width="30px"
        />
        <span
          :class="[
            'text-2xl font-bold tracking-tight',
            isMenuSticky ? 'text-cyan-900' : 'text-white',
          ]"
        >
          DREAM<span class="text-cyan-500 text-sm">TOUR</span>
        </span>
      </NuxtLink>

      <!-- Десктопное меню -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="[
            'text-sm font-medium transition-colors hover:text-cyan-500',
            isMenuSticky ? 'text-gray-700' : 'text-white',
          ]"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Правая часть: Контакты/CTA -->
      <div class="flex items-center gap-4">
        <a
          href="tel:+79000000000"
          :class="[
            'hidden lg:block text-sm font-semibold',
            isMenuSticky ? 'text-gray-800' : 'text-white',
          ]"
        >
          +7 (900) 000-00-00
        </a>
        <button
          class="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          @click="isModalOpen = true"
        >
          Заказать тур
        </button>

        <!-- Бургер (мобильные) -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2"
        >
          <div
            :class="[
              'w-6 h-0.5 mb-1.5 transition-all',
              isMenuSticky ? 'bg-gray-800' : 'bg-white',
            ]"
          ></div>
          <div
            :class="[
              'w-6 h-0.5 mb-1.5 transition-all',
              isMenuSticky ? 'bg-gray-800' : 'bg-white',
            ]"
          ></div>
          <div
            :class="[
              'w-6 h-0.5 transition-all',
              isMenuSticky ? 'bg-gray-800' : 'bg-white',
            ]"
          ></div>
        </button>
      </div>
    </div>

    <!-- Мобильное меню (выезжающее) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-6 gap-4 border-t"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-gray-800 text-lg font-medium border-b pb-2"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
        <div class="pt-2">
          <p class="text-sm text-gray-500 mb-1">Свяжитесь с нами:</p>
          <a href="tel:+79000000000" class="text-cyan-600 font-bold text-lg"
            >+7 (900) 000-00-00</a
          >
        </div>
      </div>
    </Transition>
    <TourOrderModal :is-open="isModalOpen" @close="isModalOpen = false" />
  </header>
</template>

<style scoped>
/* Дополнительные стили, если Tailwind мало */
.router-link-active {
  @apply text-cyan-500 font-bold;
}
</style>
