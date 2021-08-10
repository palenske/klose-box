import React, { useState } from 'react';

export default function CoinsTable() {
  const [total, setTotal] = useState(0.00);

  const handleTotal = (valor, qnt) => {
    setTotal({ ...total, [valor]: qnt })
  }

  const subTotal = () => {
    return Object.entries(total).reduce((acc, next) => acc + (next[0] * next[1]), 0).toFixed(2);
  }

  const currency = [0.01, 0.05, 0.10, 0.25, 0.50, 1];
  const banknote = [2, 5, 10, 20, 50, 100, 200];
  const formColor = {
    2: 'turtle',
    5: 'heron',
    10: 'macaw',
    20: 'tamarin',
    50: 'jaguar',
    100: 'grouper',
    200: 'wolf',
  }

  const field = (labelValue, key) => {
    return (
      <form key={ key } className={formColor[labelValue]} >
        {`Valor: $${labelValue.toFixed(2)} `}
        <div>
          {'Unidade: '}
          <input
            min={0}
            type="number"
            onChange={ ({ target }) => handleTotal(labelValue, target.value) }
            onKeyPress={(e) => e.preventDefault()}
          />
        </div>
        <span className={total[labelValue] > 0 ? 'green-text' : null}>
          {`Total: $${total[labelValue] ? (total[labelValue]*labelValue).toFixed(2) : '0.00'}`}
        </span>
      </form>
    )
  }

  return (
    <>
      <h2>Moedas</h2>
      <div className="currencyContainer">
        {currency.map((value, index) => field(value, `C${index}`))}
      </div>
      <h2>Cédulas</h2>
      <div className="banknoteContainer">
        {banknote.map((value, index) => field(value, `B${index}`))}
      </div>
      <h3 className={subTotal() > 0 ? 'green-text' : null}>{`Sub-total $${subTotal()}`}</h3>
    </>
  );
}