// COMPONENTS
import { Button as ButtonElement } from './Button.styles';
// TYPES
import type { ButtonProps } from './Button.types';

export const Button = ({ color, children, onClick }: ButtonProps): JSX.Element => (
  <ButtonElement onClick={onClick} bgColor={color}>{children}</ButtonElement>
);
