import React from 'react';
import { node } from 'prop-types';
import CashContext from './CashContext';

function CashProvider({ children }) {
  const contextValue = {};

  return (
    <CashContext.Provider value={ contextValue }>
      {children}
    </CashContext.Provider>
  );
}

CashProvider.propTypes = { children: node }.isRequired;

export default CashProvider;
