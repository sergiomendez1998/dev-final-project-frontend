import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { URL_BASE_APP } from "../config/constants.js";
import { LoadingPage } from "../pages/LoadingPage";
import ProtectedPage from "./ProtectedPage";

const DocumentAnalysisPage = lazy(() =>
  import("../pages/admin/analysis/DocumentAnalysisPage"),
);
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
const HomePage = lazy(() => import("../pages/home/HomePage"));

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
                <ProtectedLogin>
                  <HomePage />
                </ProtectedLogin>
              }
            />
            <Route
              path="/Dashboard"
              element={
                <ProtectedPage>
                  <DashboardPage />
                </ProtectedPage>
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
                <ProtectedRoute operation={1}>
                  <CreateRequestPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/request/list"
              element={
                <ProtectedRoute operation={4}>
                  <RequestPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/request/:id/samples"
              element={
                <ProtectedRoute operation={8}>
                  <SamplesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sample/:id"
              element={
                <ProtectedRoute operation={28}>
                  <DocumentAnalysisPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/catalog"
              element={
                <ProtectedRoute operation={20}>
                  <CatalogPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/catalog/create/:type"
              element={
                <ProtectedRoute operation={17}>
                  <CreateCatalogPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/catalog/edit/:type/:id"
              element={
                <ProtectedRoute operation={18}>
                  <EditCatalogPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employee"
              element={
                <ProtectedRoute operation={32}>
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employee/create"
              element={
                <ProtectedRoute operation={29}>
                  <CreateUserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employee/edit/:id"
              element={
                <ProtectedRoute operation={30}>
                  <EditUserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customer/register"
              element={
                <ProtectedPage>
                  <RegisterPage />
                </ProtectedPage>
              }
            />
            <Route
              path="/Unauthorized"
              element={
                <NotFoundPage
                  Message={
                    "No tienes autorizacion para vizualizar este contenido contacta con el administrador del sistema"
                  }
                  Number={401}
                />
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
