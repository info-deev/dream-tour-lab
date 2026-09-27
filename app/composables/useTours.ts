import type { Tour, TourFilters, TourListResponse } from '~/types';
import { useApi } from './useApi';

/**
 * Бизнес-логика работы с турами.
 * Все методы используют useApi() и типизированы через типы из ~/types.
 */
export const useTours = () => {
  const api = useApi();

  /**
   * Получает список туров с фильтрацией, пагинацией и сортировкой.
   *
   * @param filters Параметры фильтрации (страна, цена, поиск и т.д.).
   * @returns Список туров с мета-информацией о пагинации.
   */
  const fetchTours = async (filters?: TourFilters): Promise<TourListResponse> => {
    const params: Record<string, string | number | undefined> = {
      country: filters?.country,
      city: filters?.city,
      minPrice: filters?.minPrice,
      maxPrice: filters?.maxPrice,
      search: filters?.search,
      sortBy: filters?.sortBy,
      sortDir: filters?.sortDir,
    };
    return api.get<TourListResponse>('/tours', { params });
  };

  /**
   * Получает популярные (топ-N) туры.
   *
   * @param limit Количество туров, по умолчанию 3.
   * @returns Массив популярных туров.
   */
  const fetchPopularTours = async (limit = 3): Promise<Tour[]> => {
    return api.get<Tour[]>('/tours/popular', { params: { limit } });
  };

  /**
   * Получает тур по идентификатору.
   *
   * @param id Идентификатор тура.
   * @returns Данные тура.
   */
  const fetchTourById = async (id: string | number): Promise<Tour> => {
    return api.get<Tour>(`/tours/${id}`);
  };

  /**
   * Получает тур по slug.
   *
   * @param slug Уникальный slug тура.
   * @returns Данные тура.
   */
  const fetchTourBySlug = async (slug: string): Promise<Tour> => {
    return api.get<Tour>(`/tours/slug/${slug}`);
  };

  /**
   * Ищет туры по строке запроса.
   *
   * @param query Строка поиска.
   * @returns Массив найденных туров.
   */
  const searchTours = async (query: string): Promise<Tour[]> => {
    const response = await api.get<TourListResponse>('/tours', { params: { search: query } });
    return response.data;
  };

  return { fetchTours, fetchPopularTours, fetchTourById, fetchTourBySlug, searchTours };
};
