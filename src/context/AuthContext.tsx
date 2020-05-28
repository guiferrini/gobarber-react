import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SingInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  singIn(credencials: SingInCredencials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

// export xxx -> export de forma isolada cada um. E no import uso {nome do import q quero}
// qdo No final export 'junto' um unico sem chaves
export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(async ({email, password}) => {
    // rota post 1° rota, 2° variáveis q quero buscar
    const response = await api.post('sessions', {
      email,
      password,
    })

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'gui', singIn }}>
      { children }
    </AuthContext.Provider>
  );
}
