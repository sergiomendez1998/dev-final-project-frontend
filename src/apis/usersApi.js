import axios from 'axios';
import { API_URL } from '../config/constants';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => {

    return response.data;
  },
  (error) => {
    const { response } = error;
    return response.data;
  }
);

export const setToken = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

