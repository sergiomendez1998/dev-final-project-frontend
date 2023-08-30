import { createSlice } from '@reduxjs/toolkit';

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

      sessionStorage.setItem('login', JSON.stringify(newState));

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
      return newState;
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;
