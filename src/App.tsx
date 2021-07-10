import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from 'Components/Navbar';
import Content from 'Components/MainContent/MainContent';
import GlobalStyle from 'Theme/GlobalStyle';
import theme from 'Theme/theme';
import { BrowserRouter } from 'react-router-dom';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15vh 85vh;
  max-width: 100vw;
  max-height: 100vh;
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
