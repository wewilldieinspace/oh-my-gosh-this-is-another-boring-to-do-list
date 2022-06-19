import { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { TaskType } from '../../types';

export interface TaskContainerProps extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
    title: string,
    items: TaskType[]
  }

export interface TaskItemProps extends DetailedHTMLProps<
    HTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
    item: TaskType
  }
