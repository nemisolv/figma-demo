import AuthLayout from '@layouts/AuthLayout';
import { element } from 'prop-types';
import { lazy } from 'react';

const Login = lazy(() => import('@pages/Auth/Login'));
const Register = lazy(() => import('@pages/Auth/Register'));
const ForgotPassword = lazy(() => import('@pages/Auth/ForgotPassword'));
const VerifyEmail = lazy(() => import('@pages/Auth/VerifyEmail'));
const ResetPassword = lazy(() => import('@pages/Auth/ResetPasword'));

const authRoutes = {
  path: 'auth',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: 'reset-password',
      element: <ResetPassword />,
    },
    {
      path: 'verify-email',
      element: <VerifyEmail />,
    },
  ],
};

export default authRoutes;
