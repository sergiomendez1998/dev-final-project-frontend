import { useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { useQuery } from "@tanstack/react-query";
import { getSampleRequest } from "../../../services/requestService";
import { SampleContainer } from "../../../containers/request/SampleContainer";
import { Modal } from "flowbite-react";
import { SampleForm } from "../../../components/forms/SampleForm";
import { convertToCreateSample } from "../../../util/utilConvert";
import { createSample } from "../../../services/sampleService";
import { v4 as uuidv4 } from "uuid";
import { ButtonBack } from "../../../components/buttons/ButtonBack";
import { SampleContext } from "../../../context/SampleContext";
import { ItemsAssigment } from "../../../containers/sample/ItemsAssigment";
import NotFound from "../../error/NotFound";

const now = new Date();
const date = now.toISOString().substring(0, 10);

const initialForm = [
  {
    uuid: uuidv4(),
    label: "",
    presentation: "",
    quantity: "0",
    sampleType: "",
    measureUnit: "",
    requestDetailId: 0,
    expirationDate: date,
  },
];

const SamplesPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [itemOpen, setItemOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedSample, setSelectedSample] = useState({});

  const { data, isLoading, isFetching, refetch, error } = useQuery({
    queryKey: ["request", id],
    queryFn: () => getSampleRequest(id),
  });

  if (error) {
    return <NotFound Message={error.message} Number={error.statusCode} />;
  }

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleItemToggle = () => {
    setItemOpen(!itemOpen);
  };

  const sendForm = async (form) => {
    const info = form.map((f) => {
      return convertToCreateSample(f);
    });

    const requestSample = {
      requestId: id,
      data: info,
    };

    const response = await createSample(requestSample);
    response.successful && refetch();
    return response;
  };

  return (
    <SampleContext.Provider
      value={{ itemOpen, setItemOpen: handleItemToggle, setSelectedSample, id }}
    >
      <div>
        <HeaderPage title={"Creacion de Muestras"} pref={"Crear"} />
        <ButtonBack />
        <h2 className="my-2 text-center text-2xl font-bold">
          Muestras Existentes
        </h2>
        <SampleContainer
          data={data}
          isLoading={isLoading || isFetching}
          onToggle={handleToggle}
        />
        <Modal
          className="z-[1000]"
          show={open}
          size={"3xl"}
          onClose={handleToggle}
        >
          <Modal.Header>Asignacion a detalle</Modal.Header>
          <SampleForm initialForm={initialForm} sendForm={sendForm} />
        </Modal>
        <Modal
          className="z-[1000]"
          show={itemOpen}
          size={"3xl"}
          onClose={handleItemToggle}
        >
          <Modal.Header>Asignacion de muestras</Modal.Header>
          <ItemsAssigment
            selectedItems={selectedItems}
            selectedSample={selectedSample}
            setSelectedItems={setSelectedItems}
            refetchRequest={refetch}
            requestId={id}
          />
        </Modal>
      </div>
    </SampleContext.Provider>
  );
};

export default SamplesPage;
