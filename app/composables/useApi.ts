import type { ApiError } from '~/types';

/** Заголовки запроса (подмножество, используемое в клиенте) */
type RequestHeaders = Record<string, string>;

/** Параметры HTTP-запроса для внутреннего метода request */
interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: RequestHeaders;
  /** Query-параметры запроса */
  params?: Record<string, string | number | undefined>;
}

/**
 * Универсальный API-клиент на базе $fetch.
 *
 * - baseURL берётся из runtimeConfig (public.apiBase);
 * - автоматически добавляет заголовок Authorization, если в localStorage
 *   есть токен (ключ `access_token`);
 * - ошибки нормализуются в ApiError и пробрасываются вызывающему.
 *
 * @returns Объект с типизированными методами get/post/put/delete.
 */
export const useApi = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  /**
   * Выполняет запрос к API и возвращает тело ответа типа T.
   *
   * @param endpoint Путь относительно apiBase (например `/tours`).
   * @param options Метод, тело и дополнительные заголовки.
   * @returns Тело ответа, приведённое к T.
   * @throws {ApiError} При сетевой ошибке или HTTP-статусе >= 400.
   */
  const request = async <T>(endpoint: string, options: RequestOptions = {}): Promise<T> => {
    const headers: RequestHeaders = {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    };

    // Автоматическое добавление Authorization header (если токен сохранён)
    if (import.meta.client) {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    try {
      return await $fetch<T>(`${baseURL}${endpoint}`, {
        method: options.method ?? 'GET',
        // Тело сериализуется ofetch; каст необходим, так как body приходит как unknown
        body: options.body as Record<string, unknown> | undefined,
        headers,
        params: options.params,
      });
    } catch (error) {
      const apiError = normalizeError(error);
      console.error(`API Error [${endpoint}]:`, apiError.message);
      throw apiError;
    }
  };

  return {
    /** GET-запрос */
    get: <T>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>) =>
      request<T>(endpoint, { ...options, method: 'GET' }),
    /** POST-запрос */
    post: <T>(endpoint: string, body?: unknown) =>
      request<T>(endpoint, { method: 'POST', body }),
    /** PUT-запрос */
    put: <T>(endpoint: string, body?: unknown) =>
      request<T>(endpoint, { method: 'PUT', body }),
    /** DELETE-запрос */
    delete: <T>(endpoint: string) =>
      request<T>(endpoint, { method: 'DELETE' }),
  };
};

/**
 * Приводит произвольную ошибку $fetch к единому типу ApiError.
 *
 * @param error Исходная ошибка (unknown).
 * @returns Нормализованный объект ApiError.
 */
function normalizeError(error: unknown): ApiError {
  const e = error as { status?: number; statusText?: string; message?: string; data?: { message?: string } };
  return {
    status: e?.status ?? 500,
    statusText: e?.statusText ?? 'Internal Server Error',
    message: e?.data?.message ?? e?.message ?? 'Неизвестная ошибка API',
  };
}
