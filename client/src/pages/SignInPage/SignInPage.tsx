// REACT
import React, { FC, useState } from 'react';
// REACT-ROUTER-DOM
import { useNavigate, useLocation } from 'react-router-dom';
// MUI
import Button from '@mui/material/Button';
// REACT-FINAL-FORM
import { Form, Field } from 'react-final-form';
// HOOKS
import { useSessionStorage } from '../../hooks/useSessionStorage';
// ZUSTAND
import { useAuthStore } from '../../data';
// COMPONENTS
import {
  Input, Title,
} from '../../components';
import { Container, Form as FormElement } from './SignInPage.styles';

interface StepType {
  component: React.ReactNode,
  title: string
}

export const SignInPage: FC = () => {
  const { storedValue, setValue, removeStoredItem } = useSessionStorage('stepper-form-data', []);
  const [usernameInputValue, setUsernameInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');
  const { registration, login } = useAuthStore((store) => store);
  const navigate = useNavigate();

  const loginHandler = () => {
    if (usernameInputValue.length >= 1
        && passwordInputValue.length >= 3) {
      login(usernameInputValue.trim(), passwordInputValue);
    }
  };

  const handleSignUpPageRoute = () => {
    navigate('/registration', { replace: true });
  };

  return (
    <Container>
      <Title
        tag="h1"
        size="m"
      >
        Sign in for Christ&apos;s sake
      </Title>
      <Form
        onSubmit={loginHandler}
        initialValues={storedValue}
        render={({ handleSubmit }) => (
          <FormElement onSubmit={handleSubmit}>
            <Field
              name="username"
              component={Input}
              type="text"
              label="Username"
              variant="outlined"
              required
              inputProps={{ minLength: 3 }}
            />
            <Field
              name="password"
              component={Input}
              type="password"
              label="Password"
              variant="outlined"
              required
              inputProps={{ minLength: 1 }}
            />
            <Button variant="contained" type="submit">Sign in</Button>
          </FormElement>
        )}
      />
      <Button variant="contained" onClick={handleSignUpPageRoute}>Sign up</Button>
    </Container>
  );
};
