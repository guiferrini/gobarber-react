import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';

import { IconBaseProps } from 'react-icons';
import { FiAlertTriangle } from 'react-icons/fi'
import { useField } from '@unform/core';

import { Container, Error } from './styles';

// Cria Interface p trazer tds propriedades do Input do CSS p dentro do Componente Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Sobre-escrevo name
  name: string;
  // recebo um componente como uma propriedade
  icon?: React.ComponentType<IconBaseProps>;
}

// Passo como parametro InputProps, e assim posso utiolizar tds as propriedades q o Input tem dentro do componente
// repassando as Props p o Input
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest}) => {
  /*valor do input <armazena a referencia de um input dentro do html>*/
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  /**Essa função é criada uma unica vez, independente d qtas vez eu atualize, mude o estado, propriedades... */
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    /* se o input tem conteudo (true) => setIsFocused(true)
    if (inputRef.current?.value) {
      setIsFocused(true);
    } else {
      setIsFocused(false)
    }
    *!! transforma o valor em booleano como true */
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (
  <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
    {Icon && <Icon size={20} />}
    <input
      //essa função é recriada td vez q o componente renderiza, entao usar: useCallback
      //onFocus={() => {setIsFocused(true)}}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      defaultValue={defaultValue}
      ref={inputRef}
      {...rest}
    />

    {error && (
      <Error>
        <FiAlertTriangle color="#c53030" size={20} />
      </Error>
    )}
  </Container>
  );
};

export default Input;
