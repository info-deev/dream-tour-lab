<script setup>
useHead({
  title: "О нас",
});

// const stats = [
//   { value: "500+", label: "Статей" },
//   { value: "10k", label: "Читателей" },
//   { value: "15", label: "Авторов" },
//   { value: "100%", label: "Open Source" },
// ];

// const team = [
//   { name: "Алексей Д.", role: "Lead Developer" },
//   { name: "Мария С.", role: "UI/UX Designer" },
//   { name: "Иван К.", role: "Tech Editor" },
// ];

const values = [
  {
    title: "БЕЗОПАСНОСТЬ",
    desc: "Мы предлагаем уникальные туры по России и всему миру, тщательно выбирая направления и партнёров. Наша цель — обеспечить безопасность и комфорт каждого путешественника, чтобы каждая поездка стала незабываемой.",
    icon: "i-lucide:shield-check",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "ЗАБОТА И ВНИМАНИЕ",
    desc: "Мы в «Дрим-Тур» стремимся сделать ваш отдых незабываемым. Наша команда поможет на всех этапах — от выбора направления до организации путешествия. Мы всегда на связи, чтобы обеспечить вам максимальный комфорт и удобство.",
    icon: "i-lucide:heart",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "ЭМОЦИИ",
    desc: "Дрим-Тур - это лаборатория МЕЧТЫ. Здесь мы воплощаем Ваши мечты в реальность. Мы создаем туры, которые подарят вам яркие впечатления и незабываемые эмоции.",
    icon: "i-lucide:plane",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const team = [
  {
    name: "Александр Громов",
    role: "Основатель",
    image: "https://pravatar.cc",
  },
  {
    name: "Елена Мирная",
    role: "Ведущий эксперт",
    image: "https://pravatar.cc",
  },
  {
    name: "Марк Романов",
    role: "Специалист по Азии",
    image: "https://pravatar.cc",
  },
  {
    name: "Юлия Старк",
    role: "Консультант 24/7",
    image: "https://pravatar.cc",
  },
];
</script>

<template>
  <div class="bg-white overflow-hidden">
    <!-- 1. Hero-секция "О компании" -->
    <section class="relative pt-32 pb-20 px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 text-left">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-[1px] bg-cyan-600/30"></div>
              <span
                class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
              >
                Наша история
              </span>
            </div>
            <h1
              class="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8"
            >
              Создаем <span class="text-cyan-600 uppercase">Воспоминания</span>,
              <br />
              которые остаются навсегда
            </h1>
            <p class="text-gray-500 text-lg leading-relaxed mb-8">
              Дрим-Тур — это не просто турагентство. Это команда профессионалов,
              влюбленных в путешествия. Мы верим, что каждый заслуживает
              идеальный отдых без забот и скрытых платежей.
            </p>
            <div class="flex gap-4">
              <div
                class="px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div class="text-2xl font-black text-cyan-600">10+</div>
                <div
                  class="text-xs text-gray-400 uppercase font-bold tracking-wider"
                >
                  Лет опыта
                </div>
              </div>
              <div
                class="px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div class="text-2xl font-black text-cyan-600">15к+</div>
                <div
                  class="text-xs text-gray-400 uppercase font-bold tracking-wider"
                >
                  Клиентов
                </div>
              </div>
            </div>
          </div>

          <!-- Декоративное изображение (стиль как в 4 секции) -->
          <div class="lg:w-1/2 relative">
            <div
              class="relative rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <img
                src="https://optim.tildacdn.com/tild3062-3434-4262-a433-356666326565/-/resize/460x/-/format/webp/deuv3oyb2wlo2wf18h_B.png.webp"
                alt="Travel"
                class="w-full h-[500px] object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
              ></div>
            </div>
            <!-- Плашка как в 4 секции -->
            <div
              class="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] hidden md:block"
            >
              <p class="text-sm font-bold text-gray-900">
                "Путешествие — это единственная вещь, покупая которую,
                становишься богаче"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Наши ценности (Стиль как в "Преимуществах") -->
    <section class="py-24 bg-white px-6">
      <div class="max-w-7xl mx-auto text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
          <span
            class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
            >ДНК Компании</span
          >
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
        </div>
        <h2 class="text-3xl md:text-5xl font-black text-gray-900">
          Наши <span class="text-cyan-600">ЦЕННОСТИ</span>
        </h2>
      </div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="group p-10 bg-gray-50 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
        >
          <div
            :class="`w-16 h-16 ${value.bgColor} ${value.iconColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`"
          >
            <Icon :name="value.icon" size="32" />
          </div>
          <h4 class="text-2xl font-black mb-4 text-gray-900">
            {{ value.title }}
          </h4>
          <p class="text-gray-500 leading-relaxed">{{ value.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
