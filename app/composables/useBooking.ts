import type { Booking, BookingRequest } from '~/types';
import { useApi } from './useApi';

/**
 * Бизнес-логика работы с бронированиями.
 * Все методы используют useApi() и типизированы через типы из ~/types.
 */
export const useBooking = () => {
  const api = useApi();

  /**
   * Создаёт новое бронирование.
   *
   * @param booking Данные формы бронирования.
   * @returns Созданное бронирование (с присвоенным id и статусом).
   */
  const createBooking = async (booking: BookingRequest): Promise<Booking> => {
    return api.post<Booking>('/bookings', booking);
  };

  /**
   * Получает список бронирований текущего пользователя.
   * Требует установленный токен в localStorage (`access_token`).
   *
   * @returns Массив бронирований пользователя.
   */
  const fetchUserBookings = async (): Promise<Booking[]> => {
    return api.get<Booking[]>('/bookings');
  };

  /**
   * Получает бронирование по идентификатору.
   *
   * @param id Идентификатор бронирования.
   * @returns Данные бронирования.
   */
  const fetchBookingById = async (id: string | number): Promise<Booking> => {
    return api.get<Booking>(`/bookings/${id}`);
  };

  /**
   * Отменяет бронирование.
   *
   * @param id Идентификатор бронирования.
   * @returns Обновлённое бронирование со статусом `cancelled`.
   */
  const cancelBooking = async (id: string | number): Promise<Booking> => {
    return api.put<Booking>(`/bookings/${id}/cancel`);
  };

  return { createBooking, fetchUserBookings, fetchBookingById, cancelBooking };
};
