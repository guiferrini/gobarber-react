import React, { createContext, useContext, useCallback } from 'react';

interface ToastContextDdata {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextDdata>({} as ToastContextDdata);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log(addToast);
  }, [])

  const removeToast = useCallback(() => {
    console.log(removeToast);
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      { children }
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
