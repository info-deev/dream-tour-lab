import { mockTours } from '../../../mock/tours';
import type { Tour } from '../../../../app/types';

/**
 * GET /api/tours/slug/:slug — тур по slug.
 */
export default defineEventHandler(async (event): Promise<Tour> => {
  const slug = getRouterParam(event, 'slug');
  const tour = mockTours.find((t) => t.slug === slug);

  if (!tour) {
    throw createError({ statusCode: 404, statusMessage: 'Tour not found', message: `Тур со slug ${slug} не найден` });
  }
  return tour;
});
