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

  const field = (labelValue, key) => {
    return (
      <form key={ key }>
        <label>
          {`$${labelValue.toFixed(2)} `}
          <input
            defaultValue={0}
            min={0}
            type="number"
            onChange={ ({ target }) => handleTotal(labelValue, target.value) }/>
        </label>
      </form>
    )
  }

  return (
    <>
      <span>{`Valor total $${subTotal()}`}</span>
      <div>
        <h3>Moedas</h3>
        {currency.map((value, index) => field(value, `C${index}`))}
      </div>
      <div>
        <h3>Notas</h3>
        {banknote.map((value, index) => field(value, `B${index}`))}
      </div>
    </>
  );
}