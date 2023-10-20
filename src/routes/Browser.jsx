import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { URL_BASE_APP } from "../config/constants.js";
import { LoadingPage } from "../pages/LoadingPage";


const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));
const CreateRequestPage = lazy(() =>
  import("../pages/external/CreateRequestPage"),
);
const CreateCatalogPage = lazy(() =>
  import("../pages/admin/catalog/CreateCatalogPage"),
);
const CatalogPage = lazy(() => import("../pages/admin/catalog/CatalogPage"));
const NotFoundPage = lazy(() => import("../pages/error/NotFound"));
const DashboardPage = lazy(() => import("../pages/admin/Dashboard"));
const LayoutComponent = lazy(() => import("../containers/Layout"));
const LayoutLoginComponent = lazy(() => import("../containers/LayoutLogin"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));
const ProtectedLogin = lazy(() => import("./ProtectedLogin"));
const EditCatalogPage = lazy(() =>
  import("../pages/admin/catalog/EditCatalogPage"),
);
const UserPage = lazy(() => import("../pages/admin/employee/UserPage"));
const CreateUserPage = lazy(() =>
  import("../pages/admin/employee/CreateUserPage"),
);
const EditUserPage = lazy(() =>
  import("../pages/admin/employee/UpdateUserPage"),
);
const SamplesPage = lazy(() => import("../pages/admin/request/SamplesPage"));
const RequestPage = lazy(() => import("../pages/admin/request/RequestPage"));

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
              path="/request/list"
              element={
                <ProtectedRoute>
                  <RequestPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/request/:id/samples"
              element={
                <ProtectedRoute>
                  <SamplesPage />
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
              path="/catalog/edit/:type/:id"
              element={
                <ProtectedRoute>
                  <EditCatalogPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/create"
              element={
                <ProtectedRoute>
                  <CreateUserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/edit/:id"
              element={
                <ProtectedRoute>
                  <EditUserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customer/register"
              element={
                <ProtectedRoute>
                  <RegisterPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <NotFoundPage Message={"Pagina No Existe"} Number={404} />
              }
            />
          </Routes>
        </Root>
      </Suspense>
    </HashRouter>
  );
};
