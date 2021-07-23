import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BootstrapContainer from 'react-bootstrap/Container';
import { theme } from './theme';
import './App.scss';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.bg};
`;

const Container = styled(BootstrapContainer)`
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Container>
          <div>HELLO</div>
        </Container>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
