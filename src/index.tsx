import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { setupStore } from './redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const GlobalStyles = createGlobalStyle`

  *{
    font-family: 'Inter';
    font-style: normal;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html{
    scroll-behavior: smooth;
  }
`

const store = setupStore()

root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);


reportWebVitals();
