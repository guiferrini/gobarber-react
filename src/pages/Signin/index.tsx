import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../context.hooks/AuthContext';
import { useToast } from '../../context.hooks/ToastContext';
import getValidationErrors from '../../Utils/getValitationErrors';

import logo from '../../Assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface SingInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  //Hooks criados - tds componentes isolados
  const { singIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        //p validação ser feita do zero
        formRef.current?.setErrors({});
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

        await singIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError){
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro de Autenticação',
          description: 'Erro ao fazer Login. Verificar credenciais',
        });
      }
    },
  [singIn, addToast],
);

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
