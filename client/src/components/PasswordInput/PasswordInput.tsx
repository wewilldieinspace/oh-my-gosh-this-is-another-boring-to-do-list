// REACT
import { useState } from 'react';
// COMPONENTS
import { Container, TogglePasswordVisibilityButton } from './PasswordInput.styled';
import { Input } from '..';
// TYPES
import { PasswordInputProps } from './PasswordInput.types';

export const PasswordInput = ({ value, onChangeHandler }: PasswordInputProps): JSX.Element => {
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);
  return (
    <Container>
      <Input
        style={{ paddingRight: 40 }}
        type={isPasswordHidden ? 'password' : 'text'}
        onChangeHandler={onChangeHandler}
        value={value}
        placeholder="Password"
      />
      <TogglePasswordVisibilityButton
        isPasswordHidden={isPasswordHidden}
        onClick={() => setPasswordHidden(!isPasswordHidden)}
      />
    </Container>
  );
};
