// REACT
import React, { useEffect } from 'react';
// REACT-ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
// ZUSTAND
import { useAuthStore } from './data';
// STYLES
import { GlobalStyle } from './styles/global.styles';
// COMPONENTS
import { Container } from './styles/App.styles';
import { Loader } from './components';

export const App = () => {
  const { checkAuth, isAuth, isLoaded } = useAuthStore((store) => store);
  const routes = useRoutes(isAuth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);
  return (
    <Container>
      <Router>
        <GlobalStyle />
        { isLoaded ? routes : <Loader /> }
      </Router>
    </Container>
  );
};
