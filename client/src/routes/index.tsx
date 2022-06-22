// REACT-ROUTER-DOM
import { Routes, Route, Navigate } from 'react-router-dom';
// PAGES COMPONENTS
import {
  SignInPage, SignUpPage, TaskListPage, TaskItemPage,
} from '../pages';
// TYPES
import { DeviceInfoType } from '../types';

export const useRoutes = (isAuth: boolean, deviceType: DeviceInfoType) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/task/:id" element={<TaskItemPage />} />
        <Route path="/login" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/registration" element={<SignUpPage />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
