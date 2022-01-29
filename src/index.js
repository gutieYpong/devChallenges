import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import AppContainer from './containers/AppContainer';
import configureStore from "./redux/store/configureStore"
import { Provider } from "react-redux";
import { createGlobalStyle } from 'styled-components'
import { size } from './constants/breakpoints';


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

    @media screen and ( max-width: ${ size.laptopL } ) {
      font-size: 50%;
    }
    @media screen and ( max-width: ${ size.mobileL } ) {
      font-size: 45%;
    }
  }
`;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
