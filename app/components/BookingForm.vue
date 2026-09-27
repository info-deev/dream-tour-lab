<script setup lang="ts">
import { reactive, ref } from "vue";
import { useBooking } from "~/composables/useBooking";
import { validateName, validatePhone } from "~/utils/validators";
import type { BookingRequest } from "~/types";

/**
 * Опциональный id тура. Если не задан — это заявка на консультацию
 * (подбор тура), а не бронирование конкретного тура.
 */
const props = defineProps<{ tourId?: number | string }>();

/**
 * Значение tourId для заявки без привязки к конкретному туру.
 * Явный маркер «консультация», чтобы не выдумывать несуществующий тур.
 */
const CONSULTATION_TOUR_ID = "consultation";

/** Человекочитаемые подписи типов отдыха (для комментария к заявке). */
const TOUR_TYPE_LABELS: Record<string, string> = {
  beach: "Пляжный отдых",
  excursion: "Экскурсионный тур",
  mountains: "Активный отдых (горы)",
  cruise: "Круизы",
};

type TourType = keyof typeof TOUR_TYPE_LABELS;

const form = reactive({
  name: "",
  phone: "",
  tourType: "beach" as TourType,
});

/** Ошибки клиентской валидации полей (undefined — поле корректно). */
const errors = reactive<{ name?: string; phone?: string }>({});
const isSubmitted = ref(false);
const isLoading = ref(false);
const serverError = ref<string | null>(null);

const { createBooking } = useBooking();

/**
 * Клиентская валидация полей формы.
 * @returns `true`, если все обязательные поля корректны.
 */
function validate(): boolean {
  errors.name = undefined;
  errors.phone = undefined;
  let ok = true;
  if (!validateName(form.name)) {
    errors.name = "Укажите имя (минимум 2 символа)";
    ok = false;
  }
  if (!validatePhone(form.phone)) {
    errors.phone = "Укажите корректный номер телефона";
    ok = false;
  }
  return ok;
}

/** Отправка формы: валидация и создание заявки через useBooking. */
async function submitForm() {
  serverError.value = null;
  if (!validate()) return;

  const payload: BookingRequest = {
    tourId: props.tourId ?? CONSULTATION_TOUR_ID,
    contact: {
      name: form.name.trim(),
      phone: form.phone.trim(),
    },
    comment: `Тип отдыха: ${TOUR_TYPE_LABELS[form.tourType]}`,
  };

  isLoading.value = true;
  try {
    await createBooking(payload);
    isSubmitted.value = true;
  } catch (e) {
    serverError.value =
      e instanceof Error ? e.message : "Не удалось отправить заявку";
  } finally {
    isLoading.value = false;
  }
}

/** Сброс формы после успешной отправки. */
function resetForm() {
  isSubmitted.value = false;
  form.name = "";
  form.phone = "";
  form.tourType = "beach";
  serverError.value = null;
}
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
                  :class="[
                    'bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 outline-none transition-all',
                    errors.name ? 'focus:ring-red-400' : 'focus:ring-cyan-500',
                  ]"
                />
                <p
                  v-if="errors.name"
                  class="text-[11px] text-red-500 font-bold"
                >
                  {{ errors.name }}
                </p>
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
                  :class="[
                    'bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 outline-none transition-all',
                    errors.phone ? 'focus:ring-red-400' : 'focus:ring-cyan-500',
                  ]"
                />
                <p
                  v-if="errors.phone"
                  class="text-[11px] text-red-500 font-bold"
                >
                  {{ errors.phone }}
                </p>
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
                <!-- Ошибка сервера при неудачной отправке -->
                <p
                  v-if="serverError"
                  class="mb-3 bg-red-50 border border-red-100 text-red-600 rounded-xl px-4 py-3 text-sm"
                >
                  {{ serverError }}
                </p>
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
              @click="resetForm"
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
