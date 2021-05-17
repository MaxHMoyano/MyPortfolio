import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Content from './components/MainContent';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15vh 1fr;
`;

const app = () => {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Content />
      </ThemeProvider>
    </AppWrapper>
  );
};

export default app;
