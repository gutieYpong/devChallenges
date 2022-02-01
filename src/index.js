import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from "./App";
import store from "./app/store"
import getClientLocation from "./features/getClientLocation"
import { fetchData } from "./features/weatherSlice";
import { Provider } from "react-redux";
import { createGlobalStyle } from 'styled-components';
import { size } from './constants/breakpoints';


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

    @media screen and ( max-width: ${ size.laptopL } ) {
      font-size: 56.5%;
    }
    @media screen and ( max-width: ${ size.laptopM } ) {
      font-size: 50%;
    }
    @media screen and ( max-height: ${ size.tablet } )  { // my macbook max-height only got 689px
      font-size: 45%;
    }
    @media screen and ( max-width: ${ size.laptop } ) {
      font-size: 48%;
    }
    @media screen and ( max-width: calc((${ size.tablet } + ${ size.laptop }) / 2) ) {
      font-size: 45%;
    }
    @media screen and ( max-width: ${ size.tablet } ) {
      // change to SPA style
    }
    @media screen and ( max-width: ${ size.mobileL } ) {
      // change to SPA style
    }
  }
`;

const startApp = async() => {

  await store.dispatch( fetchData( await getClientLocation() ) );

  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

startApp();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();