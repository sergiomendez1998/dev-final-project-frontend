import { createSlice } from "@reduxjs/toolkit";
import { setToken } from "../../../apis/usersApi";
import {
  initialState,
  initializeStateOfApplication,
} from "../../../util/initializeStateOfApplication";

export const authSlice = createSlice({
  name: "auth",
  initialState: initializeStateOfApplication(),
  reducers: {
    onLogin: (state, action) => {
      const newState = {
        ...state,
        isLogedIn: true,
        ...action.payload,
      };
      sessionStorage.setItem("login", JSON.stringify(newState));
      setToken(newState.token);
      sessionStorage.setItem("token", `Bearer ${newState.token}`);
      return newState;
    },
    onLogout: () => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("login");
      sessionStorage.clear();
      setToken(initialState.token);
      return initialState;
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;
