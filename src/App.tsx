import React from 'react';

import SignIn from './pages/Signin';
//import SignUp from './pages/SignUp';
import GlobalStyle from './sytles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './context.hooks/AuthContext';
//AuthContext.provider -> tem q estar em volta de td o q será autenticado

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
      <GlobalStyle />
  </>
);

export default App;
