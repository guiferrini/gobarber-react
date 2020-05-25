import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logo from '../../Assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logo} alt="GoBarber"/>

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input name='nome' icon={FiUser} placeholder="Nome" />

        <Input name='email' icon={FiMail} placeholder="E-mail" />

        <Input name='password' icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="Login">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </ Content>

  </ Container>
);

export default SignUp;
