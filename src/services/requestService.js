import { api } from "../apis/usersApi"

export const createRequest = async (request)=>{
    try {
        const response = await api.post('/request', request);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getRequests = async ()=>{
    try {
        const response = await api.get('/request');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}