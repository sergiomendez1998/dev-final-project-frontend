import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({

    name: 'auth',
    initialState: JSON.parse(sessionStorage.getItem('login')) || {
        isAuth: false,
        isAdmin: false,
        user: undefined,
        token: undefined,
        roles: [],
    },
    reducers: {
        onLogin: (state, action) => {
            const newState = {
                ...state,
                isAuth: true,
                isAdmin: action.payload.isAdmin,
                user: action.payload.user,
                token: action.payload.token,
                roles: action.payload.roles,
            };

            sessionStorage.setItem('login', JSON.stringify(
                newState
            ));

            sessionStorage.setItem('token', `Bearer ${newState.token}`);
            console.log('checking item', newState);

            return newState;
        },
        onLogout: (state, action) => {
           const newState = {
                isAuth: false,
                isAdmin: false,
                user: undefined,
                token: undefined,
                roles: [],
           }
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('login');
            sessionStorage.clear();
           console.log('newState for logout', newState);
           return newState;
        }
    }
});

export const {onLogin, onLogout} = authSlice.actions;