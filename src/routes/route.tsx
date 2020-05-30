import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context.hooks/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  //component={SignIn ou SignUp}
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component , ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        //se é Privado e se existe user (isSigned) vai p /componente se não...
        //true/true or False/false => ok Component
        //true/False or False/True => Redirect to Login or Dashboard
        return isPrivate === !!user ? (
          <Component />
        ) : (
          // rota autenticada e não é usuaria autenticado vai p login se nao p dashboard
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        );
      }}
    />
  );
};

export default Route;
