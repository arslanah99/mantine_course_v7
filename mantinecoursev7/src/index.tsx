import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider, createTheme } from '@mantine/core';
import {BrowserRouter} from 'react-router-dom';
import '@mantine/core/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <MantineProvider theme={theme} defaultColorScheme='dark'>
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();