<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["close"]);

const form = ref({
  departure: "Москва",
  country: "Турция",
  dates: "20.12.2026-25.12.2026",
  nights: "6-14",
  adults: 2,
  children: 1,
  hotelClass: ["4*", "5*"],
  name: "",
  contactMethod: "Телефон",
  phone: "",
  agreement: false,
});

const cities = ref([
  { name: "Абакан", code: "Абакан", popular: false },
  { name: "Архангельск", code: "Архангельск", popular: false },
  { name: "Астрахань", code: "Астрахань", popular: false },
  { name: "Барнаул", code: "Барнаул", popular: false },
  { name: "Благовещенск", code: "Благовещенск", popular: false },
  { name: "Братск", code: "Братск", popular: false },
  { name: "Владивосток", code: "Владивосток", popular: false },
  { name: "Владикавказ", code: "Владикавказ", popular: false },
  { name: "Волгоград", code: "Волгоград", popular: false },
  { name: "Геленджик", code: "Геленджик", popular: false },
  { name: "Горно-Алтайск", code: "Горно-Алтайск", popular: false },
  { name: "Грозный", code: "Грозный", popular: false },
  { name: "Екатеринбург", code: "Екатеринбург", popular: false },
  { name: "Иваново", code: "Иваново", popular: false },
  { name: "Ижевск", code: "Ижевск", popular: false },
  { name: "Иркутск", code: "Иркутск", popular: false },
  { name: "Казань", code: "Казань", popular: false },
  { name: "Калининград", code: "Калининград", popular: false },
  { name: "Калуга", code: "Калуга", popular: false },
  { name: "Кемерово", code: "Кемерово", popular: false },
  { name: "Киров", code: "Киров", popular: false },
  { name: "Краснодар", code: "Краснодар", popular: false },
  { name: "Красноярск", code: "Красноярск", popular: false },
  { name: "Курган", code: "Курган", popular: false },
  { name: "Магнитогорск", code: "Магнитогорск", popular: false },
  { name: "Махачкала", code: "Махачкала", popular: false },
  { name: "Мин.Воды", code: "Мин.Воды", popular: false },
  { name: "Москва", code: "Москва", popular: false },
  { name: "Мурманск", code: "Мурманск", popular: false },
  { name: "Н.Новгород", code: "Н.Новгород", popular: false },
  { name: "Наб.Челны", code: "Наб.Челны", popular: false },
  { name: "Нальчик", code: "Нальчик", popular: false },
  { name: "Нижневартовск", code: "Нижневартовск", popular: false },
  { name: "Нижнекамск", code: "Нижнекамск", popular: false },
  { name: "Новокузнецк", code: "Новокузнецк", popular: false },
  { name: "Новосибирск", code: "Новосибирск", popular: false },
  { name: "Новый Уренгой", code: "Новый Уренгой", popular: false },
  { name: "Ноябрьск", code: "Ноябрьск", popular: false },
  { name: "Омск", code: "Омск", popular: false },
  { name: "Оренбург", code: "Оренбург", popular: false },
  { name: "Орск", code: "Орск", popular: false },
  { name: "П.Камчатский", code: "П.Камчатский", popular: false },
  { name: "Пенза", code: "Пенза", popular: false },
  { name: "Пермь", code: "Пермь", popular: false },
  { name: "Петрозаводск", code: "Петрозаводск", popular: false },
  { name: "Псков", code: "Псков", popular: false },
  { name: "С.Петербург", code: "С.Петербург", popular: false },
  { name: "Самара", code: "Самара", popular: false },
  { name: "Саранск", code: "Саранск", popular: false },
  { name: "Саратов", code: "Саратов", popular: false },
  { name: "Сочи", code: "Сочи", popular: false },
  { name: "Ставрополь", code: "Ставрополь", popular: false },
  { name: "Сургут", code: "Сургут", popular: false },
  { name: "Сыктывкар", code: "Сыктывкар", popular: false },
  { name: "Томск", code: "Томск", popular: false },
  { name: "Тюмень", code: "Тюмень", popular: false },
  { name: "Улан-Удэ", code: "Улан-Удэ", popular: false },
  { name: "Ульяновск", code: "Ульяновск", popular: false },
  { name: "Уфа", code: "Уфа", popular: false },
  { name: "Хабаровск", code: "Хабаровск", popular: false },
  { name: "Ханты-Мансийск", code: "Ханты-Мансийск", popular: false },
  { name: "Чебоксары", code: "Чебоксары", popular: false },
  { name: "Челябинск", code: "Челябинск", popular: false },
  { name: "Череповец", code: "Череповец", popular: false },
  { name: "Чита", code: "Чита", popular: false },
  { name: "Ю.Сахалинск", code: "Ю.Сахалинск", popular: false },
  { name: "Якутск", code: "Якутск", popular: false },
  { name: "Ярославль", code: "Ярославль", popular: false },
]);

