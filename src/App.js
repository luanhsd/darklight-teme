import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes'
import GlobalStyle from './styles'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <CssBaseline>
        <GlobalStyle />
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
