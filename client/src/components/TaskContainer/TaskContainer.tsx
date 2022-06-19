// COMPONENTS
import { Container, ItemsList, ContainerHeader } from './TaskContainer.styles';
import { TaskItem } from './TaskItem';
import { Title } from '../common';
// TYPES
import type { TaskContainerProps } from './TaskContainer.types';

export const TaskContainer = ({ title, items }: TaskContainerProps) => (
  <Container>
    <ContainerHeader>
      <Title tag="h2">{title}</Title>
    </ContainerHeader>
    <ItemsList>
      {
        items.length ? items.map((item) => (
          <TaskItem key={item.task_id} item={item} />
        )) : null
      }
    </ItemsList>
  </Container>
);
