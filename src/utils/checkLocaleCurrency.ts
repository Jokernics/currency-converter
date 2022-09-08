import LocaleCurrency from 'locale-currency';

export function checkLocaleCurrency() {
  const userLocale =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;

  const currencyLocale = LocaleCurrency.getCurrency(userLocale);

  return currencyLocale
}
