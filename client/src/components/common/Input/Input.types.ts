import { DetailedHTMLProps, HTMLAttributes, HTMLInputTypeAttribute } from 'react';

type InputElement = HTMLInputElement | HTMLDivElement

interface InputType {
  checked: boolean | undefined,
  name: string,
  onBlur: () => void,
  onChange: () => void,
  onFocus: () => void,
  type: HTMLInputTypeAttribute,
  value: string,
}

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<InputElement>,
    InputElement
  > {
      // value: string,
      // placeholder: string,
      // type?: HTMLInputTypeAttribute,
      // onChangeHandler: (value: string) => void,
      input: InputType,
      variant: 'standard' | 'filled' | 'outlined' | undefined,
      label: string,
      toggleInputType?: () => void,

  }
