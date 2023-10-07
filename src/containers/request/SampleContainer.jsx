import PropTypes from "prop-types";
import { Accordion, Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { FaPen } from "react-icons/fa";
import { SamplesTable } from "../../components/tables/SamplesTable";

export const SampleContainer = ({ data, onOpen }) => {
  return (
    <div className="mx-4 flex flex-col gap-8 " id="sample-scroll">
      <Accordion alwaysOpen={false} collapseAll>
        {data?.map((item, idx) => (
          <Accordion.Panel key={idx}>
            <Card>
              <Accordion.Title className="border border-gray-400">
                <p>
                  <span className="text-xl font-bold">
                    {item.examType.name}
                  </span>
                </p>
                <p>
                  <span>Descripcion: {item.examType.description}</span>
                </p>
                <p>
                  <span>Desplegar para asignar</span>
                </p>
              </Accordion.Title>
            </Card>
            <Accordion.Content className="p-0">
              <div className="my-2 ms-4 md:mt-2">
                <Button color="primary" onClick={() => onOpen(item.id)}>
                  <FaPen className="me-2" /> Asignar
                </Button>
              </div>
              <SamplesTable
                data={item.examType.samples ?? []}
                exam={item.examType.name}
                isLoading={false}
              />
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

SampleContainer.propTypes = {
  data: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
};
