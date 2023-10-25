import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Modal } from "flowbite-react";
import { ButtonBack } from "../../../components/buttons/ButtonBack";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { TableRoot } from "../../../components/tables/TableeRoot";
import { FaFilePdf, FaPen } from "react-icons/fa";
import {
    UploadAnalysisDocument,
    generalInformationForPDFAnalysis,
    getAnalysisDocument,
} from "../../../services/analysisService";
import { GeneralInformation } from "../../../containers/analysis/GeneralInformation";
import { AnalysisForm } from "../../../components/forms/AnalysisForm";
import { LoadingComponent } from "../../../components/loading/LoadingComponent";
import { API_URL } from "../../../config/constants";
import NotFound from "../../error/NotFound";

const initialForm = {
    sampleId: "",
    resolution: "",
    analysisDocumentType: "",
    nit: "",
};

const columns = [
    {
        name: "id",
        selector: (row) => row.id,
        sortable: true,
        maxWidth: "100px",
    },
    {
        name: "Codigo",
        selector: (row) => row.documentCode,
        sortable: true,
        maxWidth: "180px",
        hide: "md",
    },
    {
        name: "Nit",
        selector: (row) => row.customerNit,
        sortable: true,
        hide: 1275,
        maxWidth: "100px",
    },
    {
        name: "Tipo",
        selector: (row) => row.documentType,
        sortable: true,
        hide: 1275,
        maxWidth: "100px",
    },

    {
        name: "Resolucion",
        selector: (row) => row.resolution,
        sortable: true,
        wrap: true,
    },
    {
        name: "Creacion",
        selector: (row) => row.createdAt.substring(0, 10),
        sortable: true,
        hide: 1275,
        maxWidth: "100px",
    },
    {
        name: "Descarga",
        selector: (row) => (
            <Button
                size="sm"
                color="failure"
                href={`${API_URL}/analysis-document/download/${row.id}`}
            >
                <FaFilePdf />
            </Button>
        ),
        sortable: false,
        maxWidth: "135px",
        center: true,
    },
];

export const DocumentAnalysisPage = () => {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const { data, isLoading, error: generalError } = useQuery({
        queryKey: ["generalInformationPDF", id],
        queryFn: () => generalInformationForPDFAnalysis(id),
    });

    if (generalError) {
        setError(generalError);
    }

    const { data: info, isLoading: isLoadingInfo, refetch, error: documentError } = useQuery({
        queryKey: ["documents", id],
        queryFn: () => getAnalysisDocument(id),
    });

    if (documentError) {
        setError(documentError);
    }

    const sendForm = async (form) => {
        form.sampleId = id;
        form.nit = data["Usuario Externo"].Nit;
        const response = await UploadAnalysisDocument(form);
        response.successful && refetch();
        return response;
    };

    if (error) {
        return <NotFound Message={error.message} Number={error.statusCode} />;
    }

    return (
        <section>
            <HeaderPage title="Creacion de Analisis" pref={"Crear"} />
            <ButtonBack />
            <div className="mb-2 flex justify-end md:mb-0">
                <Button
                    color="primary"
                    icon={<FaPen />}
                    onClick={handleToggle}
                    className="me-4"
                >
                    <FaPen size={25} /> Crear Documento de Analisis
                </Button>
            </div>
            <TableRoot
                columns={columns}
                data={info ?? []}
                loading={isLoadingInfo}
                title={"Documentos"}
            />
            <Modal
                show={isOpen}
                onClose={handleToggle}
                size="3xl"
                className="z-[1000]"
            >
                <Modal.Header>Creacion de Documento de Analisis</Modal.Header>
                <Modal.Body className="max-h-[80vh] overflow-y-auto">
                    <GeneralInformation data={data} isLoading={isLoading} />
                    {!isLoading ? (
                        <AnalysisForm
                            initialForm={initialForm}
                            sendForm={sendForm}
                            handleToggle={handleToggle}
                            data={data}
                        />
                    ) : (
                        <LoadingComponent />
                    )}
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default DocumentAnalysisPage;
