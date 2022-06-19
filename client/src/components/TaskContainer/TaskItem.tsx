// REACT-ROUTER-DOM
import { Link } from 'react-router-dom';
// COMPONENTS
import { ItemContainer as Container, ItemHeader, DeadlineDate } from './TaskContainer.styles';
import { Title, Text } from '../common';
// TYPES
import type { TaskItemProps } from './TaskContainer.types';
// UTILS
import { formatDate } from '../../utils';

export const TaskItem = ({
  item,
}: TaskItemProps) => {
  const {
    title, body, finish_date, task_id,
  } = item;
  return (
    <Container>
      <ItemHeader>
        <Link to={`/task/${task_id}`}>
          <Title tag="h3">{title}</Title>
        </Link>
        { finish_date ? <DeadlineDate>{formatDate(finish_date)}</DeadlineDate> : null }
      </ItemHeader>
      <Text size="s">{body}</Text>
    </Container>
  );
};
