import { defineStore } from 'pinia';
import type { Tour } from '~/types';

/** Ключ localStorage, под которым хранится избранное. */
const STORAGE_KEY = 'dream-tour:favorites';

/**
 * Содержимое localStorage: id туров + сами туры,
 * чтобы их можно было показать без повторного запроса к API.
 */
interface FavoritesStorage {
  favoriteIds: Array<number | string>;
  tours: Tour[];
}

/**
 * Pinia store для управления избранными турами.
 *
 * - state хранит id и полные данные туров, добавленных в избранное;
 * - все изменения автоматически сохраняются в localStorage;
 * - `loadFromStorage()` восстанавливает состояние при монтировании
 *   (на клиенте) — это нужно из-за SSR: store создаётся на сервере,
 *   а данные пользователя живут только в браузере.
 */
export const useFavoritesStore = defineStore('favorites', {
  state: (): { favoriteIds: Array<number | string>; tours: Tour[] } => ({
    /** Идентификаторы туров, добавленных в избранное */
    favoriteIds: [],
    /** Полные данные избранных туров (для отображения без запроса к API) */
    tours: [],
  }),

  getters: {
    /**
     * Проверяет, находится ли тур в избранном.
     * @param id Идентификатор тура.
     * @returns `true`, если тур добавлен в избранное.
     */
    isFavorite: (state) => (id: number | string): boolean =>
      state.favoriteIds.some((favoriteId) => String(favoriteId) === String(id)),

    /** Количество туров в избранном. */
    favoritesCount: (state): number => state.favoriteIds.length,

    /** Список избранных туров (данные для отображения). */
    favoriteTours: (state): Tour[] => state.tours,
  },

  actions: {
    /**
     * Добавляет тур в избранное и сохраняет состояние.
     * Повторное добавление игнорируется (id не дублируется).
     *
     * @param tour Тур, который нужно добавить в избранное.
     */
    addToFavorites(tour: Tour) {
      if (this.isFavorite(tour.id)) return;
      this.favoriteIds.push(tour.id);
      this.tours.push(tour);
      this.persist();
    },

    /**
     * Удаляет тур из избранного по id.
     *
     * @param id Идентификатор тура.
     */
    removeFromFavorites(id: number | string) {
      const idKey = String(id);
      this.favoriteIds = this.favoriteIds.filter(
        (favoriteId) => String(favoriteId) !== idKey,
      );
      this.tours = this.tours.filter((tour) => String(tour.id) !== idKey);
      this.persist();
    },

    /**
     * Переключает состояние «в избранном» для тура:
     * если тур уже в избранном — удаляет, иначе добавляет.
     *
     * @param tour Тур, для которого нужно переключить состояние.
     */
    toggleFavorite(tour: Tour) {
      if (this.isFavorite(tour.id)) {
        this.removeFromFavorites(tour.id);
      } else {
        this.addToFavorites(tour);
      }
    },

    /**
     * Восстанавливает избранное из localStorage.
     * Вызывается на клиенте при инициализации (SSR-безопасно).
     */
    loadFromStorage() {
      if (!import.meta.client) return;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        const parsed = JSON.parse(raw) as Partial<FavoritesStorage>;
        // Валидация: принимаем только ожидаемые структуры, иначе сбрасываем
        if (
          Array.isArray(parsed?.favoriteIds) &&
          parsed.favoriteIds.every((id) => typeof id === 'string' || typeof id === 'number')
        ) {
          this.favoriteIds = parsed.favoriteIds;
        }
        if (Array.isArray(parsed?.tours)) {
          this.tours = parsed.tours;
        }
      } catch {
        // Повреждённые данные — сбрасываем состояние, чтобы не падать молча
        this.favoriteIds = [];
        this.tours = [];
      }
    },

    /** Сохраняет текущее состояние в localStorage (только на клиенте). */
    persist() {
      if (!import.meta.client) return;
      const payload: FavoritesStorage = {
        favoriteIds: this.favoriteIds,
        tours: this.tours,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    },
  },
});