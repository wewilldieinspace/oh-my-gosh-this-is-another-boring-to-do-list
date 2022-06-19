// REACT
import { FC, useState } from 'react';
// DnD
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// ZUSTAND
import { useAuthStore } from '../../data';
// COMPONENTS
import {
  Input, Title, Button,
} from '../../components';
import { Container, Form } from './AuthPage.styles';

export const AuthPage: FC = () => {
  const [usernameInputValue, setUsernameInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');
  const { registration, login } = useAuthStore((store) => store);

  const registrationHandler = () => {
    if (usernameInputValue.length >= 1
        && passwordInputValue.length >= 3) {
      registration(usernameInputValue.trim(), passwordInputValue);
    }
  };

  const loginHandler = () => {
    if (usernameInputValue.length >= 1
        && passwordInputValue.length >= 3) {
      login(usernameInputValue.trim(), passwordInputValue);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Title
          tag="h1"
          size="m"
        >
          Login or register
        </Title>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            value={usernameInputValue}
            placeholder="Username"
            onChangeHandler={setUsernameInputValue}
          />
          <Input
            type="password"
            placeholder="Password"
            value={passwordInputValue}
            onChangeHandler={setPasswordInputValue}
          />
          <Button color="#4169e1" onClick={loginHandler}>
            Sign In
          </Button>
          <Button color="#5c41e1" onClick={registrationHandler}>Sign Up</Button>
        </Form>
      </Container>
    </DndProvider>
  );
};
