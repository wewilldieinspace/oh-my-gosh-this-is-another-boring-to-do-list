// COMPONENTS
import { UsernameForm, PasswordForm } from '../components/RegistrationForm';
// TYPES
import type { RegisterStepsType as StepType } from '../types';

export const REGISTER_STEPS: StepType[] = [
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
