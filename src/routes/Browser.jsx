import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { RegistrationFormView } from '../components/RegistrationFormView.jsx';
import { Layout } from '../containers/Layout';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterNewUserModal } from '../components/RegisterNewUserModal';
import { LayoutLogin } from '../containers/LayoutLogin';
import ProtectedRoute from './ProtectedRoute';
import { ProtectedLogin } from './ProtectedLogin';
import { useAuth } from '../hooks/useAuth';
import { Dashboard } from '../pages/admin/Dashboard';
import { NotFound } from '../pages/error/NotFound.jsx';
import { RegisterPage } from '../pages/auth/RegisterPage.jsx';
import { URL_BASE_APP } from '../config/constants.js';
import { CatalogPage } from '../pages/admin/CatalogPage.jsx';

export const Browser = () => {
  const { isLogedIn } = useAuth();

  const Root = isLogedIn ? Layout : LayoutLogin;

  return (
    <HashRouter basename={URL_BASE_APP}>
      <Root>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/registrationForm" element={<RegistrationFormView />} />
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
          {/* <Route
            path="/request/create"
            element={
              <ProtectedRoute>
                <CreateRequestPage/>
              </ProtectedRoute>
            }
          /> */}
           <Route
            path="/catalog"
            element={
              <ProtectedRoute>
                <CatalogPage/>
              </ProtectedRoute>
            }
          />
          <Route path="/registrar" element={<RegisterNewUserModal />} />
          <Route
            path="*"
            element={<NotFound Message={'Pagina No Existe'} Number={404} />}
          />
        </Routes>
      </Root>
    </HashRouter>
  );
};
