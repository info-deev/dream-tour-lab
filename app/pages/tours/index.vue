<script setup lang="ts">
import { computed } from "vue";
import { useTours } from "~/composables/useTours";

const { fetchTours } = useTours();

// Список туров: подгружается с API (mock-эндпоинт /api/tours)
const { data, pending, error } = await useAsyncData(
  "tours",
  () => fetchTours(),
);

/** Плоский массив туров для сетки (пустой при отсутствии данных). */
const tours = computed(() => data.value?.data ?? []);

useHead({
  title: "Подбор тура",
});
</script>

<template>
  <div class="bg-white min-h-screen pt-32 pb-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок и фильтры -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
          <span
            class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
            >Ваше следующее приключение</span
          >
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-12">
          Поиск <span class="text-cyan-600 uppercase">Туров</span>
        </h1>

        <!-- Панель фильтров в стиле твоих карточек -->
        <div
          class="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div class="space-y-2">
            <label
              class="text-[10px] uppercase font-bold text-gray-400 tracking-widest ml-2"
              >Направление</label
            >
            <select
              class="w-full bg-white border-none rounded-2xl px-4 py-3 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all"
            >
              <option>Все страны</option>
              <option>Турция</option>
              <option>Египет</option>
            </select>
          </div>
          <div class="space-y-2">
            <label
              class="text-[10px] uppercase font-bold text-gray-400 tracking-widest ml-2"
              >Месяц</label
            >
            <select
              class="w-full bg-white border-none rounded-2xl px-4 py-3 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all"
            >
              <option>Любой месяц</option>
              <option>Июнь</option>
              <option>Июль</option>
            </select>
          </div>
          <div class="space-y-2">
            <label
              class="text-[10px] uppercase font-bold text-gray-400 tracking-widest ml-2"
              >Бюджет</label
            >
            <select
              class="w-full bg-white border-none rounded-2xl px-4 py-3 focus:ring-2 focus:ring-cyan-600/20 outline-none transition-all"
            >
              <option>До 100 000 ₽</option>
              <option>100к - 200к</option>
            </select>
          </div>
          <div class="flex items-end">
            <button
              class="w-full h-12 bg-cyan-600 text-white font-bold rounded-2xl hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-100"
            >
              Показать результаты
            </button>
          </div>
        </div>
      </div>

      <!-- Сетка (как в твоей секции №2) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>

      <!-- Пагинация -->
      <div class="mt-16 flex justify-center gap-2">
        <button
          class="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all"
        >
          1
        </button>
        <button
          class="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center bg-cyan-600 text-white font-bold"
        >
          2
        </button>
        <button
          class="w-12 h-12 rounded-xl border border-gray-100 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all"
        >
          3
        </button>
      </div>
    </div>
  </div>
</template>
