import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../../store/slices/auth/authSlice";


export const useAuth = () => {

    const dispatch = useDispatch();
    const { user, isAdmin, isAuth, name, roles } = useSelector(state => state.auth);

    // const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = async ({ email, password }) => {

        try {

            const response = await loginUser({ email, password });
            const token = response.data.token;
             const claims = JSON.parse(window.atob(token.split(".")[1]));
            const username = claims.name;
            const rolesArray = Array.isArray(claims.roles) ? claims.roles : [];

            dispatch(onLogin({ user:username, isAdmin: claims.isAdmin, token, roles: rolesArray}));
            navigate('/');

        } catch (error) {
            if (error.response?.status === 401) {
                Swal.fire('Error Login', 'Username o password invalidos', 'error');
            } else if (error.response?.status === 403) {
                Swal.fire('Error Login', 'No tiene acceso al recurso o permisos!', 'error');
            } else {
                throw error;
            }
        }
    }

    const handlerLogout = () => {
        dispatch(onLogout());

    }
    return {
        login: {
            user,
            isAdmin,
            isAuth,
            name,
            roles,
        },
        handlerLogin,
        handlerLogout,
    }
}