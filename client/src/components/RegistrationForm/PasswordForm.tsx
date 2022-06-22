// MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// REACT-FINAL-FORM
import { Form, Field } from 'react-final-form';
// TYPES
import React from 'react';
import { RegistrationFormProps } from './RegistrationForm.types';
// COMPONENTS
import { Input } from '../common';

interface StepType {
  component: React.ReactNode,
  title: string
}

const STEPS = [
  {
    component: <Field
      name="username"
      component={Input}
      type="text"
      label="First Name"
      variant="outlined"
    />,
    title: 'username',
  },
  {
    component: <Field
      name="username"
      component={Input}
      type="password"
      label="First Name"
      variant="outlined"
    />,
    title: 'password',
  },
  {
    component: <div />,
    title: 'result',
  },
];

export const PasswordForm = () => (
  <div>Password form</div>
);
