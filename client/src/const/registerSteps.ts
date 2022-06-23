// COMPONENTS
import { UsernameForm, PasswordForm, RegistrationResult } from '../components/RegistrationForm';
// TYPES
import type { RegisterStepsType as StepType } from '../types';

export const REGISTER_STEPS: StepType[] = [
  {
    component: UsernameForm,
    mainTitle: 'Show a little imagination and come up with a username',
    stepTitle: 'username',
    failMessage: 'Well, f*ck. User is already exists.',
  },
  {
    component: PasswordForm,
    mainTitle: 'And now try to come up with a password',
    stepTitle: 'password',
    failMessage: 'The password must be longer than three characters, dear.',
  },
  {
    component: RegistrationResult,
    mainTitle: 'Result',
    stepTitle: 'result',
    failMessage: 'Oooops. I probably screwed up. Please pretend like nothing happened and try again.',
    successMessage: 'Oh, yes, boy. Everything worked out. Now you can do your boring things.',
  },
];
