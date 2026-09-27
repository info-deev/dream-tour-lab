import { createBooking } from '../mock/bookings';
import type { Booking, BookingRequest } from '../../app/types';

/**
 * POST /api/bookings — создание бронирования.
 * Валидирует обязательные поля и возвращает созданное бронирование.
 */
export default defineEventHandler(async (event): Promise<Booking> => {
  const body = (await readBody(event)) as Partial<BookingRequest>;

  // Базовая валидация обязательных полей
  const errors: string[] = [];
  if (!body?.tourId) errors.push('tourId обязателен');
  if (!body?.contact?.name?.trim()) errors.push('contact.name обязателен');
  if (!body?.contact?.phone?.trim()) errors.push('contact.phone обязателен');

  if (errors.length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation error',
      message: errors.join('; '),
    });
  }

  return createBooking({
    tourId: body.tourId as number | string,
    contact: {
      name: body.contact!.name.trim(),
      phone: body.contact!.phone.trim(),
      email: body.contact!.email?.trim() || undefined,
    },
    status: 'pending',
    adults: body.adults ?? 2,
    children: body.children ?? 0,
    comment: body.comment?.trim() || undefined,
  });
});