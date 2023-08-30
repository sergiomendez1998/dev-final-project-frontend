import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegistrationFormView } from '../components/RegistrationFormView.jsx';
import { Layout } from '../containers/Layout';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterNewUserModal } from '../components/RegisterNewUserModal';
import { LayoutLogin } from '../containers/LayoutLogin';
import ProtectedRoute from './ProtectedRoute';
import { ProtectedLogin } from './ProtectedLogin';
import { useAuth } from '../hooks/useAuth';
import { Dashboard } from '../pages/admin/Dashboard';

export const Browser = () => {
  const { isLogedIn } = useAuth();

  const Root = isLogedIn ? Layout : LayoutLogin;

  return (
    <BrowserRouter>
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
          <Route path="/registrar" element={<RegisterNewUserModal />} />
          <Route path="*" element={<p>Pagina No Existe</p>} />
        </Routes>
      </Root>
    </BrowserRouter>
  );
};
