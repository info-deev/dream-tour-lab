<script setup>
useHead({
  title: "Новости",
});

const posts = [
  {
    id: 1,
    title: "Как собрать чемодан и ничего не забыть: чек-лист эксперта",
    excerpt:
      "Мы подготовили полный список вещей, которые действительно пригодятся вам в путешествии, и рассказали, как их компактно упаковать.",
    category: "Лайфхаки",
    date: "12 Марта, 2024",
    readTime: "5",
    image:
      "https://optim.tildacdn.com/tild3361-6361-4130-b130-643966646635/-/resize/800x1400/-/format/webp/photo-1529426301869-.jpg",
  },
  {
    id: 2,
    title: "Скрытые жемчужины Турции: Каш и Олюдениз",
    excerpt:
      "Турция — это не только All Inclusive. Отправляемся в самые фотогеничные городки побережья.",
    category: "Направления",
    date: "10 Марта, 2024",
    readTime: "8",
    image:
      "https://optim.tildacdn.com/tild3235-6330-4639-a136-386264383138/-/resize/800x1400/-/format/webp/photo-1605581810011-.jpg",
  },
  {
    id: 3,
    title: "Новые правила въезда в страны Шенгена в 2024 году",
    excerpt:
      "Всё, что вам нужно знать о визах, страховках и документах перед планированием поездки в Европу.",
    category: "Новости",
    date: "08 Марта, 2024",
    readTime: "4",
    image:
      "https://optim.tildacdn.com/tild3661-3933-4233-b632-323861663039/-/resize/800x1400/-/format/webp/noroot.png",
  },
];
</script>

<template>
  <div class="bg-white min-h-screen pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Заголовок страницы -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
          <span
            class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
          >
            Мир глазами Дрим-Тур
          </span>
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Наш <span class="text-cyan-600 uppercase">Блог</span>
        </h1>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Советы для путешественников, новости туризма и секретные локации, о
          которых не пишут в путеводителях.
        </p>
      </div>

      <!-- Главная новость (Featured Post) - стиль как в 4 секции -->
      <div
        class="relative group rounded-[3rem] overflow-hidden h-[500px] mb-16 shadow-2xl cursor-pointer"
      >
        <img
          src="https://optim.tildacdn.com/tild3361-6361-4130-b130-643966646635/-/resize/800x1400/-/format/webp/photo-1529426301869-.jpg"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"
        ></div>
        <div class="absolute bottom-0 p-8 md:p-16">
          <span
            class="px-4 py-1.5 bg-cyan-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 inline-block"
          >
            Тренд сезона
          </span>
          <h2 class="text-3xl md:text-5xl font-black text-white mb-4 max-w-3xl">
            Топ-10 направлений для отдыха этой весной: где тепло и безопасно?
          </h2>
          <NuxtLink
            to="/blog/1"
            class="flex items-center gap-2 text-cyan-400 font-bold hover:gap-4 transition-all"
          >
            Читать статью <Icon name="i-lucide:arrow-right" />
          </NuxtLink>
        </div>
      </div>

      <!-- Сетка новостей (Стиль как в "Популярных направлениях") -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article
          v-for="post in posts"
          :key="post.id"
          class="group cursor-pointer"
        >
          <!-- Картинка с оверлеем -->
          <div
            class="relative h-64 rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-300"
          >
            <img
              :src="post.image"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute top-4 left-4">
              <span
                class="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-bold uppercase tracking-wider rounded-xl"
              >
                {{ post.category }}
              </span>
            </div>
          </div>

          <!-- Контент -->
          <div class="px-2">
            <div class="flex items-center gap-3 text-gray-400 text-xs mb-3">
              <span class="flex items-center gap-1"
                ><Icon name="i-lucide:calendar" size="14" />
                {{ post.date }}</span
              >
              <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span class="flex items-center gap-1"
                ><Icon name="i-lucide:clock" size="14" />
                {{ post.readTime }} мин</span
              >
            </div>
            <h3
              class="text-xl font-black text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors leading-snug"
            >
              {{ post.title }}
            </h3>
            <p class="text-gray-500 text-sm line-clamp-2 leading-relaxed">
              {{ post.excerpt }}
            </p>
          </div>
        </article>
      </div>

      <!-- Кнопка "Загрузить еще" (в твоем стиле) -->
      <div class="mt-20 text-center">
        <button
          class="px-12 py-5 border-2 border-gray-100 text-gray-900 font-bold rounded-2xl hover:border-cyan-600 hover:text-cyan-600 transition-all"
        >
          Загрузить еще статьи
        </button>
      </div>
    </div>
  </div>
</template>
