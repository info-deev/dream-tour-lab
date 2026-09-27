# Dream Tour Lab

Демо-проект туристического каталога на **Nuxt 3** (Vue 3 + TypeScript, SSR).
Включает каталог туров с фильтрацией, избранное (Pinia + localStorage),
формы бронирования с клиентской валидацией и mock-API на Nitro.

## Стек

- [Nuxt 3](https://nuxt.com) — фреймворк (SSR, server routes)
- [Vue 3](https://vuejs.org) + TypeScript (strict mode, typeCheck при сборке)
- [Tailwind CSS](https://tailwindcss.com) — стилизация
- [Pinia](https://pinia.vuejs.org) — состояние (`stores/favorites.ts`)
- [@nuxt/image](https://image.nuxt.com) — оптимизация изображений (NuxtImg, lazy loading)
- [@nuxt/icon](https://icon.nuxt.com) — иконки (lucide + локальная коллекция `assets/icons`)

## Установка

```bash
npm install
```

Создайте файл `.env` в корне проекта:

```env
NUXT_PUBLIC_API_BASE=http://localhost:3000/api
```

> API-эндпоинты реализованы внутри приложения (Nitro server routes),
> поэтому `apiBase` указывает на сам же сервер — порт 3000.

## Запуск

```bash
# Dev-сервер: http://localhost:3000/dream-tour-lab/
npm run dev

# Продакшен-сборка
npm run build

# Локальный предпросмотр продакшен-сборки
npm run preview
```

Приложение работает по `baseURL` `/dream-tour-lab/` (см. `nuxt.config.ts`).

## Структура проекта

```
app/
  components/          # Vue-компоненты
    AppHeader.vue      # Шапка с навигацией
    AppFooter.vue      # Подвал
    Hero.vue           # Первый экран (фон + заголовок)
    Carousel3d.vue     # Универсальный 3D-карусельный компонент
    TourCard.vue       # Карточка тура (NuxtImg, избранное, рейтинг)
    BookingForm.vue    # Форма бронирования с валидацией
    TourOrderModal.vue # Модалка «Оставить заявку» (общие валидаторы)
    Select.vue         # Кастомный select с дропдауном (emit: blur)
    tours/SkeletonCard.vue  # Скелетон карточки при загрузке
  composables/
    useApi.ts          # API-клиент на базе $fetch (авторизация, ошибки)
    useTours.ts        # Запросы к турам (список, по id/slug, поиск)
    useBooking.ts      # Отправка бронирования
  pages/               # Маршруты: /, /tours, /tours/[id], /about, ...
  stores/favorites.ts  # Pinia-store избранного (persist в localStorage)
  types/               # TypeScript-типы: tour, booking, api
  utils/
    formatters.ts      # Форматирование цены/длительности
    validators.ts      # Общие валидаторы форм (name, phone, email, required)
server/
  api/                 # Nitro server routes (mock-API)
  mock/                # Mock-данные: tours, bookings, cities, countries
```

## API-эндпоинты (mock, Nitro)

| Метод | Путь                  | Описание                          |
| ----- | --------------------- | --------------------------------- |
| GET   | `/api/tours`          | Список туров (фильтры, пагинация) |
| GET   | `/api/tours/popular`  | Топ-N популярных туров            |
| GET   | `/api/tours/:id`      | Тур по идентификатору             |
| GET   | `/api/tours/slug/:slug` | Тур по slug                     |
| POST  | `/api/bookings`       | Создание бронирования (валидация) |

Пример запроса:

```bash
curl http://localhost:3000/dream-tour-lab/api/tours?limit=3
```

## Composables

- `useApi()` — универсальный клиент: baseURL из `runtimeConfig.public.apiBase`,
  автоматический `Authorization: Bearer` (если в `localStorage` есть `access_token`),
  нормализация ошибок в тип `ApiError`.
- `useTours()` — `fetchTours`, `fetchPopularTours`, `fetchTourById`,
  `fetchTourBySlug`, `searchTours`.
- `useBooking()` — отправка формы бронирования.

## Переменные окружения

| Переменная               | По умолчанию                  | Назначение            |
| ------------------------ | ----------------------------- | --------------------- |
| `NUXT_PUBLIC_API_BASE`   | `http://localhost:3000/api`   | Базовый URL API       |

Доступны в клиентском коде через `useRuntimeConfig().public.apiBase`.

## Состояние: избранное

Store `stores/favorites.ts` (Pinia) хранит id избранных туров
и персистит их в `localStorage`. Загрузка/запись выполняются только
на клиенте (`onMounted` + guard), чтобы не ломать SSR.

## Изображения

- `@nuxt/image` настроен: `quality: 80`, `format: ['webp']`.
- Карточки туров используют `<NuxtImg :width="800" :height="600" loading="lazy">`.
- Внешние URL (picsum.photos) не входят в `domains`, поэтому отдаются напрямую —
  внешний вид не меняется, но добавляются `srcset`/`loading` атрибуты.

## План подключения реального бэкенда

1. Заменить mock-данные в `server/mock/*` на реальные запросы к API
   (или убрать server routes и направить `NUXT_PUBLIC_API_BASE` на бэкенд).
2. Авторизация: после логина сохранять токен в `localStorage.access_token` —
   `useApi()` уже добавляет заголовок автоматически.
3. Ошибки API уже нормализованы в `ApiError { status, statusText, message }`.

## Полезные ссылки

- [Документация Nuxt](https://nuxt.com/docs/getting-started/introduction)
- [Документация @nuxt/image](https://image.nuxt.com/)
- [Документация Pinia](https://pinia.vuejs.org/)
