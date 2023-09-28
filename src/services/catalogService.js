import Swal from "sweetalert2";
import { api } from "../apis/usersApi";

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
    const response = await api.post(
      `/catalog?catalogType=${catalog.catalogType}`,
      {
        id: 0,
        name: catalog.catalogDTO.name,
        description: catalog.catalogDTO.description,
      },
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateCatalog = async (catalog) => {
  try {
    const response = await api.put(
      `/catalog?catalogType=${catalog.catalogType}`,
      {
        id: catalog.catalogDTO.id,
        name: catalog.catalogDTO.name,
        description: catalog.catalogDTO.description,
      },
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCatalog = async (catalog) => {
  try {
    const response = await api.delete(
      `/catalog?catalogType=${catalog.catalogType}&&id=${catalog.catalogDTO.id}`,
    );

    response.successful
      ? Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "Se ha eliminado el registro",
        })
      : Swal.fire({
          icon: "error",
          title: response.message,
          text: "No se ha podido eliminar el registro",
        });

    return response;
  } catch (error) {
    console.log(error);
  }
};
