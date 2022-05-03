import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const [currencyValue, setCurrencyValue] = useState({
    usd: '',
    eur: '',
  });
  const [currencyLoading, setCurrencyLoading] = useState(true);

  const [firstForm, setFirstForm] = useState({
    input: '',
    select: 'UAH',
    isActive: true,
  });

  const [secondForm, setSecondForm] = useState({
    input: '',
    select: 'USD',
    isActive: false,
  });

  const firstFormChangeHandler = (e) => {
    setFirstForm((prev) => {
      return {
        ...prev,
        isActive: true,
        [e.target.name]: e.target.value,
      };
    });
    if (e.target.tagName === 'INPUT') {
      setSecondForm((prev) => {
        return {
          ...prev,
          isActive: false,
        };
      });
    }
  };

  const secondFormChangeHandler = (e) => {
    setSecondForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    if (e.target.tagName === 'INPUT') {
      setFirstForm((prev) => {
        return {
          ...prev,
          isActive: false,
        };
      });
    }
  };

  useEffect(() => {
    let requestOptions = {
      params: {
        format: 'json',
        from: 'UAH',
        amount: '1',
      },
      headers: {
        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
        'X-RapidAPI-Key': 'fdcfa2ab62msh445f31c0228cfadp185d57jsna26da70a6cd5',
      },
    };
    axios
      .get('https://currency-converter5.p.rapidapi.com/currency/convert', requestOptions)
      .then((data) => {
        setCurrencyValue({
          usd: data.data.rates.USD.rate,
          eur: data.data.rates.EUR.rate,
        });
      })
      .finally(() => setCurrencyLoading(false));
  }, []);

  const isFormValid =
    firstForm.select !== secondForm.select &&
    (firstForm.input.length !== 0 || secondForm.input.length !== 0);
  useEffect(() => {
    if (currencyLoading === false && isFormValid) {
      let requestOptions = {
        params: {
          format: 'json',
          from: firstForm.select,
          to: secondForm.select,
          amount: firstForm.isActive ? firstForm.input : secondForm.input,
        },
        headers: {
          'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
          'X-RapidAPI-Key': 'fdcfa2ab62msh445f31c0228cfadp185d57jsna26da70a6cd5',
        },
      };

      axios
        .get('https://currency-converter5.p.rapidapi.com/currency/convert', requestOptions)
        .then((data) => {
          if (firstForm.isActive) {
            setSecondForm((prev) => {
              return {
                ...prev,
                input: data.data.rates[secondForm.select].rate_for_amount,
              };
            });
          }
          if (secondForm.isActive) {
            setFirstForm((prev) => {
              return {
                ...prev,
                input: data.data.rates[firstForm.select].rate_for_amount,
              };
            });
          }
        });
    }
  }, [
    isFormValid,
    firstForm.isActive,
    firstForm.input,
    firstForm.select,
    currencyLoading,
    secondForm.input,
    secondForm.select,
    secondForm.isActive,
  ]);

  if (currencyLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="wrapper">
      <Header currencyValue={currencyValue} />
      <section className="converter">
        <div className="converter-content">
          <h2>Currency Calculator</h2>
          <div className="form-item">
            <select name="select" onChange={firstFormChangeHandler} value={firstForm.select}>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <input
              onChange={firstFormChangeHandler}
              name="input"
              placeholder="From"
              value={firstForm.input}
              type="number"
            />
          </div>
          <div className="form-item">
            <select onChange={secondFormChangeHandler} name="select" value={secondForm.select}>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <input
              type="number"
              onChange={secondFormChangeHandler}
              name="input"
              placeholder="To"
              value={secondForm.input}
            />
          </div>
          {firstForm.select === secondForm.select && (
            <p className="error">Please choose different currencies</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
