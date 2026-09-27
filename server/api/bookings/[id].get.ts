import { findBooking } from '../../mock/bookings';
import type { Booking } from '../../../app/types';

/**
 * GET /api/bookings/:id — бронирование по идентификатору.
 */
export default defineEventHandler(async (event): Promise<Booking> => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Bad request', message: 'Не указан id бронирования' });
  }
  const booking = findBooking(id);

  if (!booking) {
    throw createError({ statusCode: 404, statusMessage: 'Booking not found', message: `Бронирование ${id} не найдено` });
  }
  return booking;
});
