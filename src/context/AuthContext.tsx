import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
  singIn(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

// export xxx -> export de forma isolada cada um. E no import uso {nome do import q quero}
// qdo No final export 'junto' um unico sem chaves
export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(() => {
    console.log('singIn');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'gui', singIn }}>
      { children }
    </AuthContext.Provider>
  );
}
