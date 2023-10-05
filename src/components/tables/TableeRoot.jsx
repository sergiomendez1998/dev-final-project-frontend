import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import { compactGrid } from "../../theme/tableTheme";
import { LoadingComponent } from "../loading/LoadingComponent";
import { MesajeNoData } from "../messages/MesajeNoData";
import { PAGINATION_OPTIONS, SELECTED_MESSAGE } from "../../config/constants";
import { FaFileExcel } from "react-icons/fa";
import { Button } from "flowbite-react";
import { exportToExcel } from "../../util/cleanDataToExcel";
import { useMediaQuery } from "react-responsive";

export const TableRoot = ({
  data,
  columns,
  title,
  loading,
  xslsConvert,
  width,
  Component
}) => {
  let isTabletMid = useMediaQuery({ query: `(max-width: ${width ?? 1275}px)` });

  const ExpandedComponent = ({ data }) => (
    <div className="flex justify-center bg-sky-600 py-2">
      {
        Component ? (
          <Component data={data} />
        ) : (
          <pre>{JSON.stringify(data,null,2)}</pre>
        )
      }
    </div>
  );

  return (
    <div className="w-full md:p-4">
      <DataTable
        responsive
        pagination
        striped
        expandableRows={isTabletMid}
        expandableRowsComponent={ExpandedComponent}
        highlightOnHover
        subHeader={true}
        subHeaderComponent={
          <Button
            onClick={() => exportToExcel(data, xslsConvert, title)}
            color="success"
            className="px-3"
          >
            <FaFileExcel className="me-2" /> Excel
          </Button>
        }
        theme="individuality"
        contextMessage={SELECTED_MESSAGE}
        title={title}
        columns={columns}
        data={data}
        progressPending={loading}
        paginationComponentOptions={PAGINATION_OPTIONS}
        progressComponent={
          <div className="py-10">
            <LoadingComponent />
          </div>
        }
        noDataComponent={
          <MesajeNoData mesaje={`No se encontraros resultados con ${title}`} />
        }
        fixedHeader
        fixedHeaderScrollHeight="450px"
        customStyles={compactGrid}
      />
    </div>
  );
};

TableRoot.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  xslsConvert: PropTypes.func,
  width: PropTypes.number,
  Component: PropTypes.func
};
