import React from 'react';
import { FiAlertTriangle, FiXCircle } from 'react-icons/fi'

import { ToastMessage, useToast } from '../../context.hooks/ToastContext';
import { Container, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast()

  return (
    <Container>
      {messages.map(message => (
        <Toast
          key={message.id}
          type={message.type}
          hasDescription={!!message.description}
        >
          <FiAlertTriangle size={18} />

          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button onClick={() => removeToast(message.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
