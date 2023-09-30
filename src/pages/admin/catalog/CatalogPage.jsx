import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { Col } from "../../../components/grid/Col";
import { InputSelect } from "../../../components/inputs/InputSelect";
import { CATALOGS, CATALOGS_NAME } from "../../../config/constants";
import {
  deleteCatalog,
  getAllCatalogs,
} from "../../../services/catalogService";
import { TableRoot } from "../../../components/tables/TableeRoot";
import { Row } from "../../../components/grid/Row";
import { FaPlus, FaPen, FaTrash } from "react-icons/fa";
import { Button } from "flowbite-react";
import { AnimatedLink } from "../../../components/links/AnimatedLink";

const CatalogPage = () => { 

  const [catalogType, setCatalogType] = useState(CATALOGS.department);

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["catalog", catalogType],
    queryFn: () => getAllCatalogs(catalogType),
  });

  const catalogColumns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
    },
    {
      name: "Descripcion",
      selector: (row) => row.description,
    },
    {
      name: "Acciones",
      selector: (row) => (
        <Button.Group>
          <Button color="primary" className="gap-2">
            <AnimatedLink
              to={`/catalog/edit/${catalogType}/${row.id}`}
              className="flex"
            >
              <FaPen className="me-2" />
            </AnimatedLink>
          </Button>
          <Button
            color="failure"
            className="font-bold"
            onClick={() => {
              deleteCatalog({
                catalogType: catalogType,
                catalogDTO: {
                  id: row.id,
                  name: "hola",
                  description: "holas",
                },
              });
              refetch();
            }}
          >
            <FaTrash className="me-2" />
          </Button>
        </Button.Group>
      ),
      center: true,
      minWidth: "245px",
    },
  ];

  return (
    <section>
      <HeaderPage title="Catalogos" pref="Consultar" />
      <div className="flex items-center">
        <Row className="w-full">
          <Col xs={12} lg={6}>
            <InputSelect
              name={"catalogType"}
              id={"tipe"}
              label={"Tipo Catalogo"}
              onChange={(e) => setCatalogType(e.target.value)}
              placeholder={"Selecciona tipo solicitud"}
              data={CATALOGS_NAME}
              idField={"value"}
              nameField={"name"}
              value={catalogType}
              error={""}
              unSelectedValue={0}
              className={"input-form input-form-internal py-3"}
            />
          </Col>
          <Col lg={6} xs={12}>
            <AnimatedLink
              to={`/catalog/create/${catalogType}`}
              className="btn btn-primary mt-4 flex justify-between py-3 font-bold md:mt-11"
            >
              <FaPlus /> Crear Nuevo Item
            </AnimatedLink>
          </Col>
          <TableRoot
            columns={catalogColumns}
            data={data ?? []}
            loading={isLoading || isFetching}
            title={catalogType}
          />
        </Row>
      </div>
    </section>
  );
};

export default CatalogPage;
