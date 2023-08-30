import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { loginUser } from '../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout } from '../store/slices/auth/authSlice';

export const useLogin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlerLogin = async ({ email, password }) => {
    const response = await loginUser({ email, password });

    if (response.successful) {
      dispatch(onLogin(response.data));

      navigate('/');
    }

    return response;
  };

  const handlerLogout = () => {
    dispatch(onLogout());
  };

  return {
    handlerLogin,
    handlerLogout,
  };
};
