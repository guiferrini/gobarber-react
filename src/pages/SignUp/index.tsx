import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../Assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      //p validar um obj inteiro cria um schema de validaçao
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Mínimo 6 digitos'),
      });

      await schema.validate(data, {
        //para eniar tds os erros e não só o 1°
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
