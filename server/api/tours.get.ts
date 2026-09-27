import { mockTours } from '../mock/tours';
import type { TourListResponse } from '../../app/types';

/**
 * GET /api/tours — список туров с фильтрацией, сортировкой и пагинацией.
 *
 * Query-параметры:
 * - country, city — фильтр по стране/городу;
 * - minPrice, maxPrice — диапазон цен;
 * - search — поиск по названию и описанию;
 * - sortBy (price|rating|duration), sortDir (asc|desc);
 * - page, limit.
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  let filtered: typeof mockTours = [...mockTours];

  // Фильтрация по стране/городу
  if (typeof query.country === 'string' && query.country) {
    filtered = filtered.filter((t) => t.country === query.country);
  }
  if (typeof query.city === 'string' && query.city) {
    filtered = filtered.filter((t) => t.location === query.city);
  }

  // Фильтрация по цене
  const minPrice = Number(query.minPrice);
  const maxPrice = Number(query.maxPrice);
  if (!Number.isNaN(minPrice)) {
    filtered = filtered.filter((t) => t.price >= minPrice);
  }
  if (!Number.isNaN(maxPrice)) {
    filtered = filtered.filter((t) => t.price <= maxPrice);
  }

  // Поиск по названию и описанию
  if (typeof query.search === 'string' && query.search.trim()) {
    const q = query.search.toLowerCase();
    filtered = filtered.filter(
      (t) =>
        t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
    );
  }

  // Сортировка
  const sortBy = (query.sortBy as 'price' | 'rating' | 'duration' | undefined) ?? 'rating';
  const sortDir = query.sortDir === 'asc' ? 1 : -1;
  filtered.sort((a, b) => {
    const av = a[sortBy];
    const bv = b[sortBy];
    return (av < bv ? -1 : av > bv ? 1 : 0) * sortDir;
  });

  // Пагинация
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(query.limit) || 10));
  const startIndex = (page - 1) * limit;
  const paginatedTours = filtered.slice(startIndex, startIndex + limit);

  const response: TourListResponse = {
    data: paginatedTours,
    meta: {
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit),
    },
  };
  return response;
});
