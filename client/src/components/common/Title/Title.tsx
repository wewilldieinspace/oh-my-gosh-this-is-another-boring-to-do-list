// COMPONENTS
import { H1Tag, H2Tag, H3Tag } from './Title.styles';
// UTILS
import { fontSize } from '../../../utils';
// TYPES
import type { TitleProps } from './Title.types';

export const Title = ({
  size = 's',
  children,
  style,
  tag = 'h3',
}: TitleProps): JSX.Element => {
  if (tag === 'h1') {
    return (
      <H1Tag
        size={fontSize(size)}
        style={{ ...style }}
      >
        {children}
      </H1Tag>
    );
  }

  if (tag === 'h2') {
    return (
      <H2Tag
        size={fontSize(size)}
        style={{ ...style }}
      >
        {children}
      </H2Tag>
    );
  }

  return (
    <H3Tag
      size={fontSize(size)}
      style={{ ...style }}
    >
      {children}
    </H3Tag>
  );
};
