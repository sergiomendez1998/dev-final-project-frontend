import { object, func } from "prop-types";
import { useForm } from "../../hooks/useForm";
import { Response } from "../messages/Response";
import { Col } from "../grid/Col";
import { Button } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { InputForm } from "../inputs/InputForm";
import { CATALOGS } from "../../config/constants";
import { useQuery } from "@tanstack/react-query";
import { getAllCatalogs } from "../../services/catalogService";
import { InputSelect } from "../inputs/InputSelect";
import { FaFilePdf } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AnalysisPDF } from "../../reports/analysis/AnalysisPDF";

const validateForm = (form) => {
    const errors = {};

    if (!form.resolution) {
        errors.resolution = "Las observaciones son requeridas";
    }
    if (!form.analysisDocumentType) {
        errors.analysisDocumentType = "El tipo de documento es requerido";
    } else if (form.analysisDocumentType == 0) {
        errors.analysisDocumentType = "El tipo de documento es requerido";
    }

    return errors;
};

export const AnalysisForm = ({ initialForm, sendForm, data }) => {
    const { data: analysisDocumentType } = useQuery({
        queryKey: ["catalog", CATALOGS.analysisDocumentType],
        queryFn: () => getAllCatalogs(CATALOGS.analysisDocumentType),
    });

    const {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleChangeFile,
        loading,
        response,
    } = useForm(initialForm, validateForm, sendForm);

    return (
        <section>
            {response && (
                <Response message={response.message} type={response.successful} />
            )}
            <form onSubmit={handleSubmit} className="flex flex-wrap">
                <Col sm={12} md={6}>
                    <InputSelect
                        name={"analysisDocumentType"}
                        id={"analysisDocumentType"}
                        label={"Tipo de Analisis"}
                        onChange={handleChange}
                        placeholder={"Selecciona tipo de analysis"}
                        value={form.analysisDocumentType}
                        error={errors.analysisDocumentType}
                        data={analysisDocumentType ?? []}
                        idField={"id"}
                        nameField={"description"}
                        unSelectedValue={0}
                        className={"input-form input-form-internal py-3"}
                    />
                </Col>
                <Col xs={12} md={6} className={"mt-2 md:mt-12"}>
                    {!(form.resolution.length < 10 || !form.analysisDocumentType) && (
                        <Button color="failure" className="py-1 font-bold">
                            <PDFDownloadLink
                                document={
                                    <AnalysisPDF
                                        documento={
                                            analysisDocumentType?.find(
                                                (x) => x.id == form.analysisDocumentType,
                                            )?.description
                                        }
                                        observations={form.resolution}
                                        data={data}
                                    />
                                }
                                fileName="DocumentoDeAnalysis.pdf"
                                className="flex items-center"
                            >
                                <FaFilePdf size={25} className="me-2" /> PDF
                            </PDFDownloadLink>
                        </Button>
                    )}
                </Col>
                <Col xs={12} lg={6}>
                    <InputForm
                        label="Observaciones"
                        name="resolution"
                        error={errors.resolution}
                        onChange={handleChange}
                        value={form.resolution}
                        placeholder={"resolucion de analisis"}
                        type={"text"}
                        className="input-form input-form-internal py-3"
                    />
                </Col>
                <Col md={6} sm={12}>
                    <InputForm
                        name={"file"}
                        id={"file"}
                        label={"Documento PDF"}
                        type="file"
                        onChange={handleChangeFile}
                        placeholder={"seleccione una foto para el empleado"}
                        error={errors.file}
                        className={"input-form input-form-internal py-2"}
                    />
                </Col>
                <Col xs={12} lg={12} className={"mt-12 flex justify-center"}>
                    <Button
                        isProcessing={loading}
                        processingSpinner={
                            <AiOutlineLoading className="h-6 w-6 animate-spin" />
                        }
                        color="primary"
                        type="submit"
                    >
                        Crear Documento de Analisis
                    </Button>
                </Col>
            </form>
        </section>
    );
};

AnalysisForm.propTypes = {
    initialForm: object.isRequired,
    sendForm: func.isRequired,
    data: object.isRequired,
};
