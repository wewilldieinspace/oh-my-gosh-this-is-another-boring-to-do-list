// ZUSTAND
import { useAuthStore } from '../../data';
// COMPONENTS
import { Container } from './TaskList.styles';

export const TaskListPage = () => {
  const { logout } = useAuthStore((store) => store);
  return (
    <>
      <Container>Task list page</Container>
      <button type="button" onClick={logout}>logout</button>
    </>
  );
};
