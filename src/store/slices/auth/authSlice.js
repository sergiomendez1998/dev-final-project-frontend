import { createSlice } from '@reduxjs/toolkit';
import { setToken } from '../../../apis/usersApi';

export const authSlice = createSlice({
  name: 'auth',
  initialState: JSON.parse(sessionStorage.getItem('login')) || {
    isLogedIn: false,
    name: undefined,
    email: undefined,
    token: undefined,
    role: undefined,
  },
  reducers: {
    onLogin: (state, action) => {
      const newState = {
        ...state,
        isLogedIn: true,
        ...action.payload,
      };

      console.log('token', action.payload);
      sessionStorage.setItem('login', JSON.stringify(newState));
      setToken(newState.token);
      sessionStorage.setItem('token', `Bearer ${newState.token}`);

      return newState;
    },
    onLogout: () => {
      const newState = {
        isAuth: false,
        isAdmin: false,
        user: undefined,
        token: undefined,
        roles: [],
      };
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('login');
      sessionStorage.clear();
      setToken(newState.token);
      return newState;
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;
