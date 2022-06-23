// REACT
import React, {
  ChangeEvent, useCallback, useState,
} from 'react';
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
import type { RegistrationFormProps } from './RegistrationForm.types';
// COMPONENTS
import { Input } from '../common';
import { Form as FormElement } from './RegistrationForm.styles';
// CONST
import { StorageKeys } from '../../const';

interface Values {
  username: string,
  password: string,
}

export const PasswordForm = () => {
  const {
    registration, isUsernameExists, isLoaded, error,
  } = useAuthStore((store) => store);
  const { storageValue, setStorageValue } = useSessionStorage(StorageKeys.SIGN_UP_FORM_DATA, []);
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState<string>('');
  const [validationError, setValidationError] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  };

  const onSubmit = useCallback(
    async (values: Values) => {
      setStorageValue<Values>(values);
      if (values.password.length < 3) {
        return setValidationError(true);
      }
      registration(values.username, values.password);
      return navigate(
        location.pathname,
        {
          state: {
            activeStep: 2,
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
            name="password"
            component={Input}
            type="password"
            label="Password"
            variant="outlined"
            required
            inputOnChange={onChange}
            inputValue={value}
            inputProps={{ minLength: 1 }}
            error={validationError}
            fullWidth
            helperText={validationError && 'The password must be longer than three characters, dear'}
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
