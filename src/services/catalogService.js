import { api } from '../apis/usersApi';

export const getAllCatalogs = async (catalogType) => {
  try {
    const response = await api.get(`/catalog?catalogType=${catalogType}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCatalog = async (catalog) => {
  try {
    const response = await api.post(`/catalog?catalogType=${catalog.catalogType}`, catalog);
    return response;
  } catch (error) {
    console.log(error);
  }
}
