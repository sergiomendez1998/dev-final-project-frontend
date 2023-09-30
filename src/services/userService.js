import Swal from "sweetalert2";
import { api } from "../apis/usersApi";

export const getAllUsers = async () => {
  try {
    return await api.get("/users");
  } catch (error) {
    console.log(error);
  }
};

export const getAllEmployees = async () => {
  try {
    const response = await api.get("/employee");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createEmployee = async (user) => {
  try {
    return await api.post("/employee/register", user);
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (user) => {
  try {
    return await api.put("/employee", user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await api.delete(`/employee?id=${id}`);

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
