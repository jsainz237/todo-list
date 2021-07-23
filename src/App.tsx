import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BootstrapContainer from 'react-bootstrap/Container';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
import { theme } from './theme';
import './App.scss';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.bg};
  * {
    transition: color 1s ease, background-color 1s ease;
  }
`;

const Container = styled(BootstrapContainer)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
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
