// COMPONENTS
import { TextProps } from './Text.types';
import { Element } from './Text.styles';
// UTILS
import { fontSize } from '../../../utils';

export const Text = ({
  size = 'n',
  color = 'gray',
  children,
  style,
}: TextProps): JSX.Element => (
  <Element
    style={{ ...style }}
    size={fontSize(size)}
    color={color}
  >
    {children}
  </Element>
);
