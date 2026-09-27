<script setup lang="ts">
// Skeleton-заглушка карточки тура. Визуально повторяет TourCard,
// чтобы при загрузке не было скачка макета (layout shift).
</script>

<template>
  <div
    class="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
  >
    <!-- Заглушка изображения -->
    <div class="h-64 bg-gray-200"></div>

    <!-- Контент -->
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex justify-between items-start mb-2">
        <div class="h-5 w-3/4 bg-gray-200 rounded"></div>
        <div class="h-4 w-10 bg-gray-200 rounded"></div>
      </div>

      <div class="space-y-2 mb-6">
        <div class="h-3 w-full bg-gray-100 rounded"></div>
        <div class="h-3 w-5/6 bg-gray-100 rounded"></div>
      </div>

      <div class="flex items-center gap-4 mb-6 border-y border-gray-50 py-3">
        <div class="h-3 w-16 bg-gray-100 rounded"></div>
        <div class="h-3 w-16 bg-gray-100 rounded"></div>
      </div>

      <div class="mt-auto flex items-center justify-between">
        <div>
          <div class="h-2 w-16 bg-gray-100 rounded mb-2"></div>
          <div class="h-6 w-24 bg-gray-200 rounded"></div>
        </div>
        <div class="w-12 h-12 bg-gray-100 rounded-2xl"></div>
      </div>
    </div>
  </div>
</template>
