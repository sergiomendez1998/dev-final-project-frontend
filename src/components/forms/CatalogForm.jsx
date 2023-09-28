import PropTypes from 'prop-types';
import { Col } from '../grid/Col';
import { InputForm } from '../inputs/InputForm';
import { InputSelect } from '../inputs/InputSelect';
import { CATALOGS_NAME } from '../../config/constants';
import { useForm } from '../../hooks/useForm';
import { Response } from '../messages/Response';
import { Button } from 'flowbite-react';
import { AiOutlineLoading } from 'react-icons/ai';

const validateForm = (form) => {
  const errors = {};

  if (!form.name) {
    errors.name = 'El nombre es requerido';
  }
  if (!form.description) {
    errors.description = 'La descripcion es requerida';
  }
  if (!form.catalogType) {
    errors.catalogType = 'El tipo de catalogo es requerido';
  }

  return errors;
};

export const CatalogForm = ({ initialForm, sendForm }) => {

  const { form, errors, handleChange, handleSubmit, loading, response } =
    useForm(initialForm, validateForm, sendForm);

  return (
    <article className="my-5">
      {response && (
        <Response message={response.message} type={response.successful} />
      )}
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <Col xs={12} lg={6}>
          <InputSelect
            name={'catalogType'}
            id={'tipe'}
            label={'Tipo Catalogo'}
            onChange={handleChange}
            placeholder={'Selecciona tipo solicitud'}
            data={CATALOGS_NAME}
            idField={'value'}
            nameField={'name'}
            value={form.catalogType}
            error={errors.catalogType}
            unSelectedValue={''}
            className={'input-form input-form-internal py-3'}
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Nombre del Catalogo"
            name="name"
            error={errors.name}
            onChange={handleChange}
            value={form.name}
            placeholder={'Nombre del Catalogo'}
            type={'text'}
            className="input-form input-form-internal py-3"
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Descripcion del catalogo"
            name="description"
            error={errors.description}
            onChange={handleChange}
            value={form.description}
            placeholder={'Descripcion del Catalogo'}
            type={'text'}
            className="input-form input-form-internal py-3"
          />
        </Col>
        <Col xs={12} lg={6} className={'mt-12 flex items-center'}>
          <Button
            isProcessing={loading}
            processingSpinner={
              <AiOutlineLoading className="h-6 w-6 animate-spin" />
            }
            color="primary"
            type="submit"
            fullSized
          >
            {initialForm.id ? 'Actualizar Catalogo' : 'Crear Catalogo'}
          </Button>
        </Col>
      </form>
    </article>
  );
};

CatalogForm.propTypes = {
  initialForm: PropTypes.object.isRequired,
  sendForm: PropTypes.func.isRequired,
};
