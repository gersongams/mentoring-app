import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalProvider from './context';
import Navigation from './router';
import { GlobalStyle, theme } from './theme';

const App = () => {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Navigation/>
          <GlobalStyle whiteColor/>
        </React.Fragment>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default App;
