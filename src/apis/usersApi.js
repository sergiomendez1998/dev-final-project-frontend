import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:9090/api/v1',
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
  console.log('token', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

