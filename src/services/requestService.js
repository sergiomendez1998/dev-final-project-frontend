import { api } from "../apis/usersApi"

export const createRequest = async (request) => {
    try {
        const response = await api.post('/request', request);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getRequests = async () => {
    try {
        const response = await api.get('/request');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getStatusesRequest = async (requestId) => {
    try {
        const response = await api.get(`/request/requestStatuses/${requestId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getGeneralInformationRequest = async (requestId) => {
    try {
        const response = await api.get(`/request/requestGeneralInfo/${requestId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getSampleRequest = async (requestId) => {
    try {
        const response = await api.get(`/request/samples/${requestId}`);
        return response
    } catch (error) {
        console.log(error);
    }
}

export const getItemsRequest = async (requestId) => {
    try {
        const response = await api.get(`/request/items/${requestId}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteRequest = async (requestId) => {
    try {
        const response = await api.put(`/request/delete/${requestId}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const assigmentRequestForRole = async (requestId, roleId) => {
    try {
        const response = await api.put(`/request/assigment/${roleId}/${requestId}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const assigmentAndTranslateForRole = async (data) => {
    try {
        const response = await api.post(`/assigment`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const changeStatusRequest = async (data) => {
    try {
        const response = await api.post(`/stateChange`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}