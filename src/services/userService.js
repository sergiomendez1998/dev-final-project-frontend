import { api } from "../apis/usersApi";

const BASE_URL = '';

export const findAll = async() => {
    try {
        const response = await api.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const save = async ({ username, email, password, admin }) => {
    try {
        return await api.post(BASE_URL, {
            username,
            email,
            password,
            admin,
        });
    } catch (error) {
        throw error;
    }
}

export const update = async({ id, username, email, admin }) => {
    try {
        return await api.put(`${BASE_URL}/${id}`, {
            username,
            email,
            admin,
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await usersApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}