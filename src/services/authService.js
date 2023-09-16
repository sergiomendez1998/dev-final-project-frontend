import { api } from '../apis/usersApi';

export const loginUser = async (form) => {
  try {
    return await api.post('/login', form);
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (form) => {
  try {
    return await api.post('/customer/register', form);
  } catch (error) {
    console.log(error);
  }
};
