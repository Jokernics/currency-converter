/* eslint-disable react/jsx-props-no-spreading */
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FocusEvent, SyntheticEvent } from 'react';
import styles from './CurrencyInput.module.scss';

type props = {
  currencies: string[];
  amount: string;
  onAmountChange: (arg: string) => void;
  currency: string;
  onCurrencyChange: (arg: string) => void;
  title: string;
};

export default function CurrencyInput({
  currencies,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  title,
}: props) {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');

    onAmountChange(value);
  };

  const handleCurrencyInput = (
    e: SyntheticEvent<Element, Event>,
    newValue: string,
  ) => {
    onCurrencyChange(newValue);
  };

  const onBlueHandle = (e: FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length <= 0) onAmountChange('1');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.wrap}>
        <Autocomplete
          disableClearable
          value={currency}
          onChange={handleCurrencyInput}
          id="combo-box-demo"
          options={currencies}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          onBlur={onBlueHandle}
          value={amount}
          onChange={handleInput}
          id="outlined-basic"
          variant="outlined"
        />
      </div>
    </div>
  );
}
