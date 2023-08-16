import axios from "axios";

export const loginUser = async ({email, password}) => {
    try {
        return await axios.post('http://localhost:9090/login', {
            email,
            password,
        });
    } catch (error) {
        throw error;
    }
}