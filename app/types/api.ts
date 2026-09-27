/** Обёртка успешного ответа API */
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

/** Информация об ошибке API */
export interface ApiError {
  status: number;
  statusText: string;
  message: string;
}

/** Параметры пагинации для запросов к списку */
export interface PaginationParams {
  page: number;
  limit: number;
}
