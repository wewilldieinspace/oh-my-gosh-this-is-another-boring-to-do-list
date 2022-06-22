import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RegistrationFormProps extends DetailedHTMLProps<
    HTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
    step: number
  }
