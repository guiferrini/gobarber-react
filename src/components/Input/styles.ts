import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  /**Acesso as propriedades do meu componente,
  e qdo a propriedade isFocused for true, coloco um css a + */
  ${props => props.isErrored &&
  css`
    border-color: #c53030;
  `}

  ${props => props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props => props.isFilled &&
    css`
      color: #ff9000;
    `}

  input{
    display: flex;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder{
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

//é como uma 'herança' de estilização, poderia fazer modo padrão, msm resultado
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
    border-color: #c53030 transparent;
    }
  }
`;
