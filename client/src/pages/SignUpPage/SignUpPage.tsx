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

interface StepType {
  component: () => JSX.Element,
  mainTitle: string,
  stepTitle: string
}

const STEPS: StepType[] = [
  {
    component: UsernameForm,
    mainTitle: 'Show a little imagination and come up with a username',
    stepTitle: 'username',
  },
  {
    component: PasswordForm,
    mainTitle: 'And now try to come up with a password',
    stepTitle: 'password',
  },
  {
    component: PasswordForm,
    mainTitle: 'Result',
    stepTitle: 'result',
  },
];

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
  const location = useLocation();
  const { storedValue, setValue, removeStoredItem } = useSessionStorage('stepper-form-data', []);
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
    removeStoredItem();
  }, []);

  return (
    <Container>
      <Title
        tag="h2"
        size="m"
      >
        Show a little imagination and come up with a username
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
