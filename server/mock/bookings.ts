import type { Booking } from '../../app/types';

/**
 * In-memory хранилище бронирований.
 * Обнуляется при перезапуске dev-сервера (мок, без БД).
 */
const bookings: Booking[] = [];
let bookingCounter = 1;

/** Возвращает все созданные в текущей сессии бронирования. */
export function listBookings(): Booking[] {
  return bookings;
}

/** Возвращает бронирование по id или `undefined`. */
export function findBooking(id: string | number): Booking | undefined {
  return bookings.find((b) => String(b.id) === String(id));
}

/** Создаёт новое бронирование с автоинкрементным id и статусом pending. */
export function createBooking(data: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>): Booking {
  const now = new Date().toISOString();
  const booking: Booking = {
    ...data,
    id: bookingCounter++,
    createdAt: now,
    updatedAt: now,
  };
  bookings.push(booking);
  return booking;
}

/** Отменяет бронирование по id. Возвращает обновлённое или `undefined`. */
export function cancelBooking(id: string | number): Booking | undefined {
  const booking = findBooking(id);
  if (!booking) return undefined;
  booking.status = 'cancelled';
  booking.updatedAt = new Date().toISOString();
  return booking;
}
