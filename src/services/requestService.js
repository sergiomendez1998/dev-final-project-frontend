import { api } from "../apis/usersApi"

export const createRequest = async (request)=>{
    try {
        const response = await api.post('/request', request);
        return response;
    } catch (error) {
        console.log(error);
    }
}