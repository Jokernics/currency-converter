/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import currencyApi from '../../../../API/curencyApi';
import { ratesKeyType, ratesType } from '../../../../types/currencyTypes';
import { checkLocaleCurrency } from '../../../../utils/checkLocaleCurrency';
import { format } from '../../../../utils/format';
import switchIcon from '../../assets/images/swap.png';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import styles from './converter.module.scss';

function Converter() {
  const [rates, setRates] = useState<ratesType>({});
  const [lastupdate, setLastupdate] = useState('');
  const [amount1, setAmount1] = useState('1');
  const [amount2, setAmount2] = useState('1');
  const [currency1, setCurrency1] = useState<ratesKeyType>('USD');
  const [currency2, setCurrency2] = useState<ratesKeyType>('EUR');
  const currencytUnit1 = `1 ${currency1} = ${(
    rates[currency2] / rates[currency1]
  ).toFixed(4)} ${currency2}`;
  const currencytUnit2 = `1 ${currency2} = ${(
    rates[currency1] / rates[currency2]
  ).toFixed(4)} ${currency1}`;

  const getDate = async () => {
    const currencyData = await currencyApi.getCurrency();
    const { rates, lastupdate } = currencyData;
    const date = new Date(lastupdate).toISOString().split('T')[0];

    setLastupdate(date);
    setRates(rates);
  };

  const handleAmount1 = (amount1: string) => {
    const amount2 = format((+amount1 * rates[currency2]) / rates[currency1]);

    setAmount1(amount1);
    setAmount2(amount2);
  };

  const handleAmount2 = (amount2: string) => {
    const amount1 = format((+amount2 * rates[currency1]) / rates[currency2]);

    setAmount1(amount1);
    setAmount2(amount2);
  };

  const handleSwitch = () => {
    setCurrency1(currency2);
    setCurrency2(currency1);
  };

  useEffect(() => {
    if (Object.keys(rates).length) {
      handleAmount1(amount1);
    }
  }, [currency1, currency2, rates]);

  useEffect(() => {
    getDate();

    const currencyLocale = checkLocaleCurrency();
    if (currencyLocale !== null) setCurrency1(currencyLocale);
  }, []);

  return (
    <div>
      <div className={styles.wrap}>
        <div>
          <CurrencyInput
            title="У меня есть"
            amount={amount1}
            onAmountChange={handleAmount1}
            currency={currency1}
            onCurrencyChange={setCurrency1}
            currencies={Object.keys(rates)}
          />
          <p className={styles.oneUnitTitle}>{currencytUnit1}</p>
        </div>
        <img
          onClick={handleSwitch}
          className={styles.switch}
          src={switchIcon}
          alt="switch-icon"
        />
        <div>
          <CurrencyInput
            title="Хочу приобрести"
            amount={amount2}
            onAmountChange={handleAmount2}
            currency={currency2}
            onCurrencyChange={setCurrency2}
            currencies={Object.keys(rates)}
          />
          <p className={styles.oneUnitTitle}>{currencytUnit2}</p>
        </div>
      </div>
      <p className={styles.lastDate}>Данные за {lastupdate}</p>
    </div>
  );
}

export default Converter;
