import { api } from "../apis/usersApi";

export const createSample = async (data) => {
  try {
    const response = await api.post(`/sample/create`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
};
