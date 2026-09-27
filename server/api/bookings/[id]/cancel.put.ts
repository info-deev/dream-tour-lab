import { cancelBooking } from '../../../mock/bookings';
import type { Booking } from '../../../../app/types';

/**
 * PUT /api/bookings/:id/cancel — отмена бронирования.
 */
export default defineEventHandler(async (event): Promise<Booking> => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Bad request', message: 'Не указан id бронирования' });
  }
  const booking = cancelBooking(id);

  if (!booking) {
    throw createError({ statusCode: 404, statusMessage: 'Booking not found', message: `Бронирование ${id} не найдено` });
  }
  return booking;
});
