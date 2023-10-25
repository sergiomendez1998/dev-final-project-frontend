import { api } from "../apis/usersApi";

export const createSample = async (data) => {
  const response = await api.post(`/sample/create/${data.requestId}`, data.data);

  return response;
};

export const assigmentItems = async (data) => {
  const convert = data.data.map((item) => item.value);
  if (convert.length === 0) {
    return {
      successful: false,
      message: "No se selecciono ningun item",
    }
  }
  const response = await api.post(`/sample/associate-item/${data.sampleId}`, convert);

  return response;
}

export const disAssigmentItems = async (data) => {
  const response = await api.put(`/sample/disassociate-item/${data.sampleId}?itemId=${data.itemId}`);

  return response;
}

export const deleteSample = async (sampleId) => {
  const response = await api.put(`/sample/delete/${sampleId}`);

  return response;
}
