import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { FaPen } from "react-icons/fa";

export const SampleContainer = ({ data, onOpen }) => {
  return (
    <div className="mx-4 flex flex-col gap-8">
      {data?.map((item, key) => (
        <Card key={key}>
          <section className="flex flex-row justify-between">
            <article>
              <p>
                <span className="text-xl font-bold">{item.examType.name}</span>
              </p>
              <p>
                <span>Descripcion: {item.examType.description}</span>
              </p>
            </article>
            <div>
              <Button color="primary" onClick={()=>onOpen(item.id)}>
                <FaPen className="me-2" /> Asignar
              </Button>
            </div>
          </section>
        </Card>
      ))}
    </div>
  );
};

SampleContainer.propTypes = {
  data: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
};
