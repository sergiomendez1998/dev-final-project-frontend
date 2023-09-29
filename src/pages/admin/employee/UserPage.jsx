import { FaPen, FaPlus, FaTrash } from "react-icons/fa"
import { Row } from "../../../components/grid/Row"
import { HeaderPage } from "../../../components/layout/HeaderPage"
import { AnimatedLink } from "../../../components/links/AnimatedLink"
import { TableRoot } from "../../../components/tables/TableeRoot"
import { getAllEmployees } from "../../../services/userService"
import { useQuery } from "@tanstack/react-query"
import { Button } from "flowbite-react"

const employeeColumns = [
  {
    name: "Cui",
    selector: (row) => row.cui,
  },
  {
    name: "Nit",
    selector: (row) => row.nit,
  },
  {
    name: "Nombre",
    selector: (row) => `${row.firstName} ${row.lastName}`,
  },
  {
    name: "Correo Electronico",
    selector: (row) => row.email,
  },
  {
    name: "Direccion",
    selector: (row) => row.address,
  },
  {
    name: "Telefono",
    selector: (row) => row.phoneNumber,
  },
  {
    name: "Acciones",
    selector: (row) => (
      <Button.Group>
        <Button color="primary" className="gap-2">
          <AnimatedLink
            to={`/user/edit/${row.id}`}
            className="flex"
          >
            <FaPen className="me-2" /> Editar
          </AnimatedLink>
        </Button>
        <Button
          color="failure"
          className="font-bold"
          onClick={() =>
           console.log("hola")
          }
        >
          <FaTrash className="me-2" /> <p>Eliminar</p>
        </Button>
      </Button.Group>
    ),
    center: true,
  },
]


const UserPage = () => {
  const {data, isLoading, isFetching} = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployees,
  });

  return (
    <section>
         <HeaderPage title="Mantenimiento Analistas" pref="Consultar" />
         <Row className='justify-end'>
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
  )
}

export default UserPage
