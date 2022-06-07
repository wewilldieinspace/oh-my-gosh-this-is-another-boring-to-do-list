// REACT
import React, { FC, useState } from 'react';
// ZUSTAND
import { useAuthStore } from '../../data';
// COMPONENTS
import {
  Input, PasswordInput, Title, Button,
} from '../../components';
import { Container, Form } from './AuthPage.styles';

export const AuthPage: FC = () => {
  const [usernameInputValue, setUsernameInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');
  const { registration, login } = useAuthStore((store) => store);

  const changeUsernameInputHandler = (value: string) => {
    setUsernameInputValue(value);
  };

  const changePasswordInputHandler = (value: string) => {
    setPasswordInputValue(value);
  };

  const registrationHandler = () => {
    if (usernameInputValue.length >= 1
        && passwordInputValue.length >= 3) {
      registration(usernameInputValue, passwordInputValue);
    }
  };

  const loginHandler = () => {
    if (usernameInputValue.length >= 1
        && passwordInputValue.length >= 3) {
      login(usernameInputValue, passwordInputValue);
    }
  };

  return (
    <Container>
      <Title
        size="m"
      >
        Login or register
      </Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          value={usernameInputValue}
          placeholder="Username"
          onChangeHandler={changeUsernameInputHandler}
        />
        <PasswordInput
          value={passwordInputValue}
          onChangeHandler={changePasswordInputHandler}
        />
        <Button color="#4169e1" onClick={loginHandler}>
          Sign In
        </Button>
        <Button color="#5c41e1" onClick={registrationHandler}>Sign Up</Button>
      </Form>
    </Container>
  );
};
