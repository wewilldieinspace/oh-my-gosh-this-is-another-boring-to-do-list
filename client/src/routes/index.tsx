// REACT-ROUTER-DOM
import { Routes, Route, Navigate } from 'react-router-dom';
// PAGES COMPONENTS
import { AuthPage, TaskListPage, TaskItemPage } from '../pages';

export const useRoutes = (isAuth: boolean) => {
  if (true) {
    return (
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/task/:id" element={<TaskItemPage />} />
        <Route path="/auth" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<Navigate to="/auth" />} />
    </Routes>
  );
};
