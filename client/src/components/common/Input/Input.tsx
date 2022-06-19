import React, { useState, ChangeEvent } from 'react';
// COMPONENTS
import { Input as InputElement, Container, TogglePasswordVisibilityButton } from './Input.styles';
// TYPES
import type { InputProps } from './Input.types';

export const Input = ({
  value, placeholder, type = 'text', onChangeHandler, style,
}: InputProps) => {
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);

  if (type === 'password') {
    return (
      <Container>
        <InputElement
          style={{ paddingRight: 40 }}
          type={isPasswordHidden ? 'password' : 'text'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
        <TogglePasswordVisibilityButton
          isPasswordHidden={isPasswordHidden}
          onClick={() => setPasswordHidden(!isPasswordHidden)}
        />
      </Container>
    );
  }

  return (
    <InputElement
      style={{ ...style }}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
    />
  );
};
