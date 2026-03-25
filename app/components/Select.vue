<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  // Список элементов для выбора
  items: {
    type: Array,
    default: () => [
      { name: "Турция", code: "TR", popular: true },
      { name: "ОАЭ", code: "AE", popular: true },
      { name: "Египет", code: "EG", popular: true },
      { name: "Таиланд", code: "TH", popular: true },
      { name: "Мальдивы", code: "MV", popular: true },
      { name: "Шри-Ланка", code: "LK", popular: false },
      { name: "Грузия", code: "GE", popular: false },
    ],
  },
  label: {
    type: String,
    default: "Страна",
  },
  placeholder: {
    type: String,
    default: "Начните вводить...",
  },
  hasError: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

const isDropdownOpen = ref(false);
const rootRef = ref(null);
const searchQuery = ref(props.modelValue);

// Следим за внешними изменениями v-model (например, очистка формы)
watch(
  () => props.modelValue,
  (newVal) => {
    searchQuery.value = newVal;
  },
);

// Фильтрация списка
const filteredItems = computed(() => {
  if (!searchQuery.value) return props.items;
  return props.items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

// Выбор элемента
const selectItem = (item) => {
  searchQuery.value = item.name;
  emit("update:modelValue", item.name);
  isDropdownOpen.value = false;
};

// Ручной ввод
const handleInput = (e) => {
  const val = e.target.value;
  searchQuery.value = val;
  emit("update:modelValue", val);
  isDropdownOpen.value = true;
};

// Закрытие при клике вне
const handleClickOutside = (event) => {
  if (rootRef.value && !rootRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="space-y-2 relative" ref="rootRef">
    <!-- Динамический лейбл -->
    <!-- <label
      class="text-[10px] font-bold uppercase tracking-widest text-cyan-600"
    >
      {{ label }}
    </label> -->

    <div class="relative">
      <input
        :value="searchQuery"
        @input="handleInput"
        @focus="isDropdownOpen = true"
        type="text"
        :placeholder="placeholder"
        class=""
        :class="[
          'w-full bg-gray-50 border rounded-2xl p-4 text-sm  outline-none transition-all',
          !!props.hasError
            ? 'border-red-400'
            : 'border-transparent focus:ring-2 focus:ring-cyan-500',
        ]"
      />

      <!-- Иконка стрелочки -->
      <div
        class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-cyan-600 transition-colors px-1"
        @click="isDropdownOpen = !isDropdownOpen"
      >
        <Icon
          name="i-lucide:chevron-down"
          class="transition-transform duration-300"
          :class="{ 'rotate-180': isDropdownOpen }"
          size="18"
        />
      </div>
    </div>

    <!-- Выпадающий список -->
    <Transition name="fade-pop">
      <div
        v-if="isDropdownOpen"
        class="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-60 overflow-y-auto p-2 scrollbar-custom"
      >
        <div
          v-for="item in filteredItems"
          :key="item.code || item.name"
          @click="selectItem(item)"
          class="flex items-center justify-between p-3 hover:bg-cyan-50 rounded-xl cursor-pointer group transition-colors"
        >
          <span
            class="text-sm font-medium text-gray-700 group-hover:text-cyan-700"
          >
            {{ item.name }}
          </span>
          <span
            v-if="item.popular"
            class="text-[9px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter"
          >
            Хит
          </span>
        </div>

        <!-- Пустой результат -->
        <div v-if="filteredItems.length === 0" class="p-4 text-center">
          <p class="text-xs text-gray-400">Ничего не найдено</p>
        </div>
      </div>
    </Transition>

    <p v-if="!!props.hasError" class="text-[10px] text-red-500 font-bold ml-2">
      {{ props.hasError }}
    </p>
  </div>
</template>

<style scoped>
.fade-pop-enter-active,
.fade-pop-leave-active {
  transition: all 0.2s ease-out;
}

.fade-pop-enter-from,
.fade-pop-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Стилизация скроллбара */
.scrollbar-custom::-webkit-scrollbar {
  width: 4px;
}
.scrollbar-custom::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-custom::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}
.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background: #0891b2;
}
</style>
