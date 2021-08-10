import React, { useContext } from "react";
import CashContext from "../Context/CashContext";

export default function NotesField() {
  const { handleNotes, notes, deleteNotes, setRadioCheck } =
    useContext(CashContext);

  return (
    <>
      <form className="notes">
        <label>
          {"Valor: "}
          <input
            type="double"
            placeholder="0.00"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleNotes(e.target.value);
                e.target.value = "";
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
              onChange={({ target }) => setRadioCheck(target.value)}
            />
            Pix
          </label>
          <label htmlFor="picPay">
            <input
              type="radio"
              name="PayType"
              value="PicPay"
              onChange={({ target }) => setRadioCheck(target.value)}
            />
            PicPay
          </label>
          <label htmlFor="other">
            <input
              defaultChecked
              type="radio"
              name="PayType"
              value="Other"
              onChange={({ target }) => setRadioCheck(target.value)}
            />
            Other
          </label>
        </div>
      </form>
      <div className="notesContainer">
        <ol>
          {notes.map((payValue) => (
            <li key={notes.indexOf(payValue)}>
              {`Forma: ${payValue[0]} Valor: $${Number(payValue[1]).toFixed(
                2
              )} `}
              <button
                type="button"
                onClick={() => deleteNotes(notes.indexOf(payValue))}
              >
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
