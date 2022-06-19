import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  color?: string,
  size?: string,
  alignCenter?: boolean,
  span?: boolean,
}
