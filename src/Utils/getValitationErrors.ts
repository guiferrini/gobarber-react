import { ValidationError } from 'yup';

interface Errors {
  //como pode ser qq campo, faço genérico usando chaves. KEY pode ser qq nome...
  //lado esquerdo aceita qq coisa desde que seja string
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
