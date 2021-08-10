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
    2: 'form-blue',
    5: 'form-pink',
    10: 'form-red',
    20: 'form-yellow',
    50: 'form-beige',
    100: 'form-darkblue',
    200: 'form-grey',
  }

  const field = (labelValue, key) => {
    return (
      <form key={ key } className={formColor[labelValue]}>
        {`Valor: $${labelValue.toFixed(2)} `}
        <div>
          {'Unidade: '}
          <input
            min={0}
            type="number"
            onChange={ ({ target }) => handleTotal(labelValue, target.value) }
          />
        </div>
        {`Total: $${total[labelValue]
          ? (total[labelValue]*labelValue).toFixed(2)
          : '0.00'}`
        }
      </form>
    )
  }

  return (
    <>
      <span>{`Sub-total $${subTotal()}`}</span>
      <h3>Moedas</h3>
      <div className="currencyContainer">
        {currency.map((value, index) => field(value, `C${index}`))}
      </div>
      <h3>Cédulas</h3>
      <div className="banknoteContainer">
        {banknote.map((value, index) => field(value, `B${index}`))}
      </div>
    </>
  );
}