const countries = ref([
  { name: "Турция", code: "Турция", popular: true },
  { name: "Египет", code: "Египет", popular: true },
  { name: "Таиланд", code: "Таиланд", popular: true },
  { name: "ОАЭ", code: "ОАЭ", popular: true },
  { name: "Россия", code: "Россия", popular: true },
  { name: "Китай", code: "Китай", popular: true },
  { name: "Абхазия", code: "Абхазия", popular: true },
  { name: "Вьетнам", code: "Вьетнам", popular: true },
  { name: "Армения", code: "Армения", popular: false },
  { name: "Бахрейн", code: "Бахрейн", popular: false },
  { name: "Венесуэла", code: "Венесуэла", popular: false },
  { name: "Индия", code: "Индия", popular: false },
  { name: "Индонезия", code: "Индонезия", popular: false },
  { name: "Иордания", code: "Иордания", popular: false },
  { name: "Катар", code: "Катар", popular: false },
  { name: "Куба", code: "Куба", popular: false },
  { name: "Маврикий", code: "Маврикий", popular: false },
  { name: "Мальдивы", code: "Мальдивы", popular: false },
  { name: "Оман", code: "Оман", popular: false },
  { name: "Сейшелы", code: "Сейшелы", popular: false },
  { name: "Танзания", code: "Танзания", popular: false },
  { name: "Тунис", code: "Тунис", popular: false },
  { name: "Черногория", code: "Черногория", popular: false },
  { name: "Шри-Ланка", code: "Шри-Ланка", popular: false },
]);

const communication = ["Телефон", "Telegram", "WhatsApp", "MAX"];

const errors = ref({});
const isLoading = ref(false);

