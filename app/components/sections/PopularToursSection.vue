<script setup lang="ts">
import type { Tour } from '~/types';

withDefaults(
  defineProps<{
    /** Список туров для отображения */
    tours?: Tour[];
    /** Индикатор загрузки (показывает SkeletonCard) */
    loading?: boolean;
    /** Ошибка загрузки (если есть — показывает блок ошибки) */
    error?: unknown;
  }>(),
  {
    tours: () => [],
    loading: false,
  },
);
</script>

<template>
  <section class="py-24 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
      >
        <div class="max-w-xl">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-[1px] bg-cyan-600/30"></div>
            <span
              class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
            >
              Лучшие предложения недели
            </span>
          </div>

          <h2
            class="text-3xl md:text-5xl font-black text-gray-900 leading-tight"
          >
            Популярные туры, которые <br />
            <span class="text-cyan-600">ВЫБИРАЮТ КЛИЕНТЫ</span>
          </h2>
        </div>
        <NuxtLink
          to="/tours"
          class="flex items-center gap-2 text-cyan-600 font-bold hover:gap-4 transition-all"
        >
          Смотреть все туры
          <Icon name="i-lucide:arrow-right" />
        </NuxtLink>
      </div>

      <!-- Состояние загрузки -->
      <div
        v-if="loading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <SkeletonCard v-for="i in 3" :key="i" />
      </div>

      <!-- Состояние ошибки -->
      <div
        v-else-if="error"
        class="bg-red-50 border border-red-100 text-red-600 rounded-2xl p-6 text-sm"
      >
        Не удалось загрузить популярные туры. Обновите страницу и попробуйте
        ещё раз.
      </div>

      <!-- Сетка карточек -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>
    </div>
  </section>
</template>
