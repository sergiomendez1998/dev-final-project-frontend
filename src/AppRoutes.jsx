import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './auth/pages/LoginPage';
import { UserRoutes } from './routes/UserRoutes';
import { useSelector } from 'react-redux';
import {LoginPage1} from "./auth/pages/LoginPage1.jsx";
import {UserModalForm} from "./components/UserModalForm.jsx";
import {RegisterNewUserModal} from "./components/RegisterNewUserModal.jsx";

export const AppRoutes = () => {

    const { isAuth } = useSelector(state => state.auth);

    return (
        <Routes>
            {
                isAuth
                    ? (
                        <Route path='/*' element={<UserRoutes />} />
                    )
                    : <>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to="/login" />} />
                        <Route path='/registrar' element={<RegisterNewUserModal />} />
                        <Route path='*' element={<p>Pagina No Existe</p>} />
                    </>
            }
        </Routes>
    );
}