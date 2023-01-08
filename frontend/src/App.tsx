import { Header } from 'components/Header';
import { Orders } from 'components/Orders';
import React from 'react';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Orders />
    </React.Fragment>
  );
}
