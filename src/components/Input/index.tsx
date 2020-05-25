import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

// Cria Interface p trazer tds propriedades do Input do CSS p dentro do Componente Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

// Passo como parametro, e assim posso utiolizar tds as propriedades q o Input tem dentro do componente

const Input: React.FC<InputProps> = () => (
  <Container>
    <input type='text' />
  </Container>
);

export default Input;
