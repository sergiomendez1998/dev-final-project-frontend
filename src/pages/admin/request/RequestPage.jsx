import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../../../services/requestService";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { TableRoot } from "../../../components/tables/TableeRoot";
import { FloatContext } from "../../../components/floatMenu/FloatContext";
import { RequestCardTable } from "../../../components/cards/RequestCardTable";
import { SampleContext } from "../../../context/SampleContext";
import { Modal, Tabs } from "flowbite-react";
import { AssigmentRequestForm } from "../../../components/forms/AssigmentRequestForm";
import { ChangeStateForm } from "../../../components/forms/ChangeStateForm";
import NotFound from "../../error/NotFound";

const requestColumns = [
  {
    name: "Cliente",
    selector: (row) => `${row.customerFirstName} ${row.customerLastName}`,
    sortable: true,
    wrap: true,
  },
  {
    name: "Expediente",
    selector: (row) => row.customerExpedientNumber,
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
    name: "Soliciutd",
    selector: (row) => row.requestCode,
    sortable: true,
    hide: "md",
  },
  {
    name: "Soporte",
    selector: (row) => row.supportNumber,
    sortable: true,
    maxWidth: "180px",
    hide: "sm",
  },
  {
    name: "Estado",
    selector: (row) => row.status,
    center: true,
    sortable: true,
    maxWidth: "180px",
    hide: "sm",
  },
  {
    name: "Fecha de creacion",
    selector: (row) => row.creationDate,
    center: true,
    sortable: true,
    hide: 1380,
    maxWidth: "180px",
  },
  {
    selector: (row) => <FloatContext data={row} />,
    center: true,
    minWidth: "60px",
    button: true,
  },
];

const RequestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState({});

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests,
  });

  if (error) {
    return <NotFound Message={error.message} Number={error.statusCode} />;
  }

  return (
    <SampleContext.Provider
      value={{
        itemOpen: isOpen,
        setItemOpen: handleToggle,
        setSelectedSample: setSelectedRequest,
        id: 0,
      }}
    >
      <section className="w-full">
        <HeaderPage title="Solicitudes" pref="Consulta" />
        <TableRoot
          columns={requestColumns}
          data={data ?? []}
          loading={isLoading || isFetching}
          title={"Solicitudes"}
          Component={RequestCardTable}
        />
      </section>
      <Modal
        className="z-[1000]"
        show={isOpen}
        size={"3xl"}
        onClose={handleToggle}
      >
        <Modal.Header className="font-bold">
          Asignacion y Traslado de Solicitud No. {selectedRequest.requestCode}
        </Modal.Header>
        <section className="min-h-[50vh] px-8">
          <Tabs.Group
            aria-label="Tabs with underline" style="pills"
          >
            <Tabs.Item title="Asignacion y Traslado">
              <AssigmentRequestForm data={selectedRequest} />
            </Tabs.Item>
            <Tabs.Item title="Cambio de Estado">
              <ChangeStateForm data={selectedRequest} />
            </Tabs.Item>
          </Tabs.Group>
        </section>
      </Modal>
    </SampleContext.Provider>
  );
};

export default RequestPage;
