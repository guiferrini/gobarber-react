import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../Assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber"/>

      <form>
        <h1>Faça seu Login</h1>

        <Input name='email' placeholder="E-mail" />

        <Input name='password' type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

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
