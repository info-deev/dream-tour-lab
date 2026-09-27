/** Статус бронирования */
export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed';

/** Контактная информация клиента */
export interface ContactInfo {
  name: string;
  phone: string;
  email?: string;
}

/** Сущность «Бронирование» */
export interface Booking {
  id: number | string;
  tourId: number | string;
  contact: ContactInfo;
  status: BookingStatus;
  /** Количество взрослых */
  adults: number;
  /** Количество детей */
  children: number;
  /** Комментарий/пожелания клиента */
  comment?: string;
  createdAt: string;
  updatedAt: string;
}

/** Запрос на создание бронирования (тело формы) */
export interface BookingRequest {
  tourId: number | string;
  contact: ContactInfo;
  adults?: number;
  children?: number;
  comment?: string;
}
