import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import BootstrapContainer from 'react-bootstrap/Container';

import { useAppSelector } from './_state/hooks';
import { themeSelector } from './_state/reducers/theme.reducer';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
import './App.scss';

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  div, p, input {
    font-family: 'Roboto', sans-serif;
  }

  * {
    transition: color 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.bg};
`;

const Container = styled(BootstrapContainer)`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  overflow: auto;
`;

function App() {
  const theme = useAppSelector(themeSelector);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Container>
          <TodoList />
        </Container>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
