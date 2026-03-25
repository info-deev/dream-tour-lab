<script setup>
useHead({
  title: "Тур",
});
const included = [
  "Перелет туда-обратно",
  "Трансфер до отеля",
  "Завтраки и ужины",
  "Медицинская страховка",
  "Экскурсия на риф",
];
</script>

<template>
  <div class="bg-white">
    <!-- Hero тура с эффектом из секции 4 -->
    <div class="relative h-[70vh] w-full overflow-hidden">
      <img
        src="https://optim.tildacdn.com/tild6632-3531-4230-a230-363364623331/-/resize/400x700/-/format/webp/image_6.png.webp"
        class="w-full h-full object-cover scale-105 animate-slow-zoom"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
      ></div>

      <div class="absolute bottom-0 left-0 w-full p-6 md:p-20">
        <div class="max-w-7xl mx-auto">
          <NuxtLink
            to="/tours"
            class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <Icon name="i-lucide:arrow-left" /> Назад к поиску
          </NuxtLink>
          <h1
            class="text-4xl md:text-7xl font-black text-white leading-tight uppercase"
          >
            Мальдивы: <span class="text-cyan-400">Райский Остров</span>
          </h1>
          <div class="flex flex-wrap gap-6 mt-8">
            <div class="flex items-center gap-2 text-white">
              <Icon name="i-lucide:clock" class="text-cyan-400" /> 10 ночей
            </div>
            <div class="flex items-center gap-2 text-white">
              <Icon name="i-lucide:star" class="text-orange-400" /> 5.0 (24
              отзыва)
            </div>
            <div class="flex items-center gap-2 text-white">
              <Icon name="i-lucide:map-pin" class="text-cyan-400" /> Атолл Мале
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <!-- Контент слева -->
        <div class="lg:col-span-2 space-y-12">
          <div>
            <h3 class="text-2xl font-black text-gray-900 mb-6 uppercase">
              Об отдыхе
            </h3>
            <p
              class="text-gray-500 text-lg leading-relaxed italic border-l-4 border-cyan-600 pl-6"
            >
              Забудьте о суете мегаполиса в этом уединенном уголке Индийского
              океана. Белоснежный песок, лазурная вода и сервис высочайшего
              уровня ждут вас.
            </p>
          </div>

          <!-- Что включено (стиль как в "Преимуществах") -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="item in included"
              :key="item"
              class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
            >
              <div
                class="w-10 h-10 bg-white text-green-500 rounded-xl flex items-center justify-center shadow-sm"
              >
                <Icon name="i-lucide:check-circle" />
              </div>
              <span class="font-bold text-gray-700 text-sm">{{ item }}</span>
            </div>
          </div>

          <!-- Галерея (стиль карточек) -->
          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-3xl overflow-hidden h-64">
              <img
                src="https://optim.tildacdn.com/tild6432-6365-4864-a261-393832323037/-/resize/400x700/-/format/webp/noroot.png.webp"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="rounded-3xl overflow-hidden h-64">
              <img
                src="https://optim.tildacdn.com/tild3335-3061-4133-b661-626661643036/-/resize/400x700/-/format/webp/photo-1613743147907-.jpg.webp"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Правая колонка (Бронирование) -->
        <div class="lg:col-span-1">
          <div
            class="sticky top-32 p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-gray-200/50"
          >
            <div class="mb-6">
              <span class="text-gray-400 text-sm">Цена за человека</span>
              <div class="text-4xl font-black text-gray-900">от 125 000 ₽</div>
            </div>
            <div class="space-y-4 mb-8">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Перелет</span
                ><span class="font-bold">Включен</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Питание</span
                ><span class="font-bold">All Inclusive</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Страховка</span
                ><span class="font-bold">Включена</span>
              </div>
            </div>
            <button
              class="w-full py-5 bg-cyan-600 text-white font-black rounded-2xl hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100 flex items-center justify-center gap-3"
            >
              Забронировать
              <Icon name="i-lucide:arrow-right" />
            </button>
            <p
              class="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold"
            >
              Оплата онлайн или в офисе
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
