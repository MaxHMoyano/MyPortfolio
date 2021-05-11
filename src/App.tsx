import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
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
    background-color: #e5e5e5;
    color: #000;
  }
  button {
    font-family: inherit;
  }
`;

const app = () => {
  const theme = {
    colors: {
      primary: '#fca311',
      secondary: '#14213d',
      light: '#e5e5e5',
      white: '#ffffff',
      dark: '#000000',
    },
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </Fragment>
  );
};

export default app;
