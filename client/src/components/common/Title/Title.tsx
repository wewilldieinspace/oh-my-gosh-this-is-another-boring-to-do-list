// COMPONENTS
import { H1Tag } from './Title.styles';
// UTILS
import { fontSize } from '../../../utils';
// TYPES
import { TitleProps } from './Title.types';

export const Title = ({
  size = 's',
  children,
  style,
}: TitleProps): JSX.Element => (
  <H1Tag
    size={fontSize(size)}
    style={{ ...style }}
  >
    {children}
  </H1Tag>
);
