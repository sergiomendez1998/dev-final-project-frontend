import { api } from '../apis/usersApi';

export const getAllUsers = async () => {
  try {
    return await api.get('/users');
  } catch (error) {
    console.log(error);
  }
};
