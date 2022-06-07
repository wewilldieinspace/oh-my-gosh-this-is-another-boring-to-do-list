import { DetailedHTMLProps, HTMLAttributes } from 'react';

enum InputTypesList {
  'text',
  'button',
  'checkbox',
  'color',
  'date',
  'datetime',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'time',
  'url',
  'week'
}

type InputType = keyof typeof InputTypesList;

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
      value: string,
      placeholder: string,
      type: InputType,
      onChangeHandler: (value: string) => void

  }
