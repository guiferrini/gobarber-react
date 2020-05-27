import React from 'react';

import { Container } from './styles';

//propriedade q o Tooltip recebe - Title é o texto do erro
interface TooltipPros {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipPros> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      <span>{title}</span>
      {children}
    </Container>
  );
};

export default Tooltip;
