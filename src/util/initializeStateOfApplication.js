import { setToken } from "../apis/usersApi";

export const initialState = {
  isLogedIn: false,
  name: undefined,
  email: undefined,
  token: undefined,
  role: undefined,
  nit: undefined,
  userType: undefined,
  userId: 0,
  modules: [],
  authorities: [],
}

export const initializeStateOfApplication = () => {
  const state = JSON.parse(sessionStorage.getItem('login')) ?? initialState;
  setToken(state.token);
  return state;
}