import { setToken } from "../apis/usersApi";

const initialState = {
    isLogedIn: false,
    name: undefined,
    email: undefined,
    token: undefined,
    role: undefined,
  }

export const initializeStateOfApplication = () => {
    const state = JSON.parse(sessionStorage.getItem('login')) ?? initialState;
    setToken(state.token);
    return state;
}