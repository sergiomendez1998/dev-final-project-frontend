import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { HeaderPage } from '../../components/layout/HeaderPage';
import { Col } from '../../components/grid/Col';
import { InputSelect } from '../../components/inputs/InputSelect';
import { CATALOGS, CATALOGS_NAME } from '../../config/constants';
import { getAllCatalogs } from '../../services/catalogService';
import { TableRoot } from '../../components/tables/TableeRoot';
import { Row } from '../../components/grid/Row';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

const CatalogPage = () => {
  const [catalogType, setCatalogType] = useState(CATALOGS.department);
  const { data, isLoading } = useQuery({
    queryKey: ['catalog', catalogType],
    queryFn: () => getAllCatalogs(catalogType),
  });

  return (
    <div>
      <HeaderPage title="Catalogos" pref="Consultar" />
     <Row className='items-center justify-center'>
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
      <Col lg={6} xs={12}>
        <Link to={`/catalog/create/${catalogType}`} className='btn btn-primary mt-4 flex justify-between py-3 font-bold md:mt-11'>
          <FaPlus/> Crear Nuevo Item
        </Link>
      </Col>
     </Row>
      <TableRoot
        columns={catalogColumns}
        data={data ?? []}
        loading={isLoading}
        title={catalogType}        
      />
    </div>
  );
};

export default CatalogPage;
