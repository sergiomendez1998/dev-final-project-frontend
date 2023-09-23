import { api } from "../apis/usersApi";


export const getAllCatalogs = async (catalogType) => {
    try {
      return await api.get(`/catalog?catalogType=${catalogType}`);
    } catch (error) {
      console.log(error);
    }
  };