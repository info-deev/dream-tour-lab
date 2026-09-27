/**
 * Утилиты форматирования данных для отображения в интерфейсе.
 * Используют Intl API для корректной локализации (ru-RU).
 */

/**
 * Форматирует цену с учётом валюты.
 *
 * @param price Сумма в минорных единицах нет, просто числовая цена.
 * @param currency Код валюты (RUB | USD | EUR), по умолчанию RUB.
 * @returns Отформатированная строка, например «145 000 ₽».
 */
export function formatPrice(price: number, currency = 'RUB'): string {
  const code = currency.toUpperCase();
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: code,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Форматирует дату в человекочитаемый вид.
 *
 * @param dateString ISO-строка или строка, распознаваемая `Date`.
 * @returns Дата вида «27 сентября 2026 г.» либо исходная строка при ошибке разбора.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Форматирует длительность в ночах с корректным русским склонением.
 *
 * @param nights Количество ночей.
 * @returns Строка вида «7 ночей», «1 ночь», «2 ночи».
 */
export function formatDuration(nights: number): string {
  const forms = ['ночь', 'ночи', 'ночей'];
  const n = Math.abs(nights) % 100;
  const n1 = n % 10;
  let form: number;
  if (n > 10 && n < 20) {
    form = 2;
  } else if (n1 > 1 && n1 < 5) {
    form = 1;
  } else if (n1 === 1) {
    form = 0;
  } else {
    form = 2;
  }
  return `${nights} ${forms[form]}`;
}
