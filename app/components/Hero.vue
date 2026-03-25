<script setup>
// Можно добавить массив с фоновыми изображениями для слайдера в будущем
const bgImage =
  "https://optim.tildacdn.com/tild3061-6334-4432-b937-343134353131/-/format/webp/noroot.png";
</script>

<template>
  <section
    class="relative h-screen w-full flex items-center justify-center overflow-hidden"
  >
    <!-- Фоновое изображение с оверлеем -->
    <div class="absolute inset-0 z-0">
      <img
        :src="bgImage"
        alt="Background"
        class="w-full h-full object-cover scale-105 animate-slow-zoom"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Контент -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Путешествия, о которых <br />
        <span class="text-cyan-400">вы мечтали</span>
      </h1>
      <p class="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
        Индивидуальные туры по всему миру. Мы берем на себя все заботы, вам
        остается только наслаждаться отдыхом.
      </p>

      <!-- Блок быстрого поиска (Search Bar) -->
      <div
        class="bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-full shadow-2xl border border-white/20 max-w-4xl mx-auto"
      >
        <div class="flex flex-col md:flex-row items-center gap-2">
          <div
            class="w-full md:flex-1 px-6 py-3 flex flex-col items-start border-b md:border-b-0 md:border-r border-white/20"
          >
            <span
              class="text-[10px] uppercase tracking-wider text-cyan-300 font-bold"
              >Куда едем?</span
            >
            <input
              type="text"
              placeholder="Страна, город..."
              class="bg-transparent border-none outline-none w-full text-white placeholder:text-gray-300"
            />
          </div>

          <div
            class="w-full md:w-48 px-6 py-3 flex flex-col items-start border-b md:border-b-0 md:border-r border-white/20"
          >
            <span
              class="text-[10px] uppercase tracking-wider text-cyan-300 font-bold"
              >Когда?</span
            >
            <input
              type="date"
              class="bg-transparent border-none outline-none w-full text-white [color-scheme:dark]"
            />
          </div>

          <div class="w-full md:w-auto p-2">
            <NuxtLink
              to="/tours"
              class="w-full md:w-auto bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-4 rounded-xl md:rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
            >
              Найти тур
              <Icon
                name="i-lucide:arrow-right"
                class="group-hover:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Соц. доказательство -->
      <div class="mt-12 flex flex-wrap justify-center gap-8 opacity-80">
        <div class="flex items-center gap-2">
          <Icon name="i-lucide:check-circle" class="text-cyan-400" />
          <span class="text-sm">10+ лет опыта</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="i-lucide:users" class="text-cyan-400" />
          <span class="text-sm">5000+ довольных клиентов</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="i-lucide:shield-check" class="text-cyan-400" />
          <span class="text-sm">Гарантия безопасности</span>
        </div>
      </div>
    </div>

    <!-- Декоративный элемент (скролл вниз) -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon
        name="i-lucide:chevron-down"
        class="text-white text-3xl opacity-50"
      />
    </div>
  </section>
</template>

<style scoped>
@keyframes slow-zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.animate-slow-zoom {
  animation: slow-zoom 20s infinite alternate ease-in-out;
}
</style>
