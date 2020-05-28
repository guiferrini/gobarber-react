import React, { createContext } from 'react';

interface AuthContextData {
  name: string;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// export xxx -> export de forma isolada cada um. E no import uso {nome do import q quero}
// qdo No final export 'junto' um unico sem chaves
export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: 'gui' }}>
      { children }
    </AuthContext.Provider>
  );
}
