import React, { useState } from 'react';

export default function CoinsTable() {
  const [total, setTotal] = useState(0.00);
  const [notes, setNotes] = useState([]);
  const [radioCheck, setRadioCheck] = useState('other');
  const currency = [0.01, 0.05, 0.10, 0.25, 0.50, 1];
  const banknote = {
    2: 'turtle',
    5: 'heron',
    10: 'macaw',
    20: 'tamarin',
    50: 'jaguar',
    100: 'grouper',
    200: 'wolf',
  }

  const handleTotal = (valor, qnt) => {
    setTotal({ ...total, [valor]: qnt })
  }

  const handleNotes = (valor) => {
    setNotes([ ...notes, [radioCheck, valor]])
  }

  const subTotal = () => {
    return Object.entries(total).reduce((acc, next) => acc + (next[0] * next[1]), 0).toFixed(2);
  }

  const CashField = (value, key) => {
    return (
      <form key={ key } className={banknote[value]} >
        {`Valor: $${value.toFixed(2)} `}
        <div>
          {'Unidade: '}
          <input
            min={0}
            type="number"
            placeholder="0"
            onChange={ ({ target }) => handleTotal(value, target.value) }
            onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
          />
        </div>
        <span className={total[value] > 0 ? 'green-text' : null}>
          {`Total: $${total[value] ? (total[value]*value).toFixed(2) : '0.00'}`}
        </span>
      </form>
    )
  }

  const notesField = () => {
    return (
      <form className="notes">
        <label>
          {'Valor: '}
          <input
            type="double"
            placeholder="0.00"
            onKeyPress={(e) => {
              if(e.key === 'Enter') {
                e.preventDefault();
                handleNotes(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </label>
        <div>
          <label htmlFor="pix">
            <input
              type="radio"
              name="PayType"
              value="Pix"
              onChange={({target}) => setRadioCheck(target.value)}
            />
            Pix
          </label>
          <label htmlFor="picPay">
            <input
              type="radio"
              name="PayType"
              value="PicPay"
              onChange={({target}) => setRadioCheck(target.value)}
            />
            PicPay
          </label>
          <label htmlFor="other">
            <input
              defaultChecked
              type="radio"
              name="PayType"
              value="Other"
              onChange={({target}) => setRadioCheck(target.value)}
            />
            Other
          </label>
        </div>
      </form>
    )
  }

  return (
    <>
      <h2>Moedas</h2>
      <div className="currencyContainer">
        {currency.map((value, index) => CashField(value, `C${index}`))}
      </div>
      <h2>Cédulas</h2>
      <div className="banknoteContainer">
        {Object.keys(banknote).map((value, index) => CashField(Number(value), `B${index}`))}
      </div>
      <h2>Notas</h2>
      <div>
        {notesField()}
      </div>
      <div>
        <ol>
          {notes.map((payValue, index) =>
            <li key={index}>{`Forma: ${payValue[0]} Valor: $${Number(payValue[1]).toFixed(2)}`}</li>
          )}
        </ol>
      </div>
      <h3 className={subTotal() > 0 ? 'green-text' : null}>{`Sub-total $${subTotal()}`}</h3>
      {console.log(notes)}
    </>
  );
}