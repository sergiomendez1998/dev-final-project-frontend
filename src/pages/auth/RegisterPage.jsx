import { Col } from '../../components/grid/Col';
import { Row } from '../../components/grid/Row';
import { InputForm } from '../../components/inputs/InputForm';
import { AnimatedLink } from '../../components/links/AnimatedLink';
import { useForm } from '../../hooks/useForm';

const initialForm = {
  Cui: '',
  Nit: '',
  Nombre: '',
  Apellido: '',
  Direccion: '',
  Genero: '',
  Telefono: '',
  Profesion: '',
  Correo: '',
  Contraseña: '',
};

const validateForm = (form) => {
  const errors = {};
  if (!form.Cui.trim()) {
    errors.Cui = 'El campo Cui es requerido';
  } else if (form.Cui.length < 13) {
    errors.Cui = 'El Cui debe tener al menos 13 caracteres';
  }
  if (!form.Nit.trim()) {
    errors.Nit = 'El campo Nit es requerido';
  } else if (form.Nit.length < 9) {
    errors.Nit = 'El Nit debe tener al menos 9 caracteres';
  }
  if (!form.Nombre.trim()) {
    errors.Nombre = 'El campo Nombre es requerido';
  } else if (form.Nombre.length < 3) {
    errors.Nombre = 'El Nombre debe tener al menos 3 caracteres';
  }
  if (!form.Apellido.trim()) {
    errors.Apellido = 'El campo Apellido es requerido';
  } else if (form.Apellido.length < 3) {
    errors.Apellido = 'El Apellido debe tener al menos 3 caracteres';
  }
  if (!form.Direccion.trim()) {
    errors.Direccion = 'El campo Direccion es requerido';
  } else if (form.Direccion.length < 3) {
    errors.Direccion = 'El Direccion debe tener al menos 3 caracteres';
  }
  if (!form.Genero.trim()) {
    errors.Genero = 'El campo Genero es requerido';
  }
  if (!form.Telefono.trim()) {
    errors.Telefono = 'El campo Telefono es requerido';
  } else if (form.Telefono.length < 8) {
    errors.Telefono = 'El Telefono debe tener al menos 8 caracteres';
  }
  if (!form.Profesion.trim()) {
    errors.Profesion = 'El campo Profesion es requerido';
  }
  if (!form.Correo.trim()) {
    errors.Correo = 'El campo Correo es requerido';
  }
  if (!form.Contraseña.trim()) {
    errors.Contraseña = 'El campo Contraseña es requerido';
  } else if (form.Contraseña.length < 5) {
    errors.Contraseña = 'El Contraseña debe tener al menos 8 caracteres';
  }

  return errors;
};

export const RegisterPage = () => {
  const petition = async (form) => {
    console.log(form);
  };

  const { form, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    validateForm,
    petition
  );

  return (
    <div className="container my-4 mx-auto lg:px-14 md:px-10 px-5">
      <h1 className="text-center text-5xl text-cyan-600 font-bold">Lab2You</h1>
      <h3 className="text-center mt-6 text-gray-400 px-4">
        Porfavor ingresa los campos solicitados para crear tu cuenta
      </h3>
      <form onSubmit={handleSubmit}>
        <Row className="justify-center">
          <Col sm={12} md={6}>
            <InputForm
              name={'Cui'}
              id={'Cui'}
              label={'CUI (13 Digitos)'}
              onChange={handleChange}
              placeholder={'Ingrese su correo electronico'}
              type={'text'}
              value={form.Cui}
              error={errors.Cui}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Nit'}
              id={'Nit'}
              label={'NIT (9 Digitos)'}
              onChange={handleChange}
              placeholder={'Ingrese su NIT'}
              type={'text'}
              value={form.Nit}
              error={errors.Nit}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Nombre'}
              id={'Nombre'}
              label={'Nombre'}
              onChange={handleChange}
              placeholder={'Ingrese sus Nombres'}
              type={'text'}
              value={form.Nombre}
              error={errors.Nombre}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Apellido'}
              id={'Apellido'}
              label={'Apellido'}
              onChange={handleChange}
              placeholder={'Ingrese sus Apellidos'}
              type={'text'}
              value={form.Apellido}
              error={errors.Apellido}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Direccion'}
              id={'Direccion'}
              label={'Direccion'}
              onChange={handleChange}
              placeholder={'Ingrese su Dirección'}
              type={'address'}
              value={form.Direccion}
              error={errors.Direccion}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Genero'}
              id={'Genero'}
              label={'Genero'}
              onChange={handleChange}
              placeholder={'Ingrese Genero'}
              type={'text'}
              value={form.Genero}
              error={errors.Genero}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Telefono'}
              id={'Telefono'}
              label={'Telefono (8 Digitos)'}
              onChange={handleChange}
              placeholder={'Ingrese su Telefono'}
              type={'number'}
              value={form.Telefono}
              error={errors.Telefono}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Profesion'}
              id={'Profesión'}
              label={'Profesión'}
              onChange={handleChange}
              placeholder={'Ingrese su Profesión'}
              type={'text'}
              value={form.Profesion}
              error={errors.Profesion}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Correo'}
              id={'Correo'}
              label={'Correo Electronico'}
              onChange={handleChange}
              placeholder={'Ingrese su Correo'}
              type={'email'}
              value={form.Correo}
              error={errors.Correo}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'Contraseña'}
              id={'Contraseña'}
              label={'Contraseña'}
              onChange={handleChange}
              placeholder={'Ingrese su contraseña'}
              type={'password'}
              value={form.Contraseña}
              error={errors.Contraseña}
              className={'input-form input-form-login py-2'}
            />
          </Col>
          <div className="w-full px-4 flex justify-center">
            <button
              type="submit"
              className="mt-6 lg:w-[35%] md:w-[50%] w-[95%] font-bold block rounded-3xl bg-sky-500 hover:bg-sky-600 py-2 text-white"
            >
              Registrarme y Crear Una Cuenta
            </button>
          </div>
          <Col>
            <p className="mt-2 text-gray-600 text-center">
              Ya tienes cuenta?{' '}
              <AnimatedLink
                to={'/login'}
                className="text-cyan-500 hover:text-cyan-700 focus:text-cyan-900"
              >
                Ingresar
              </AnimatedLink>
            </p>
          </Col>
        </Row>
      </form>
    </div>
  );
};
