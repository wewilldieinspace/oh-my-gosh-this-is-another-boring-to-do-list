// COMPONENTS
import { PTag, SpanTag } from './Text.styles';
// UTILS
import { fontSize } from '../../../utils';
// TYPES
import type { TextProps } from './Text.types';

export const Text = ({
  size = 'n',
  color = 'gray',
  children,
  style,
  span = false,
}: TextProps): JSX.Element => {
  if (!span) {
    return (
      <PTag
        style={{ ...style }}
        size={fontSize(size)}
        color={color}
      >
        {children}
      </PTag>
    );
  }
  return (
    <SpanTag
      style={{ ...style }}
      size={fontSize(size)}
      color={color}
    >
      {children}
    </SpanTag>
  );
};
