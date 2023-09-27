import { lazy, Suspense,  } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { URL_BASE_APP } from '../config/constants.js';
import { LoadingPage } from '../pages/LoadingPage';

const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'));
const CreateRequestPage = lazy(() => import('../pages/external/CreateRequestPage'));
const CreateCatalogPage = lazy(() => import('../pages/admin/CreateCatalogPage'));
const CatalogPage = lazy(() => import('../pages/admin/CatalogPage'));
const NotFoundPage = lazy(() => import('../pages/error/NotFound'));
const DashboardPage = lazy(() => import('../pages/admin/Dashboard'));
const LayoutComponent = lazy(() => import('../containers/Layout'));
const LayoutLoginComponent = lazy(() => import('../containers/LayoutLogin'));
const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
const ProtectedLogin = lazy(() => import('./ProtectedLogin'));


export const Browser = () => {
  const { isLogedIn } = useAuth();

  const Root = isLogedIn ? LayoutComponent : LayoutLoginComponent;

  return (
    <HashRouter basename={URL_BASE_APP}>
      <Suspense fallback={<LoadingPage />}>
      <Root>       
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedLogin>
                <LoginPage />
              </ProtectedLogin>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedLogin>
                <RegisterPage />
              </ProtectedLogin>
            }
          />
          <Route
            path="/request/create"
            element={
              <ProtectedRoute>
                <CreateRequestPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <ProtectedRoute>
                <CatalogPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog/create/:type"
            element={
              <ProtectedRoute>
                <CreateCatalogPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<NotFoundPage Message={'Pagina No Existe'} Number={404} />}
          />
        </Routes>      
      </Root>
      </Suspense>
    </HashRouter>
  );
};
