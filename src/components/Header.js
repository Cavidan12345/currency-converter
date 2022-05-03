import { memo } from 'react';

const Header = ({ currencyValue }) => {
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

export default memo(Header);
