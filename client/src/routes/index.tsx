// REACT-ROUTER-DOM
import { Routes, Route } from 'react-router-dom';
// PAGES COMPONENTS
import { AuthPage, TaskListPage } from '../pages';

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route element={<AuthPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
};
