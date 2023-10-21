import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Modal } from "flowbite-react";
import { ButtonBack } from "../../../components/buttons/ButtonBack";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { TableRoot } from "../../../components/tables/TableeRoot";
import { FaPen } from "react-icons/fa";
import {
    UploadAnalysisDocument,
    generalInformationForPDFAnalysis,
} from "../../../services/analysisService";
import { GeneralInformation } from "../../../containers/analysis/GeneralInformation";
import { AnalysisForm } from "../../../components/forms/AnalysisForm";
import { LoadingComponent } from "../../../components/loading/LoadingComponent";

const initialForm = {
    sampleId: "",
    resolution: "",
    analysisDocumentType: "",
    nit: "",
};

export const DocumentAnalysisPage = () => {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const { data, isLoading } = useQuery({
        queryKey: ["generalInformationPDF", id],
        queryFn: () => generalInformationForPDFAnalysis(id),
    });

    const sendForm = async (form) => {
        form.sampleId = id;
        form.nit = data["Usuario Externo"].Nit;
        const response = await UploadAnalysisDocument(form);
        return response;
    };

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
            <TableRoot columns={[]} data={[]} loading={false} title={"Documentos"} />
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
