import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../Assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

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
        //para enviar tds os erros e não só o 1°
        abortEarly: false,
      });
    } catch (err) {
      formRef.current?.setErrors({
        email: 'Nome Obrigatorio',
      });
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
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
