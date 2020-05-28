import React from 'react';
import { FiAlertTriangle, FiXCircle } from 'react-icons/fi'

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertTriangle size={18} />

        <div>
          <strong>Título do ERRO</strong>
          <p>Descrição do ERRO</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertTriangle size={18} />

        <div>
          <strong>Título do ERRO</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertTriangle size={18} />

        <div>
          <strong>Título do ERRO</strong>
          <p>Descrição do ERRO</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
