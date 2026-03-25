<script setup>
const currentYear = new Date().getFullYear();

const sections = [
  {
    title: "Направления",
    links: [
      { name: "Туры в Турцию", path: "/tours/turkey" },
      { name: "Отдых в Египте", path: "/tours/egypt" },
      { name: "Экзотика Бали", path: "/tours/bali" },
      { name: "Мальдивы", path: "/tours/maldives" },
    ],
  },
  {
    title: "Компания",
    links: [
      { name: "О нас", path: "/about" },
      // { name: "Отзывы", path: "/reviews" },
      { name: "Новости", path: "/blog" },
      { name: "Контакты", path: "/contacts" },
    ],
  },
];

const socialLinks = [
  {
    name: "i-simple-icons:whatsapp",
    url: "https://wa.me/79280275579",
  },
  { name: "lineicons:telegram-original", url: "https://t.me/dream_tour_lab" },
  {
    name: "i-my-icon:max",
    url: "https://max.ru/join/ZGPe6asqHF7G4ba9R8A2RAdgr1CWINepujlB7UmkPXQ",
  },
  { name: "i-entypo-social:vk", url: "https://vk.com/dream_tour_lab" },
];
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Колонка 1: О бренде -->
        <div class="flex flex-col gap-6">
          <NuxtLink to="/" class="flex items-center gap-2">
            <img
              src="@@/assets/dream-tour-logo.svg"
              alt="Logo"
              height="30px"
              width="30px"
            />
            <span class="text-2xl font-bold tracking-tight text-white">
              DREAM<span class="text-cyan-500 text-sm">TOUR</span>
            </span>
          </NuxtLink>
          <p class="text-sm leading-relaxed text-gray-400">
            Ваш надежный гид в мире незабываемых путешествий. Мы создаем
            маршруты, которые превращаются в лучшие воспоминания вашей жизни.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
            >
              <Icon :name="social.name" class="text-xl text-white" />
            </a>
          </div>
        </div>

        <!-- Колонки 2 и 3: Списки ссылок -->
        <div v-for="section in sections" :key="section.title">
          <h4
            class="text-white font-bold mb-6 uppercase tracking-wider text-sm"
          >
            {{ section.title }}
          </h4>
          <ul class="space-y-4">
            <li v-for="link in section.links" :key="link.name">
              <NuxtLink
                :to="link.path"
                class="text-sm hover:text-cyan-400 transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Колонка 4: Контакты -->
        <div>
          <h4
            class="text-white font-bold mb-6 uppercase tracking-wider text-sm"
          >
            Контакты
          </h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li class="flex items-start gap-3">
              <Icon name="i-lucide:map-pin" class="text-cyan-500 mt-1" />
              <span
                >Карачаево-Черкесская Республика, <br />
                г. Черкесск</span
              >
            </li>
            <li class="flex items-center gap-3">
              <Icon name="i-lucide:phone" class="text-cyan-500" />
              <a
                href="tel:+79000000000"
                class="hover:text-white transition-colors"
                >+7 (900) 000-00-00</a
              >
            </li>
            <li class="flex items-center gap-3">
              <Icon name="i-lucide:mail" class="text-cyan-500" />
              <a
                href="mailto:dream-tour.lab@mail.ru"
                class="hover:text-white transition-colors"
                >dream-tour.lab@mail.ru</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Нижняя панель -->
      <div
        class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-xs text-gray-500">
          © {{ currentYear }} Dream Tour Lab. Все права защищены.
        </p>
        <div class="flex gap-6 text-xs text-gray-500">
          <NuxtLink to="/policy" class="hover:text-white"
            >Политика конфиденциальности</NuxtLink
          >
          <NuxtLink to="/terms" class="hover:text-white"
            >Публичная оферта</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>
