<template>
  <div
    ref="container"
    class="carousel-3d-container"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    @mousedown="handleDragStart"
    @mousemove="handleDragMove"
    @mouseup="handleDragEnd"
    @mouseleave.self="handleDragEnd"
    @touchstart="handleDragStart"
    @touchmove="handleDragMove"
    @touchend="handleDragEnd"
  >
    <div class="carousel-3d-slider">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="carousel-3d-slide"
        :style="getSlideStyle(index)"
        @click="handleSlideClick(index)"
      >
        <!-- Слот для кастомизации контента внутри слайда -->
        <slot :item="item" :index="index" :currentIndex="currentIndex">
          <img :src="item.src" :alt="item.alt || ''" :draggable="false" />
        </slot>
      </div>
    </div>

    <!-- Кнопки управления -->
    <div v-if="showControls" class="controls">
      <button class="btn-prev" @click="prev" aria-label="Previous">
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button class="btn-next" @click="next" aria-label="Next">
        <svg viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>

    <!-- Индикаторы (Dots) -->
    <div v-if="showDots" class="dots">
      <span
        v-for="(_, i) in items"
        :key="i"
        :class="{ active: i === currentIndex }"
        @click="currentIndex = i"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from "vue";

const props = defineProps({
  items: { type: Array, required: true },
  width: { type: String, default: "300px" },
  height: { type: String, default: "400px" },
  visible: {
    type: Number,
    default: 5,
    validator: (v) => v % 2 !== 0, // Должно быть нечетным для симметрии
  },
  autoplay: { type: Boolean, default: true },
  interval: { type: Number, default: 3000 },
  showDots: { type: Boolean, default: true },
  showControls: { type: Boolean, default: true },
});

const container = ref(null);
const currentIndex = ref(0);
const isDragging = ref(false);
let startX = 0;
let startY = 0;
let autoplayTimer = null;

// --- Динамический расчет смещения ---
const stepOffset = computed(() => {
  const numericWidth = parseInt(props.width) || 300;
  return numericWidth * 0.6; // Оптимальный шаг для 3D эффекта
});

// --- Стили для каждого слайда ---
const getSlideStyle = (index) => {
  const len = props.items.length;
  if (len === 0) return {};

  let diff = index - currentIndex.value;
  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;

  const absDiff = Math.abs(diff);

  // Вычисляем, насколько далеко слайд от центра
  const maxVisible = Math.floor(props.visible / 2);
  const isVisible = absDiff <= maxVisible;

  // Рассчитываем прозрачность более мягко
  // Слайды, которые ровно на границе видимости, начнут исчезать заранее
  let opacity = 0;
  if (absDiff <= maxVisible) {
    opacity = 1;
  } else if (absDiff <= maxVisible + 1) {
    // Плавный переход для слайда, который вот-вот исчезнет
    opacity = 0;
  }

  return {
    transform: `translateX(${diff * stepOffset.value}px) scale(${1 - absDiff * 0.15}) rotateY(${diff * -25}deg)`,
    zIndex: 100 - absDiff,
    opacity: opacity,
    // Убираем visibility: hidden, так как оно переключается мгновенно и "режет" анимацию
    // Вместо этого используем pointer-events
    pointerEvents: isVisible ? "auto" : "none",
    transition:
      "transform 0.6s cubic-bezier(0.25, 1, 0.35, 1), opacity 0.6s, z-index 0.6s",
  };
};

// --- Навигация ---
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};
const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.items.length) % props.items.length;
};

const handleSlideClick = (index) => {
  if (currentIndex.value !== index) {
    currentIndex.value = index;
  }
};

// --- Логика Drag & Swipe ---
const handleDragStart = (e) => {
  isDragging.value = true;
  const touch = e.type.includes("touch") ? e.touches[0] : e;
  startX = touch.clientX;
  startY = touch.clientY; // Запоминаем Y
  stopAutoplay();
};

const handleDragMove = (e) => {
  if (!isDragging.value) return;

  if (e.type === "touchmove") {
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - startX);
    const deltaY = Math.abs(touch.clientY - startY);

    // Если движение больше горизонтальное, чем вертикальное — блокируем скролл страницы
    // и работаем со слайдером. Если наоборот — ничего не делаем, даем скроллить страницу.
    if (deltaX > deltaY) {
      if (e.cancelable) e.preventDefault();
    } else {
      // Если это вертикальный скролл, отменяем dragging, чтобы слайды не прыгали
      isDragging.value = false;
    }
  }
};

const handleDragEnd = (e) => {
  if (!isDragging.value) return;
  const endX = e.type.includes("touch")
    ? e.changedTouches[0].clientX
    : e.clientX;
  const delta = startX - endX;

  // Порог срабатывания свайпа - 50 пикселей
  if (Math.abs(delta) > 50) {
    delta > 0 ? next() : prev();
  }

  isDragging.value = false;
  startAutoplay();
};

// --- Автоплей ---
const startAutoplay = () => {
  if (props.autoplay && !autoplayTimer) {
    autoplayTimer = setInterval(next, props.interval);
  }
};
const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

// Реакция на изменение количества элементов
watch(
  () => props.items.length,
  (newLen) => {
    if (currentIndex.value >= newLen) currentIndex.value = 0;
  },
);

onMounted(startAutoplay);
onUnmounted(stopAutoplay);
</script>

<style scoped>
.carousel-3d-container {
  position: relative;
  width: 100%;
  perspective: 1200px;
  overflow: hidden;
  padding: 40px 0;
  touch-action: pan-y;
  user-select: none; /* Запрет выделения текста при драге */
}

.carousel-3d-slider {
  position: relative;
  /* Высота всего блока из пропса */
  height: v-bind("props.height");
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}

.carousel-3d-slide {
  position: absolute;
  /* Размеры карточки из пропсов */
  width: v-bind("props.width");
  height: v-bind("props.height");

  max-width: 90%;

  transition:
    transform 0.6s cubic-bezier(0.25, 1, 0.35, 1),
    opacity 0.6s;
  will-change: transform, opacity;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  will-change: transform, opacity;
}

.carousel-3d-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none; /* Чтобы картинка не мешала событию mousedown */
}

.dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dots span.active {
  background: #0891b2;
  border-color: #0891b2;
  transform: scale(1.1);
}

/* Контейнер для кнопок */
.controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none; /* Чтобы кнопки не перекрывали клики по слайдам вне самих кнопок */
  z-index: 200;
}

/* Базовое состояние кнопки */
.controls button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent; /* Убираем синюю рамку при тапе на Android/iOS */
}

/* Эффект при нажатии (работает и на мышке, и на таче) */
.controls button:active {
  transform: scale(0.9);
  background: #f0f0f0;
}

/* Ховер-эффект ТОЛЬКО для устройств с мышкой */
@media (hover: hover) {
  .controls button:hover {
    background: #0891b2;
    transform: scale(1.1);
  }

  .controls button:hover svg {
    fill: white;
  }
}

.controls svg {
  width: 30px;
  height: 30px;
  fill: #333;
  transition: fill 0.3s;
}

/* Адаптив для мобилок: можно скрыть стрелки, если места мало */
@media (max-width: 600px) {
  .controls {
    display: none;
  }
  .dots {
    gap: 8px;
  }
}
</style>
