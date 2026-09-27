import { mockTours } from '../../mock/tours';
import type { Tour } from '../../../app/types';

/**
 * GET /api/tours/:id — тур по идентификатору.
 */
export default defineEventHandler(async (event): Promise<Tour> => {
  const id = getRouterParam(event, 'id');
  const tour = mockTours.find((t) => String(t.id) === id);

  if (!tour) {
    throw createError({ statusCode: 404, statusMessage: 'Tour not found', message: `Тур с id ${id} не найден` });
  }
  return tour;
});
