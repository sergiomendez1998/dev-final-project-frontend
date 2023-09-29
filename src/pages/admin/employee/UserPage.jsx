import { FaPlus } from "react-icons/fa"
import { Row } from "../../../components/grid/Row"
import { HeaderPage } from "../../../components/layout/HeaderPage"
import { AnimatedLink } from "../../../components/links/AnimatedLink"
import { TableRoot } from "../../../components/tables/TableeRoot"



const UserPage = () => {
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
          {/* <TableRoot
            columns={catalogColumns}
            data={data ?? []}
            loading={isLoading}
            title={"Usuarios"}
          /> */}      
    </section>
  )
}

export default UserPage
