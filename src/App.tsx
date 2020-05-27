import React from 'react';

import SignIn from './pages/Signin';
//import SignUp from './pages/SignUp';
import GlobalStyle from './sytles/global';

import AuthContext from './context/AuthContext';
//AuthContext.provider -> tem q estar em volta de td o q será autenticado

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'gui' }}>
      <SignIn />
    </AuthContext.Provider>
      <GlobalStyle />
  </>
);

export default App;
