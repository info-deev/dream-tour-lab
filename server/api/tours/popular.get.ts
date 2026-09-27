import { mockTours } from '../../mock/tours';
import type { Tour } from '../../../app/types';

/**
 * GET /api/tours/popular — топ-N популярных туров (по рейтингу).
 * Query-параметр: limit (по умолчанию 3, максимум 10).
 */
export default defineEventHandler(async (event): Promise<Tour[]> => {
  const query = getQuery(event);
  const limit = Math.min(10, Math.max(1, Number(query.limit) || 3));

  return [...mockTours]
    .sort((a, b) => b.reviewsCount * b.rating - a.reviewsCount * a.rating)
    .slice(0, limit);
});
