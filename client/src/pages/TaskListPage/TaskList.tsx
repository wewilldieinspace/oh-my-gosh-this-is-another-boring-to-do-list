// ZUSTAND
import { useEffect } from 'react';
import { useAuthStore, useTaskStore } from '../../data';
// COMPONENTS
import { Container } from './TaskList.styles';
import { TaskContainer } from '../../components';

export const TaskListPage = () => {
  const { logout } = useAuthStore((store) => store);
  const {
    todoList, unfinishedList,
    doneList, getTodoList,
    getUnfinishedTasks, getDoneTaskList,
  } = useTaskStore((store) => store);

  useEffect(() => {
    getTodoList();
    getUnfinishedTasks();
    getDoneTaskList();
  }, []);

  return (
    <Container>
      <TaskContainer title="to do, to do" items={todoList} />
    </Container>
  );
};
