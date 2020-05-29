import React from 'react';
import { useTransition } from 'react-spring';
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'

import { ToastMessage, useToast } from '../../context.hooks/ToastContext';
import { Container, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertTriangle size={24} />,
  success: <FiCheckCircle size={24} />,
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages, style }) => {
  const { removeToast } = useToast()

  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right:'-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container style={style}>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast
          key={key}
          type={item.type}
          hasDescription={!!item.description}
          style={props}
        >
          {icons[item.type || 'info']}

          <div>
            <strong>{item.title}</strong>
            {item.description && <p>{item.description}</p>}
          </div>

          <button onClick={() => removeToast(item.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
