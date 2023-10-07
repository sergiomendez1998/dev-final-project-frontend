import PropTypes from "prop-types";
import { TableRoot } from "./TableeRoot";
import { FloatSamples } from "../floatMenu/FloatSamples";

const columns = [
    {
        name: "Tipo",
        selector: (row) => row.sampleType.name,
        sortable: true,
        wrap: true,
      },
      {
        name: "Unidad",
        selector: (row) => row.measureUnit.name,
        sortable: true,
        maxWidth: "100px",
        hide: 'md',
      },
      {
        name: "Presentacion",
        selector: (row) => row.presentation,
        sortable: true,
        hide: 1275,
        maxWidth: "225px",
        wrap: true,
      },
      {
        name: "Cantidad",
        selector: (row) => row.quantity,
        sortable: true,
        hide: 1275,
        maxWidth: "100px",
      },
      {
        selector: (row) => (
          <FloatSamples data={row}/>
        ),
        center: true,
        minWidth: "60px",
        button: true,
      },
];

export const SamplesTable = ({ data, isLoading, exam }) => {
  return (
    <div>
      <TableRoot
        columns={columns}
        data={data}
        loading={isLoading}
        title={`${exam}`}
      />
    </div>
  );
};

SamplesTable.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  exam: PropTypes.string.isRequired,
};
