<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  phone: "",
  email: "",
  tourType: "beach",
});

const isSubmitted = ref(false);
const isLoading = ref(false);

const submitForm = async () => {
  isLoading.value = true;
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isLoading.value = false;
  isSubmitted.value = true;
};
</script>

<template>
  <div
    class="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 max-w-4xl mx-auto"
  >
    <div class="flex flex-col md:flex-row">
      <!-- Левая часть: Инфо -->
      <div
        class="bg-cyan-600 md:w-1/3 p-6 md:p-10 text-white flex flex-col justify-between"
      >
        <div>
          <h3 class="text-2xl font-bold mb-4">Поможем с выбором!</h3>
          <p class="text-cyan-100 text-sm leading-relaxed">
            Оставьте заявку, и наш эксперт свяжется с вами в ближайшее время для
            подбора идеального тура.
          </p>
        </div>

        <div class="mt-10 space-y-4">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            >
              <Icon name="i-lucide:phone-call" />
            </div>
            <span class="text-sm font-medium">+7 (900) 000-00-00</span>
          </div>
        </div>
      </div>

      <!-- Правая часть: Форма -->
      <div class="md:w-2/3 p-6 md:p-10 relative">
        <Transition name="fade-slide" mode="out-in">
          <div v-if="!isSubmitted" key="form">
            <form
              @submit.prevent="submitForm"
              class="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div class="flex flex-col gap-2">
                <label
                  class="text-xs font-bold uppercase text-gray-400 tracking-wider"
                  >Ваше имя</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Иван Иванов"
                  required
                  class="bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label
                  class="text-xs font-bold uppercase text-gray-400 tracking-wider"
                  >Телефон</label
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  class="bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                />
              </div>

              <div class="flex flex-col gap-2 md:col-span-2">
                <label
                  class="text-xs font-bold uppercase text-gray-400 tracking-wider"
                  >Тип отдыха</label
                >
                <select
                  v-model="form.tourType"
                  class="bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-cyan-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="beach">Пляжный отдых</option>
                  <option value="excursion">Экскурсионный тур</option>
                  <option value="mountains">Активный отдых (горы)</option>
                  <option value="cruise">Круизы</option>
                </select>
              </div>

              <div class="md:col-span-2 mt-2">
                <button
                  :disabled="isLoading"
                  class="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-200 transition-all flex items-center justify-center gap-3 group"
                >
                  <Icon
                    v-if="isLoading"
                    name="i-lucide:loader-2"
                    class="animate-spin"
                  />
                  <span v-else>Отправить запрос</span>
                  <Icon
                    v-if="!isLoading"
                    name="i-lucide:send"
                    class="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <p class="text-[12px] text-gray-400 mt-4 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой
                  конфиденциальности.
                </p>
              </div>
            </form>
          </div>

          <!-- Сообщение об успехе -->
          <div
            v-else
            key="success"
            class="flex flex-col items-center justify-center py-10 text-center"
          >
            <div
              class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
            >
              <Icon name="i-lucide:check" size="40" />
            </div>
            <h4 class="text-2xl font-bold text-gray-900 mb-2">
              Заявка принята!
            </h4>
            <p class="text-gray-500">
              Менеджер уже изучает ваши пожелания и перезвонит вам совсем скоро.
            </p>
            <button
              @click="isSubmitted = false"
              class="mt-8 text-cyan-600 font-semibold hover:underline"
            >
              Отправить еще раз
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
