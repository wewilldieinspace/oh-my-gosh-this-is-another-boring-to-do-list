import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PasswordInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
      value: string,
      onChangeHandler: (value: string) => void,
  }
