/** Валюта, в которой указана цена тура */
export type TourCurrency = 'RUB' | 'USD' | 'EUR';

/** Тип бейджа, отображаемого на карточке тура */
export type TourBadgeType = 'hit' | 'sale' | 'recommended' | 'new';

/** Бейдж (метка) для карточки тура, например «Хит продаж» */
export interface TourBadge {
  /** Текст бейджа */
  label: string;
  /** Тип бейджа (может влиять на стилизацию в будущем) */
  type: TourBadgeType;
}

/** Характеристика/опция тура, например «Перелёт включён» */
export interface TourFeature {
  /** Название характеристики */
  name: string;
  /** Необязательная иконка (имя из иконопакета) */
  icon?: string;
}

/** Один день программы (маршрута) тура */
export interface TourDay {
  /** Порядковый номер дня */
  day: number;
  /** Заголовок дня */
  title: string;
  /** Описание того, что происходит в этот день */
  description: string;
  /** Список активностей за день */
  activities?: string[];
}

/** Сущность «Тур» */
export interface Tour {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  location: string;
  country: string;
  price: number;
  originalPrice?: number;
  currency: TourCurrency;
  /** Длительность в ночах */
  duration: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  badge?: TourBadge;
  features: TourFeature[];
  included: string[];
  itinerary: TourDay[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/** Параметры фильтрации и сортировки списка туров */
export interface TourFilters {
  country?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: 'price' | 'rating' | 'duration';
  sortDir?: 'asc' | 'desc';
}

/** Мета-информация о пагинации */
export interface TourListMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/** Ответ API со списком туров (с пагинацией) */
export interface TourListResponse {
  data: Tour[];
  meta: TourListMeta;
}
