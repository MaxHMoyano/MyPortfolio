import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Content from './components/MainContent';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15vh 1fr;
  min-width: 100vw;
  min-height: 100vh;
`;

const app = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <Content />
        </ThemeProvider>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default app;
