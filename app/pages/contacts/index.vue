<script setup>
useHead({
  title: "Контакты",
});

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
  <div class="max-w-7xl px-6 md:px-0 mx-auto">
    <!-- Header Section -->
    <section class="pt-32 pb-16 bg-gray-50">
      <div class="max-w-7xl mx-auto text-center">
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
          <span
            class="text-cyan-600 font-bold uppercase tracking-[0.2em] text-[10px]"
          >
            Мы всегда на связи
          </span>
          <div class="w-8 h-[1px] bg-cyan-600/30"></div>
        </div>
        <h1
          class="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6"
        >
          Свяжитесь с <span class="text-cyan-600 uppercase">Нами</span>
        </h1>
        <p class="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          Есть вопросы по турам или нужна помощь в подборе? Наша команда готова
          помочь вам 24/7.
        </p>
      </div>
    </section>

    <!-- Info & Form Grid -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Cards -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Card: Phone -->
            <div
              class="group p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                class="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors"
              >
                <Icon name="i-lucide:phone-call" size="24" />
              </div>
              <h4 class="text-lg font-bold mb-2">Позвоните нам</h4>
              <p class="text-gray-500 text-sm mb-4">Бесплатно по всей России</p>
              <a
                href="tel:+79000000000"
                class="text-xl font-black text-gray-900 hover:text-cyan-600 transition-colors"
              >
                +7 (900) 000-00-00
              </a>
            </div>

            <!-- Card: Email -->
            <div
              class="group p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                class="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors"
              >
                <Icon name="i-lucide:mail" size="24" />
              </div>
              <h4 class="text-lg font-bold mb-2">Напишите нам</h4>
              <p class="text-gray-500 text-sm mb-4">
                Отвечаем в течение 15 минут
              </p>
              <a
                href="mailto:dream-tour.lab@mail.ru"
                class="text-xl font-black text-gray-900 hover:text-cyan-600 transition-colors"
              >
                dream-tour.lab@mail.ru
              </a>
            </div>

            <!-- Socials -->
            <div class="p-6 md:p-8 bg-gray-900 rounded-3xl text-white">
              <h4 class="text-lg font-bold mb-6">Мы в соцсетях</h4>
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
                <!-- <a
                  href="#"
                  class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-600 transition-all"
                >
                  <Icon name="i-lucide:send" size="20" />
                </a>
                <a
                  href="#"
                  class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-600 transition-all"
                >
                  <Icon name="i-lucide:instagram" size="20" />
                </a>
                <a
                  href="#"
                  class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-600 transition-all"
                >
                  <Icon name="i-lucide:message-circle" size="20" />
                </a> -->
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div
            class="lg:col-span-2 bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-3xl p-6 md:p-12"
          >
            <form @submit.prevent class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label
                    class="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1"
                    >Ваше имя</label
                  >
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    class="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    class="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1"
                    >Телефон</label
                  >
                  <input
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    class="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label
                  class="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1"
                  >Сообщение</label
                >
                <textarea
                  rows="4"
                  placeholder="Расскажите о туре вашей мечты..."
                  class="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                class="w-full md:w-auto px-10 py-5 bg-cyan-600 text-white font-bold rounded-2xl hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-200 transition-all flex items-center justify-center gap-3 group"
              >
                Отправить заявку
                <Icon
                  name="i-lucide:arrow-right"
                  class="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto">
        <div
          class="relative h-[450px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-inner"
        >
          <!-- Заглушка для карты (сюда можно вставить iframe или компонент карты) -->
          <div
            class="absolute inset-0 bg-cyan-900/5 flex items-center justify-center"
          >
            <div class="text-center">
              <Icon
                name="i-lucide:map-pin"
                size="48"
                class="text-cyan-600 mb-4 mx-auto animate-bounce"
              />
              <p class="text-gray-900 font-bold uppercase tracking-widest">
                Наш офис в Черкесске
              </p>
              <p class="text-gray-500">
                Карачаево-Черкесская Республика, г. Черкесск
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
