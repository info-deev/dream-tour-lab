<script setup lang="ts">
import { computed, onMounted } from "vue";
import type { Tour } from "~/types";
import { formatPrice, formatDuration } from "~/utils/formatters";
import { useFavoritesStore } from "~/stores/favorites";

const props = defineProps<{
  tour: Tour;
}>();

/** Обложка тура — первое изображение (с фолбэком на пустую строку). */
const coverImage = computed(() => props.tour.images[0] ?? "");

/** Store избранного (Pinia + localStorage). */
const favorites = useFavoritesStore();

/** Текущее состояние «в избранном» для этого тура. */
const isFavorite = computed(() => favorites.isFavorite(props.tour.id));

// Состояние из localStorage восстанавливается только на клиенте:
// при SSR store пуст, после монтирования подгружаем сохранённое избранное.
onMounted(() => {
  favorites.loadFromStorage();
});
</script>

<template>
  <div
    class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100"
  >
    <!-- Изображение -->
    <div class="relative h-64 overflow-hidden">
      <NuxtImg
        :src="coverImage"
        :alt="tour.title"
        :width="800"
        :height="600"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <!-- Бейдж (Хит, Скидка и т.д.) -->
      <div
        v-if="tour.badge"
        class="absolute top-4 left-4 bg-cyan-600 text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full tracking-wider"
      >
        {{ tour.badge.label }}
      </div>

      <!-- Кнопка "В избранное" -->
      <button
        type="button"
        :aria-label="isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'"
        class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all"
        @click="favorites.toggleFavorite(tour)"
      >
        <Icon
          name="i-lucide:heart"
          :class="isFavorite ? 'fill-red-500 text-red-500' : ''"
        />
      </button>

      <!-- Оверлей с локацией -->
      <div
        class="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg"
      >
        <Icon name="i-lucide:map-pin" class="text-cyan-400" />
        {{ tour.location }}
      </div>
    </div>

    <!-- Контент -->
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex justify-between items-start mb-2">
        <h3
          class="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors"
        >
          {{ tour.title }}
        </h3>
        <div class="flex items-center gap-1 text-orange-400 font-bold">
          <Icon name="i-lucide:star" size="14" />
          <span class="text-sm">{{ tour.rating }}</span>
        </div>
      </div>

      <p class="text-gray-500 text-sm mb-6 line-clamp-2">
        Исследуйте невероятные пейзажи и погрузитесь в культуру этого
        удивительного места вместе с нашими экспертами.
      </p>

      <!-- Характеристики -->
      <div class="flex items-center gap-4 mb-6 border-y border-gray-50 py-3">
        <div class="flex items-center gap-1.5 text-xs text-gray-600">
          <Icon name="i-lucide:clock" class="text-cyan-500" />
          {{ formatDuration(tour.duration) }}
        </div>
        <div class="flex items-center gap-1.5 text-xs text-gray-600">
          <Icon name="i-lucide:users" class="text-cyan-500" />
          Группа 10+
        </div>
      </div>

      <!-- Футер карточки -->
      <div class="mt-auto flex items-center justify-between">
        <div>
          <span
            class="block text-[10px] uppercase text-gray-400 font-bold tracking-widest"
            >Стоимость</span
          >
          <span class="text-2xl font-black text-gray-900 leading-none">
            {{ formatPrice(tour.price, tour.currency) }}
          </span>
        </div>

        <NuxtLink
          :to="`/tours/${tour.id}`"
          class="w-12 h-12 bg-gray-100 group-hover:bg-cyan-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300"
        >
          <Icon name="i-lucide:arrow-right" class="text-xl" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Плавное обрезание текста, если он длинный */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
