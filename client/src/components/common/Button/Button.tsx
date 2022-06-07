// COMPONENTS
import { Button as ButtonElement } from './Button.styles';
// TYPES
import { ButtonProps } from './Button.types';

export const Button = ({ color, children, onClick }: ButtonProps): JSX.Element => (
  <ButtonElement onClick={onClick} bgColor={color}>{children}</ButtonElement>
);
