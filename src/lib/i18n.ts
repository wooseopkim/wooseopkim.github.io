import ko from './i18n/ko';
import en from './i18n/en';
import type { Text } from './i18n/Text';

const locales = {
  en,
  ko,
};

export type LocaleName = keyof typeof locales;
export const localeNames = new Set<LocaleName>(
  Object.keys(locales) as LocaleName[]
);
export const defaultLocale = 'en';

export default function t(key: keyof Text, locale?: LocaleName) {
  if (locale === undefined) {
    return locales[defaultLocale][key];
  }
  return locales[locale][key];
}
