import { api } from "../apis/usersApi"

export const vertifyCustomer = async (cui) => {
    try {
        const response = await api.get(`/customer/${cui}`)
        return response
    } catch (error) {
        console.log(error);
    }
}