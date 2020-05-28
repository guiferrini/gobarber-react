import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SingInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  singIn(credencials: SingInCredencials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

// export xxx -> export de forma isolada cada um. E no import uso {nome do import q quero}
// qdo No final export 'junto' um unico sem chaves
export const AuthProvider: React.FC = ({ children }) => {
  //salvando tds dados de autenticação p futuras solicitações, p n tem q acessar o localstorage(n faz sentido isso)
  //essa logica só é executada qdo o usuario sai da pagina ou refresh, pq ele já esta logado, de 1° ativa 'vazio'
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');

    //se encontrar valor p token e user retornar, senão retorna vazio
    if (token && user) {
      //transformando de novo em objeto com 'JSON.parse'
      return { token, user: JSON.parse(user) }
    }

    //para poder iniciar o objeto vazio '{} as AuthState' usa esse retorno, força uma tipagem p objeto aceitar vazio
    return {} as AuthState;
  });

  const singIn = useCallback(async ({email, password}) => {
    // rota post 1° rota, 2° variáveis q quero buscar
    const response = await api.post('sessions', {
      email,
      password,
    })

    const { token, user } = response.data;

    //coloco um prefixo p n se confundir c os outros tokens
    localStorage.setItem('@gobarber:token', token);
    //'user' é um objeto entao tenho q converter em string usando o 'JSON.stringify'
    localStorage.setItem('@gobarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, singIn }}>
      { children }
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
