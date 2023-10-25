import { api } from '../apis/usersApi';

export const loginUser = async (form) => {
  return await api.post('/login', form);
};

export const registerUser = async (form) => {
  return await api.post('/customer/register', form);
};
