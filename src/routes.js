import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import { RxListPage } from './pages/RxList/RxListPage';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function Router() {
  return useRoutes([
    {
      path: '/auth',
      element: <Login />,
      children: [
        { path: 'login', element: <Login /> },
      ],
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute> <DashboardLayout /> </ProtectedRoute>,
      children: [
        { path: 'app', element:  <ProtectedRoute> <DashboardApp /></ProtectedRoute> },
        { path: 'rxlist', element: <RxListPage /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/auth/login" /> },
        { path: 'dashboard', element: <ProtectedRoute> <DashboardApp /> </ProtectedRoute>   },
        { path: 'register', element: <Register /> },
        { path: 'rx', element: <RxListPage /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
