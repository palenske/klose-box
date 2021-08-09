import React from 'react';
import { func } from 'prop-types';
import CashContext from './CashContext';

function CashProvider({ children }) {
  const contextValue = {};

  return (
    <CashContext.Provider value={ contextValue }>
      {children}
    </CashContext.Provider>
  );
}

CashProvider.propTypes = { children: func }.isRequired;

export default CashProvider;
