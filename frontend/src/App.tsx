import { Header } from 'components/Header';
import React from 'react';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
    </React.Fragment>
  );
}
