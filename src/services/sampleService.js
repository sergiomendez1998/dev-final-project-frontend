import { api } from "../apis/usersApi";

export const createSample = async (data) => {
  try {
    const response = await api.post(`/sample/create/${data.requestId}`, data.data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const assigmentItems = async (data) => {
  try {
    const convert = data.data.map((item) => item.value);
    if (convert.length === 0) {
      return {
        successful: false,
        message: "No se selecciono ningun item",
      }
    }
    const response = await api.post(`/sample/associate-item/${data.sampleId}`, convert);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export const disAssigmentItems = async (data) => {
  try {
    const response = await api.put(`/sample/disassociate-item/${data.sampleId}?itemId=${data.itemId}`);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export const deleteSample = async (sampleId) => {
  try {
    const response = await api.put(`/sample/delete/${sampleId}`);

    return response;
  } catch (error) {
    console.log(error);
  }
}
