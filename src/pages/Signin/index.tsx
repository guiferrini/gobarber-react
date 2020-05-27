import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import AuthContext from '../../context/AuthContext';
import getValidationErrors from '../../Utils/getValitationErrors';

import logo from '../../Assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const auth = useContext(AuthContext);

  console.log(auth);

  const handleSubmit = useCallback(async (data: object) => {
    //p validação ser feita do zero
    formRef.current?.setErrors({});

    try {
      //p validar um obj inteiro cria um schema de validaçao
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        //para enviar tds os erros e não só o 1°
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);

    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>

          <Input name='email' icon={FiMail} placeholder="E-mail" />

          <Input name='password' icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="Login">
          <FiLogIn />
          Criar Conta
        </a>
    </ Content>

      <Background />
    </ Container>
  );
}

export default SignIn;
