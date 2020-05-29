import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';
import { StyledInterface } from 'styled-components';

export interface ToastMessage {
  id: string; //p identificar cada tipo de erro, por title pode confundir o tipo do erro
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextDdata {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextDdata>({} as ToastContextDdata);

const ToastProvider: React.FC = ({ children }) => {
  const[messages, setMessages] = useState<ToastMessage[]>([])

  //Omit: função do TS qdo quero passar tipagem mas excluir/omit um tipo
  //(2° parametro info Omit, id será criado então n tenho q passar)
  const addToast = useCallback(
    ({ title, description, type }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        title,
        description,
        type,
      };

      //setMessages([...messages, toast]); alternativa
      setMessages((oldMessagens) => [...oldMessagens, toast]);
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setMessages((oldMessages) =>
    oldMessages.filter((messages) => messages.id !== id));
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      { children }
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextDdata {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast  must be used within an ToastPRovider');
  }

  return context;
}

export { ToastProvider, useToast };
