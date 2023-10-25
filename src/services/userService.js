import Swal from "sweetalert2";
import { api } from "../apis/usersApi";

export const getAllUsers = async () => {
  return await api.get("/users");
};

export const getAllEmployees = async () => {
  const response = await api.get("/employee");
  return response.data;
};

export const createEmployee = async (user) => {
  return await api.post("/employee/register", user);
};

export const updateEmployee = async (user) => {
  return await api.put("/employee", user);
};

export const deleteEmployee = async (id) => {
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
};
