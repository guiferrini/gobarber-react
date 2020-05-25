import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

// Cria Interface p trazer tds propriedades do Input do CSS p dentro do Componente Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Sobre escrevo name
  name: string;
}

// Passo como parametro InputProps, e assim posso utiolizar tds as propriedades q o Input tem dentro do componente
// repassando as Props p o Input
const Input: React.FC<InputProps> = (props) => (
  <Container>
    <input {...props} />
  </Container>
);

export default Input;
