import { listBookings } from '../mock/bookings';
import type { Booking } from '../../app/types';

/**
 * GET /api/bookings — список бронирований текущей сессии.
 */
export default defineEventHandler(async (): Promise<Booking[]> => {
  return listBookings();
});
