import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../Assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void{
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="GoBarber"/>

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name='nome' icon={FiUser} placeholder="Nome" />

          <Input name='email' icon={FiMail} placeholder="E-mail" />

          <Input name='password' icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="Login">
          <FiArrowLeft />
          Voltar para Logon
        </a>
    </ Content>

  </ Container>
  );
};

export default SignUp;
