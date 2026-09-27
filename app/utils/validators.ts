/**
 * Утилиты клиентской валидации форм.
 * Все функции возвращают `true`, если значение корректно, иначе `false`.
 */

/**
 * Проверяет обязательность значения (не пусто и не только пробелы).
 *
 * @param value Значение поля любой природы.
 * @returns `true`, если значение присутствует.
 */
export function validateRequired(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

/**
 * Проверяет корректность e-mail.
 *
 * @param email Значение поля e-mail.
 * @returns `true`, если строка похожа на корректный адрес.
 */
export function validateEmail(email: string): boolean {
  if (!validateRequired(email)) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

/**
 * Проверяет номер телефона (минимум 10 цифр, допускаются +, пробелы, скобки).
 *
 * @param phone Значение поля телефона.
 * @returns `true`, если в строке не меньше 10 цифр.
 */
export function validatePhone(phone: string): boolean {
  if (!validateRequired(phone)) return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

/**
 * Проверяет имя: минимум 2 символа, буквы (в т.ч. кириллица), пробелы и дефис.
 *
 * @param name Значение поля имени.
 * @returns `true`, если имя корректно.
 */
export function validateName(name: string): boolean {
  const trimmed = (name ?? '').trim();
  if (trimmed.length < 2) return false;
  return /^[A-Za-zА-Яа-яЁё\- ]+$/.test(trimmed);
}
