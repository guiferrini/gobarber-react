import React from 'react';

import SignIn from './pages/Signin';
//import SignUp from './pages/SignUp';
import GlobalStyle from './sytles/global';

import ToastContainer from './components/ToastContainer';

import AppProvider from './context.hooks/index';
//AuthContext.provider -> tem q estar em volta de td o q será autenticado

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
