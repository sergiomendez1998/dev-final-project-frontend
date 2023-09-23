import React from 'react';
import DataTable from 'react-data-table-component';
import { compactGrid, customStyles } from '../../theme/tableTheme';
import { LoadingComponent } from '../loading/LoadingComponent';
import { MesajeNoData } from '../messages/MesajeNoData';
import { PAGINATION_OPTIONS, SELECTED_MESSAGE } from '../../config/constants';

export const Catalog = ({ data, columns, title, loading }) => {
  return (
    <div className="container py-4">
      <DataTable
        responsive
        pagination
        striped
        highlightOnHover
        theme="individuality"
        contextMessage={SELECTED_MESSAGE}
        title={`Catalogo de ${title}`}
        columns={columns}
        data={data}
        progressPending={loading}
        paginationComponentOptions={PAGINATION_OPTIONS}
        progressComponent={<LoadingComponent />}
        noDataComponent={
          <MesajeNoData
            mesaje={`No se encontraros resultados en este catalogo`}
          />
        }
        customStyles={compactGrid}
      />
    </div>
  );
};
