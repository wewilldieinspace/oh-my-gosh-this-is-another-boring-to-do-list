// REACT
import React, { useCallback, useEffect } from 'react';
// REACT-ROUTER-DOM
import { useNavigate, useLocation } from 'react-router-dom';
// MUI
import Button from '@mui/material/Button';
// REACT-FINAL-FORM
import { Form, Field } from 'react-final-form';
// ZUSTAND
import { useAuthStore } from '../../data';
// HOOKS
import { useSessionStorage } from '../../hooks/useSessionStorage';
// TYPES
import { RegistrationFormProps } from './RegistrationForm.types';
// COMPONENTS
import { Input, Title, Text } from '../common';
import { Form as FormElement } from './RegistrationForm.styles';
// CONST
import { StorageKeys } from '../../const';

interface Values {
  username: string
}

export const UsernameForm = () => {
  const {
    checkTheUsername, isUsernameExists, isLoaded, error,
  } = useAuthStore((store) => store);
  const { storageValue, setStorageValue } = useSessionStorage(StorageKeys.SIGN_UP_FORM_DATA, []);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = useCallback(
    async (values: Values) => {
      setStorageValue<Values>(values);
      const isExists = await checkTheUsername(values.username.trim());

      if (isExists) {
        return;
      }
      navigate(
        location.pathname,
        {
          state: {
            activeStep: 1,
          },
        },
      );
    },
    [navigate, location],
  );

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={storageValue}
      render={({ handleSubmit }) => (
        <FormElement onSubmit={handleSubmit}>
          <Field
            name="username"
            component={Input}
            type="text"
            label="Username"
            variant="outlined"
            required
            inputProps={{ minLength: 1 }}
            error={isUsernameExists}
            fullWidth
            helperText={isUsernameExists ? 'Well, f*ck. User is already exists' : ''}
            disabled={!isLoaded || !!error}
          />

          <Button
            style={{ marginTop: isUsernameExists ? '.5em' : '1.5em' }}
            disabled={!isLoaded || !!error}
            variant="contained"
            color={isLoaded ? 'primary' : 'secondary'}
            type="submit"
          >
            next

          </Button>
        </FormElement>
      )}
    />
  );
};
