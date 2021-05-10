import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  body {
    background-color: #ccc;
    color: #000;
  }
`;

const app = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
};

export default app;
