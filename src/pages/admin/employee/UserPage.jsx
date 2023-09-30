import { FaPen, FaPlus } from "react-icons/fa";
import { Row } from "../../../components/grid/Row";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { AnimatedLink } from "../../../components/links/AnimatedLink";
import { TableRoot } from "../../../components/tables/TableeRoot";
import { deleteEmployee, getAllEmployees } from "../../../services/userService";
import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import { ButtonDelete } from "../../../components/buttons/ButtonDelete";

const employeeColumns = [
  {
    name: "Nombre",
    selector: (row) => `${row.firstName} ${row.lastName}`,
    sortable: true,
  },
  {
    name: "Departamento",
    selector: (row) => row.department.name,
    sortable: true,
    maxWidth: "100px",
  },
  {
    name: "Correo Electronico",
    selector: (row) => row.user.email,
    sortable: true,
  },
  {
    name: "Rol",
    selector: (row) => row.user.role.name,
    sortable: true,
  },
  {
    name: "Direccion",
    selector: (row) => row.address,
    sortable: true,
  },
  {
    name: "Telefono",
    selector: (row) => row.phoneNumber,
    sortable: true,
    maxWidth: "40px",
  },
  {
    name: "Acciones",
    selector: (row) => (
      <Button.Group>
        <Button color="primary" className="gap-2">
          <AnimatedLink to={`/user/edit/${row.id}`} className="flex">
            <FaPen className="me-2" />
          </AnimatedLink>
        </Button>
        <ButtonDelete
          action={() => deleteEmployee(row.id)}
          queryKey="employees"
        />
      </Button.Group>
    ),
    center: true,
    minWidth: "245px",
  },
];

const UserPage = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployees,
  });

  return (
    <section>
      <HeaderPage title="Mantenimiento Analistas" pref="Consultar" />
      <Row className="justify-end">
        <AnimatedLink
          to={`/user/create/`}
          className="btn btn-primary mt-4 flex justify-between py-3 font-bold md:mt-11"
        >
          <FaPlus /> Crear Nuevo Analista
        </AnimatedLink>
      </Row>
      <TableRoot
        columns={employeeColumns}
        data={data ?? []}
        loading={isLoading || isFetching}
        title={"Usuarios"}
      />
    </section>
  );
};

export default UserPage;
