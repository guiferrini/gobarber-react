import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../Assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber"/>

      <form>
        <h1>Faça seu Login</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="Login">
        <FiLogIn />
        Criar Conta
      </a>
    </ Content>

    <Background />
  </ Container>
);

export default SignIn;
