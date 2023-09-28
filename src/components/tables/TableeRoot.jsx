import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { compactGrid } from '../../theme/tableTheme';
import { LoadingComponent } from '../loading/LoadingComponent';
import { MesajeNoData } from '../messages/MesajeNoData';
import { PAGINATION_OPTIONS, SELECTED_MESSAGE } from '../../config/constants';
import { FaFileExcel } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import { exportToExcel } from '../../util/cleanDataToExcel';

export const TableRoot = ({ data, columns, title, loading, xslsConvert }) => {
  return (
    <div className="container py-4">
      <DataTable
        responsive
        pagination
        striped
        highlightOnHover
        subHeader={true}
        subHeaderComponent={
          <Button
            onClick={() => exportToExcel(data, xslsConvert, title)}
            color="success"
            className='px-3'
          >
            <FaFileExcel className='me-2' /> Excel
          </Button>
        }
        theme="individuality"
        contextMessage={SELECTED_MESSAGE}
        title={`Catalogo de ${title}`}
        columns={columns}
        data={data}
        progressPending={loading}
        paginationComponentOptions={PAGINATION_OPTIONS}
        progressComponent={<div className='py-10'>
          <LoadingComponent />
        </div>}
        noDataComponent={
          <MesajeNoData
            mesaje={`No se encontraros resultados con ${title}`}
          />
        }
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
};
