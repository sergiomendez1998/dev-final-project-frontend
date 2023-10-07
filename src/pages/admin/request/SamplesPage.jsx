import { useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { useQuery } from "@tanstack/react-query";
import { getExamsRequest } from "../../../services/requestService";
import { SampleContainer } from "../../../containers/request/SampleContainer";
import { LoadingComponent } from "../../../components/loading/LoadingComponent";
import { Modal } from "flowbite-react";
import { SampleForm } from "../../../components/forms/SampleForm";
import { convertToCreateSample } from "../../../util/utilConvert";
import { createSample } from "../../../services/sampleService";

const now = new Date();
const date = now.toISOString().substring(0, 10);

const initialForm = [
  {
    label: "",
    presentation: "",
    quantity: 0,
    sampleType: "",
    measureUnit: "",
    requestDetailId: 0,
    expirationDate: date,
  },
];

const SamplesPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [idSample, setIdSample] = useState(null);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["request", id],
    queryFn: () => getExamsRequest(id),
  });

  const handleOpen = (id) => {
    setOpen(true);
    setIdSample(id);
  };

  const sendForm = async (form) => {
    const info = form.map((f) => {
        f.requestDetailId = idSample;
        return convertToCreateSample(f);
    });
    const response = await createSample(info);
    return response;
  };

  return (
    <section>
      <HeaderPage title={"Asignacion de Muestras"} pref={"Crear"} />
      <h2 className="my-2 text-center text-2xl font-bold">
        Tipos de examenes existentes
      </h2>
      {isLoading || isFetching ? (
        <LoadingComponent />
      ) : (
        <SampleContainer data={data} onOpen={handleOpen} />
      )}
      <Modal className="z-[1000]" show={open} size={'3xl'} onClose={() => setOpen(!open)}>
        <Modal.Header>Asignacion a detalle {idSample}</Modal.Header>
        <SampleForm initialForm={initialForm} sendForm={sendForm} />
      </Modal>
    </section>
  );
};

export default SamplesPage;
