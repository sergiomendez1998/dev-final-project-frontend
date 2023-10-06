import PropTypes from "prop-types";
import { getStatusesRequest } from "../../services/requestService";
import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

export const Statuses = ({ data }) => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await getStatusesRequest(data.id);
      setStatus(response);
    };
    get();
  }, [data]);

  return (
    <section className="max-h-[35vh]">
      {status.map((s, idx) => (
        <Card key={idx} className="my-2 bg-sky-500">
          <p className="text-start">
            <strong>Estado: </strong> {s.statusName}
          </p>
          <p className="text-start">
            <strong>Fecha Asignada: </strong> {s.assignedDate}
          </p>
          <p className="text-start">
            <strong>Solicitud: </strong> {s.requestCode}
          </p>
        </Card>
      ))}      
    </section>
  );
};

Statuses.propTypes = {
  data: PropTypes.object.isRequired,
};
