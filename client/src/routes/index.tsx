// REACT-ROUTER-DOM
import { Routes, Route, Navigate } from 'react-router-dom';
// PAGES COMPONENTS
import {
  SignInPage, SignUpPage, TaskListPage, TaskItemPage,
} from '../pages';
// TYPES
import { DeviceInfoType } from '../types';
// CONST
import { Path } from '../const';

export const useRoutes = (isAuth: boolean, deviceType: DeviceInfoType) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path={`${Path.MAIN}`} element={<TaskListPage />} />
        <Route path={`${Path.TASK}/:id`} element={<TaskItemPage />} />
        <Route path={`${Path.LOGIN}`} element={<Navigate to={`${Path.MAIN}`} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path={`${Path.LOGIN}`} element={<SignInPage />} />
      <Route path={`${Path.REGISTRATION}`} element={<SignUpPage />} />
      <Route path="/*" element={<Navigate to={`${Path.LOGIN}`} />} />
    </Routes>
  );
};
