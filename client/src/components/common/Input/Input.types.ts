import { DetailedHTMLProps, HTMLAttributes, HTMLInputTypeAttribute } from 'react';

type InputElement = HTMLInputElement | HTMLDivElement

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<InputElement>,
    InputElement
  > {
      value: string,
      placeholder: string,
      type?: HTMLInputTypeAttribute,
      onChangeHandler: (value: string) => void

  }
