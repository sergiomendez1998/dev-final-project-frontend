import axios from 'axios';
import { API_URL } from '../config/constants';
import { InternalServerError, UnauthorizedError } from '../util/errors';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => {

    return response.data;
  },
  (error) => {
    const { response } = error;

    if (response.status === 401) {
      throw new UnauthorizedError("Tu sesión ha expirado vuelve a iniciar sesión");
    } else if (response.status == 400) {
      return response.data;
    } else if (response.status == 500) {
      throw new InternalServerError("Hubo un error en el servidor, Notifica al desarrollador");
    }

    return response.data;
  }
);

export const setToken = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

