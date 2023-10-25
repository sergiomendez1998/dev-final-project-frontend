import { api } from "../apis/usersApi"

export const vertifyCustomer = async (cui) => {
    const response = await api.get(`/customer/${cui}`)
    return response
}