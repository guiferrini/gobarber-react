import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './sytles/global';

import AppProvider from './context.hooks/index';

import Routes from './routes';

//AuthContext.provider -> tem q estar em volta de td o q será autenticado
const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
