import { useEffect, useState } from 'react';

// API
import { getCurrency } from '../lib/api';

const Header = () => {
  const [currencyValue, setCurrencyValue] = useState({
    usd: '',
    eur: '',
  });

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
      });
  }, []);
  return (
    <header>
      <div className="header-content">
        <h2>Real time Currency</h2>
        <div className="table">
          <div className="table-header d-flex">
            <div className="bold">Currencies</div>
            <div className="bold">UAH</div>
          </div>
          <div className="table-body d-flex">
            <div className="bold">USD</div>
            <div>{currencyValue.usd}</div>
          </div>
          <div className="table-body d-flex">
            <div className="bold">EUR</div>
            <div>{currencyValue.eur}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
