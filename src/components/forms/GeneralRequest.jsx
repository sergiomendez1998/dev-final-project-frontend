import React from 'react';
import { Col } from '../grid/Col';
import { IoIosPeople } from 'react-icons/io';
import { InputSelect } from '../inputs/InputSelect';
import { InputForm } from '../inputs/InputForm';

const requestTypeData = [
  {
    id: 1,
    name: 'Solicitud de soporte',
  },
  {
    id: 2,
    name: 'Solicitud de mantenimiento',
  },
]

export const GeneralRequest = ({form,errors,onChange}) => {
  return (
    <>
      <Col xs={12} lg={6}>
        <h3 className="font-bold text-xl">Informacion General</h3>
        <p className="text-slate-400">porfavor ingrese los campos requeridos</p>
      </Col>
      <Col
        xs={12}
        lg={6}
        className="flex justify-center border-2 rounded-xl py-2 border-black"
      >
        <Col md={3}>
          <IoIosPeople size={75} />
        </Col>
        <Col md={9} className={'my-auto'}>
          <p>
            <span className="font-bold">Nit:</span> 0000000000
          </p>
          <p>
            <span className="font-bold">Nombre:</span> 0000000
          </p>
        </Col>
      </Col>
      <Col xs={12} lg={6}>
        <InputSelect
          name={'requestType'}
          id={'tipe'}
          label={'Tipo Solicitud'}
          onChange={onChange}
          placeholder={'Selecciona tipo solicitud'}
          data={requestTypeData}
          idField={'id'}
          nameField={'name'}
          value={form.requestType}
          error={errors.requestType}
          unSelectedValue={0}
          className={'input-form input-form-internal py-3'}
        />
      </Col>
      <Col xs={12} lg={6}>
        <InputForm
          name={'description'}
          id={'description'}
          label={'Descripcion'}
          onChange={onChange}
          placeholder={'Ingrese una descripcion'}
          type={'text'}
          value={form.description}
          error={errors.description}
          className={'input-form input-form-internal py-3'}
        />
      </Col>
      <Col>
        <div className="mt-10">
          <p>
            <span className="font-bold">No Solicitud:</span> 0000000000
          </p>
        </div>
      </Col>
    </>
  );
};

