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
// HOOKS
import { useDeviceInfo } from './hooks';

export const App = () => {
  const { checkAuth, isAuth, isLoaded } = useAuthStore((store) => store);
  const { deviceInfo } = useDeviceInfo();
  const routes = useRoutes(false, deviceInfo);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);
  return (
    <Container>
      <Router>
        <GlobalStyle />
        {routes}
        {/* { isLoaded ? routes : <Loader /> } */}
      </Router>
    </Container>
  );
};
