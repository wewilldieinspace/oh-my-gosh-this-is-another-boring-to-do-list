// REACT
import React, { ChangeEvent, useState } from 'react';
// MUI
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// TYPES
import type { InputProps } from './Input.types';

export const Input = ({
  input,
  className,
  label,
  variant,
  required = false,
  error = false,
  inputProps,
  helperText = '',
  color = 'primary',
  disabled = false,
  inputOnChange,
}: any) => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
  const { type } = input;

  if (type === 'password') {
    return (
      <TextField
        {...input}
        type={isPasswordVisible ? 'text' : 'password'}
        value={input.value}
        className={className}
        label={label}
        variant={variant}
        required={required}
        error={error}
        helperText={error || helperText}
        color={color}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          input.onChange(e);
          inputOnChange(e);
        }}
        disabled={disabled}
        FormHelperTextProps={{
          sx: { margin: 0, textAlign: 'center' },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }

  return (
    <TextField
      {...input}
      className={className}
      label={label}
      error={error}
      helperText={helperText}
      variant={variant}
      required={required}
      inputProps={inputProps}
      color={color}
      disabled={disabled}
      FormHelperTextProps={{
        sx: { margin: 0, textAlign: 'center' },
      }}
    />
  );
};
