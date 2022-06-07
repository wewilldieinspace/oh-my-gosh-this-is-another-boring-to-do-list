import React from 'react';
// COMPONENTS
import { Input as InputElement } from './Input.styles';
// TYPES
import { InputProps } from './Input.types';

export const Input = ({
  value, placeholder, type, onChangeHandler, style,
}: InputProps) => (
  <InputElement
    style={{ ...style }}
    placeholder={placeholder}
    value={value}
    type={type}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
  />
);
