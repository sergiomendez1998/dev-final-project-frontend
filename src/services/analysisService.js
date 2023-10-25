import { api } from "../apis/usersApi"
import { toFormData } from "../util/utilConvert";


export const generalInformationForPDFAnalysis = async (sampleId) => {
    try {
        const response = await api.get(`/analysis-document/generalInformationForPDF/${sampleId}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const UploadAnalysisDocument = async (data) => {
    const convert = toFormData(data)
    const response = await api.post(`/analysis-document/upload`, convert, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response;
}

export const getAnalysisDocument = async (sampleId) => {
    const response = await api.get(`/analysis-document/${sampleId}`);
    return response.data;
}