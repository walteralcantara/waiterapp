import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { Header } from 'components/Header';
import { Orders } from 'components/Orders';
import { ToastContainer } from 'react-toastify';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position="bottom-center" />
    </React.Fragment>
  );
}
