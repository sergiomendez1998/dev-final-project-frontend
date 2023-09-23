import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { HeaderPage } from '../../components/layout/HeaderPage';
import { Col } from '../../components/grid/Col';
import { InputSelect } from '../../components/inputs/InputSelect';
import { CATALOGS, CATALOGS_NAME } from '../../config/constants';
import { getAllCatalogs } from '../../services/catalogService';
import { Catalog } from '../../components/tables/Catalog';

const catalogColumns = [
  {
    name: 'Id',
    selector: (row) => row.id,
  },
  {
    name: 'Nombre',
    selector: (row) => row.name,
  },
  {
    name: 'Descripcion',
    selector: (row) => row.description,
  },
];

export const CatalogPage = () => {
  const [catalogType, setCatalogType] = useState(CATALOGS.department);
  const { data, error, isLoading } = useQuery({
    queryKey: ['catalog', catalogType],
    queryFn: () => getAllCatalogs(catalogType),
  });

  return (
    <div>
      <HeaderPage title="Catalogo" />

      <Col xs={12} lg={6}>
        <InputSelect
          name={'catalogType'}
          id={'tipe'}
          label={'Tipo Catalogo'}
          onChange={(e) => setCatalogType(e.target.value)}
          placeholder={'Selecciona tipo solicitud'}
          data={CATALOGS_NAME}
          idField={'value'}
          nameField={'name'}
          value={catalogType}
          error={''}
          unSelectedValue={0}
          className={'input-form input-form-internal py-3'}
        />
      </Col>
      <Catalog
        columns={catalogColumns}
        data={data}
        loading={isLoading}
        title={catalogType}
      />
    </div>
  );
};
