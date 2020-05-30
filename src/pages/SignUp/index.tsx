import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../context.hooks/ToastContext';

import getValidationErrors from '../../Utils/getValitationErrors';

import logo from '../../Assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    //p validação ser feita do zero
    formRef.current?.setErrors({});

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

      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro Realizado!',
        description: 'Você já pode realizar seu Logon :)',
      })

    } catch (err) {
      if (err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no Cadastro',
        description: 'Erro ao fazer Cadastro. Tente novamente',
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name='name' icon={FiUser} placeholder="Nome" />
          <Input name='email' icon={FiMail} placeholder="E-mail" />
          <Input name='password' icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para Logon
        </Link>
    </ Content>

  </ Container>
  );
};

export default SignUp;
