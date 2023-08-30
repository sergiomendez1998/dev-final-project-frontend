import { api } from "../apis/usersApi";

export const loginUser = async ({email, password}) => {
    try {
        return await api.post('/login', {
            email,
            password,
        });
    } catch (error) {
        throw error;
    }
}