import PropsTypes from "prop-types"
import { Card } from "flowbite-react"


export const RequestCardTable = ({data}) => {
  return (
    <Card>
        <h5 className="text-xl font-bold">{data.requestCode}</h5>
        <article>
            <p><strong>Nombre: </strong> {data.customerFirstName}</p>
            <p><strong>Apellido: </strong> {data.customerLastName}</p>
            <p><strong>Exp: </strong> {data.customerExpedientNumber}</p>
            <p><strong>NIT: </strong> {data.customerNit}</p>
            <p><strong>Estado: </strong> {data.status}</p>
            <p><strong>Soporte: </strong> {data.supportNumber}</p>
        </article>
    </Card>
  )
}

RequestCardTable.propTypes = {
  data: PropsTypes.object.isRequired
}

