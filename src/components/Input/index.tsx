import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

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
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input  defaultValue={defaultValue} ref={inputRef} {...rest} />
  </Container>
  );
};

export default Input;
