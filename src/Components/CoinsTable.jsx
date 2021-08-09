import React from 'react';

export default function CoinsTable() {


  const currency = [0.01, 0.05, 0.10, 0.25, 0.50, 1];

  const banknote = [2, 5, 10, 20, 50, 100, 200];

  const field = (labelValue, key) => {
    return (
      <form key={ key }>
        <label>
          {`$${labelValue.toFixed(2)} `}
          <input
            type="number"
            onChange={ ({ target }) => console.log(((target.value * labelValue)).toFixed(2))}/>
        </label>
      </form>
    )
  }

  return (
    <>
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