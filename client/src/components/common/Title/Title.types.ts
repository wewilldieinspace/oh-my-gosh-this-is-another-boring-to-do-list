import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TitleProps extends DetailedHTMLProps<
    HTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  >{
    size?: string;
    tag?: string
  }
