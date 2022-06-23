// REACT
import React, { FC, useState, useEffect } from 'react';
// REACT-ROUTER-DOM
import { useLocation, Location } from 'react-router-dom';
// MUI
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// HOOKS
import { useSessionStorage } from '../../hooks/useSessionStorage';
// ZUSTAND
import { useAuthStore } from '../../data';
// COMPONENTS
import {
  Input, Title, Button,
} from '../../components';
import { Container } from './SignUpPage.styles';
import { UsernameForm, PasswordForm } from '../../components/RegistrationForm';
// CONST
import { StorageKeys, REGISTER_STEPS as STEPS } from '../../const';
// TYPES
import type { RegisterStepsType as StepType } from '../../types';

interface LocationType extends Location {
  state: {
    activeStep: number
  } | null
}
interface LocationState {
  state: {
    activeStep: number
  } | null
}

export const SignUpPage: FC = () => {
  const { state }: LocationState = useLocation() as LocationType;
  const { removeStorageItem } = useSessionStorage(StorageKeys.SIGN_UP_FORM_DATA, []);
  const [usernameInputValue, setUsernameInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');
  const { registration, login } = useAuthStore((store) => store);

  const registrationHandler = () => {
    if (usernameInputValue.length >= 1
        && passwordInputValue.length >= 3) {
      registration(usernameInputValue.trim(), passwordInputValue);
    }
  };

  const step = state ? state.activeStep : 0;

  const StepComponent = STEPS[step].component;

  useEffect(() => () => {
    removeStorageItem();
  }, []);

  return (
    <Container>
      <Title
        tag="h2"
        size="m"
      >
        {STEPS[step].mainTitle}
      </Title>
      <Stepper activeStep={step}>
        {
            STEPS.map((stepItem: StepType) => {
              const { stepTitle: title } = stepItem;
              return (
                <Step key={title}>
                  <StepLabel>{title}</StepLabel>
                </Step>
              );
            })
          }
      </Stepper>
      <StepComponent />
    </Container>
  );
};