const validateForm = () => {
  const newErrors = {};

  if (!form.value.name.trim() || form.value.name.trim().length < 2) {
    newErrors.name = "Введите ваше имя";
  }

  // Простая проверка телефона (минимум 10 цифр)
  const phoneDigits = form.value.phone.replace(/\D/g, "");
  if (!phoneDigits || phoneDigits.length < 10) {
    newErrors.phone = "Введите корректный номер";
  }

  if (!form.value.departure.trim()) {
    newErrors.departure = "Выберите место вылета";
  }

  if (!form.value.country.trim()) {
    newErrors.country = "Выберите страну";
  }

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

const submitOrder = async () => {
  if (!validateForm()) return;

  isLoading.value = true;
  try {
    // Имитация API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Форма отправлена:", form.value);
    emit("close");

    // Тут можно вызвать уведомление об успехе
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

const enableScroll = () => {
  document.body.style.overflow = "auto";
  document.body.style.paddingRight = "0px";
};
</script>

<template>
  <Transition name="fade" @after-leave="enableScroll">
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-full h-full z-[100] flex items-center justify-center md:p-4"
    >
      <!-- Оверлей -->
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="emit('close')"
      ></div>

      <!-- Контент модалки -->
      <div
        class="relative bg-white w-full max-w-2xl max-h-full md:max-h-[90vh] overflow-y-auto rounded-none md:rounded-3xl shadow-2xl border border-gray-100"
      >
        <!-- Кнопка закрытия -->
        <button
          @click="emit('close')"
          class="absolute top-3 md:top-6 right-3 md:right-6 text-gray-400 hover:text-cyan-600 transition-colors"
        >
          <Icon name="i-lucide:x" size="28" />
        </button>

        <div class="p-6 md:p-12">
          <div class="mb-8">
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Заявка на подбор тура
            </h2>
            <p class="text-gray-500 text-sm">
              Заполните детали, и мы подготовим идеальное предложение
            </p>
          </div>

          <form
            @submit.prevent="submitOrder"
            class="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <!-- Вылет и Страна -->
            <div class="space-y-2">
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
                >Вылет из</label
              >
              <Select
                v-model="form.departure"
                :items="cities"
                :has-error="errors.departure"
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
                >Страна</label
              >
              <Select
                v-model="form.country"
                :items="countries"
                :has-error="errors.country"
              />
            </div>

            <!-- Даты и Ночи -->
            <div class="space-y-2">
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
                >Даты вылета</label
              >
              <div class="relative">
                <input
                  v-model="form.dates"
                  type="text"
                  class="w-full bg-gray-50 border-none rounded-2xl p-4 pl-12 text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
                />
                <Icon
                  name="i-lucide:calendar"
                  class="absolute left-4 top-4 text-gray-400"
                />
              </div>
            </div>
            <div class="space-y-2">
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
                >Количество ночей</label
              >
              <input
                v-model="form.nights"
                type="text"
                class="w-full bg-gray-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>

            <!-- Туристы -->
            <div
              class="md:col-span-2 grid grid-cols-2 gap-0 bg-cyan-50/50 p-6 rounded-3xl"
            >
              <div class="space-y-2 pr-4">
                <label class="text-[10px] font-bold uppercase text-gray-500"
                  >Взрослые</label
                >
                <div class="flex items-center gap-4">
                  <button
                    type="button"
                    @click="form.adults--"
                    class="w-8 h-8 rounded-full bg-white shadow-sm"
                  >
                    -
                  </button>
                  <span class="font-bold">{{ form.adults }}</span>
                  <button
                    type="button"
                    @click="form.adults++"
                    class="w-8 h-8 rounded-full bg-white shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="space-y-2 border-l border-cyan-100 pl-4">
                <label class="text-[10px] font-bold uppercase text-gray-500"
                  >Дети</label
                >
                <div class="flex items-center gap-4">
                  <button
                    type="button"
                    @click="form.children--"
                    class="w-8 h-8 rounded-full bg-white shadow-sm"
                  >
                    -
                  </button>
                  <span class="font-bold">{{ form.children }}</span>
                  <button
                    type="button"
                    @click="form.children++"
                    class="w-8 h-8 rounded-full bg-white shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <!-- Класс отеля -->
            <div class="md:col-span-2 space-y-3">
              <label
                class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
                >Класс отеля</label
              >
              <div class="flex flex-wrap gap-3">
                <label
                  v-for="star in ['1*', '2*', '3*', '4*', '5*']"
                  :key="star"
                  class="cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :value="star"
                    v-model="form.hotelClass"
                    class="hidden peer"
                  />
                  <span
                    class="px-5 py-2 rounded-xl bg-gray-50 peer-checked:bg-cyan-600 peer-checked:text-white transition-all text-sm font-medium"
                  >
                    {{ star }}
                  </span>
                </label>
              </div>
            </div>

            <!-- Контакты -->
            <div class="md:col-span-2 space-y-4 pt-4 border-t border-gray-100">
              <div class="space-y-2">
                <label
                  class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
                  >Ваше имя</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Руслан"
                  :class="[
                    'w-full bg-gray-50 border rounded-2xl p-4 text-sm outline-none transition-all',
                    errors.name
                      ? 'border-red-400 focus:ring-red-100'
                      : 'border-transparent focus:ring-2 focus:ring-cyan-500',
                  ]"
                />
                <p
                  v-if="errors.name"
                  class="text-[10px] text-red-500 font-bold ml-2"
                >
                  {{ errors.name }}
                </p>
              </div>

              <div class="space-y-3">
                <label
                  class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
                  >Способ связи</label
                >
                <div class="flex gap-2">
                  <button
                    v-for="m in communication"
                    :key="m"
                    type="button"
                    @click="form.contactMethod = m"
                    :class="
                      form.contactMethod === m
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-50 text-gray-500'
                    "
                    class="flex-1 py-3 rounded-xl text-xs font-bold capitalize transition-all"
                  >
                    {{ m }}
                  </button>
                </div>
                <div class="space-y-3">
                  <label
                    class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
                    >Ваш телефон</label
                  >
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+7 (000) 000-00-00"
                    :class="[
                      'w-full bg-gray-50 border rounded-2xl p-4 text-sm outline-none transition-all',
                      errors.phone
                        ? 'border-red-400 focus:ring-red-100'
                        : 'border-transparent focus:ring-2 focus:ring-cyan-500',
                    ]"
                  />
                  <p
                    v-if="errors.phone"
                    class="text-[10px] text-red-500 font-bold ml-2"
                  >
                    {{ errors.phone }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Согласия -->
            <div class="md:col-span-2 space-y-3">
              <label class="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  v-model="form.agreement"
                  class="mt-1 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                />
                <span class="text-[12px] text-gray-400 leading-tight">
                  Я ознакомлен с политикой конфиденциальности и выражаю согласие
                  на обработку персональных данных. Отправляя запрос, я
                  соглашаюсь с условиями Оферты.
                </span>
              </label>
            </div>

            <button
              :disabled="isLoading || !form.agreement"
              class="md:col-span-2 w-full bg-cyan-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-cyan-700 hover:shadow-cyan-100 disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
            >
              <!-- Иконка загрузки (если есть состояние isLoading) -->
              <Icon
                v-if="isLoading"
                name="i-lucide:loader-2"
                class="animate-spin"
                size="20"
              />

              <span>{{ isLoading ? "Отправка..." : "Отправить запрос" }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
