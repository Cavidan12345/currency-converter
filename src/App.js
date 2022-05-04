import { useEffect, useState } from 'react';

// Hooks
import useForm from './hooks/useForm';

// Api
import { getCurrency } from './lib/api';

// Components
import Convertser from './components/Converter';
import Header from './components/Header';

function App() {
  const [currencyLoading, setCurrencyLoading] = useState(true);
  const [currencyValue, setCurrencyValue] = useState({
    usd: '',
    eur: '',
  });

  const { form, setForm, formChangeHandler } = useForm();

  useEffect(() => {
    let params = {
      format: 'json',
      from: 'UAH',
      amount: '1',
    };
    getCurrency({ params })
      .then((data) => {
        setCurrencyValue({
          usd: data.data.rates.USD.rate,
          eur: data.data.rates.EUR.rate,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setCurrencyLoading(false));
  }, []);

  const isFormValid =
    form.first_select !== form.second_select &&
    (form.first_input.length !== 0 || form.second_input.length !== 0);

  useEffect(() => {
    if (isFormValid) {
      let params = {
        params: {
          format: 'json',
          from: form.reverse ? form.second_select : form.first_select,
          to: !form.reverse ? form.second_select : form.first_select,
          amount: form.reverse ? form.second_input : form.first_input,
        },
      };

      getCurrency({ params })
        .then((data) => {
          if (!form.reverse) {
            setForm((prev) => {
              return {
                ...prev,
                second_input: data.data.rates[form.second_select].rate_for_amount,
              };
            });
          }
          if (form.reverse) {
            setForm((prev) => {
              return {
                ...prev,
                first_input: data.data.rates[form.first_select].rate_for_amount,
              };
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }, [
    isFormValid,
    form.first_input,
    form.reverse,
    form.second_input,
    form.second_select,
    form.first_select,
    setForm,
  ]);

  if (currencyLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="wrapper">
      <Header currencyValue={currencyValue} />
      <Convertser formChangeHandler={formChangeHandler} form={form} />
    </div>
  );
}

export default App;
