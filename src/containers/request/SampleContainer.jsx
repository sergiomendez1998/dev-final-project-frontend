import PropTypes from "prop-types";
import { Button } from "flowbite-react";
import { FaPen } from "react-icons/fa";
import { SamplesTable } from "../../components/tables/SamplesTable";

export const SampleContainer = ({ data, isLoading, onToggle }) => {
  return (
    <div className="mx-4 flex flex-col" id="sample-scroll">
      <div className="mb-2 flex justify-end md:mb-0">
        <Button
          color="primary"
          icon={<FaPen />}
          onClick={onToggle}
          className="me-4"
        >
          <FaPen size={25} /> Crear Muestra
        </Button>
      </div>
      <SamplesTable
        data={data?.sampleWrapper ?? []}
        exam={"Muestras"}
        isLoading={isLoading}
      />
    </div>
  );
};

SampleContainer.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
