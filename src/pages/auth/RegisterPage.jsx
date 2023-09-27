import { Col } from '../../components/grid/Col';
import { Row } from '../../components/grid/Row';
import { InputForm } from '../../components/inputs/InputForm';
import { InputSelect } from '../../components/inputs/InputSelect';
import { AnimatedLink } from '../../components/links/AnimatedLink';
import { useForm } from '../../hooks/useForm';
import { registerUser } from '../../services/authService';
import { convertToCustomerRegister } from '../../util/utilConvert';

const initialForm = {
  cui: '',
  nit: '',
  firstName: '',
  lastName: '',
  address: '',
  gender: '',
  phoneNumber: '',
  occupation: '',
  email: '',
  password: '',
};

const genderData = [
  {
    id: 1,
    name: 'Masculino',
  },
  {
    id: 2,
    name: 'Femenino',
  },
  {
    id: 3,
    name: 'Otro',
  },
];

const validateForm = (form) => {
  const errors = {};
  if (form.cui.trim().length === 0) {
    errors.cui = 'El campo es requerido';
  } else if (form.cui.trim().length !== 13) {
    errors.cui = 'El campo debe tener 13 digitos';
  }

  if (form.nit.trim().length === 0) {
    errors.nit = 'El campo es requerido';
  } else if (form.nit.trim().length !== 9) {
    errors.nit = 'El campo debe tener 9 digitos';
  }

  if (form.firstName.trim().length === 0) {
    errors.firstName = 'El campo es requerido';
  }

  if (form.lastName.trim().length === 0) {
    errors.lastName = 'El campo es requerido';
  }

  if (form.address.trim().length === 0) {
    errors.address = 'El campo es requerido';
  }

  if (form.gender.trim().length === 0) {
    errors.gender = 'El campo es requerido';
  }

  if (form.phoneNumber.trim().length === 0) {
    errors.phoneNumber = 'El campo es requerido';
  } else if (form.phoneNumber.trim().length !== 8) {
    errors.phoneNumber = 'El campo debe tener 8 digitos';
  }

  if (form.occupation.trim().length === 0) {
    errors.occupation = 'El campo es requerido';
  }

  if (form.email.trim().length === 0) {
    errors.email = 'El campo es requerido';
  } else if (
    !/^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      form.email
    )
  ) {
    errors.email = 'El correo no es valido';
  }

  if (form.password.trim().length === 0) {
    errors.password = 'El campo es requerido';
  } else if (form.password.trim().length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  }

  return errors;
};

const RegisterPage = () => {
  const petition = async (form) => {
    const customer = convertToCustomerRegister(form);
    const response = await registerUser(customer);
    console.log(response);
  };

  const { form, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    validateForm,
    petition
  );

  return (
    <div className="container mx-auto my-4 px-5 md:px-10 lg:px-14">
      <h1 className="text-center text-5xl font-bold text-cyan-600">Lab2You</h1>
      <h3 className="mt-6 px-4 text-center text-gray-400">
        Porfavor ingresa los campos solicitados para crear tu cuenta
      </h3>
      <form className="mx-auto w-[75%]" onSubmit={handleSubmit}>
        <Row className="justify-center">
          <Col sm={12} md={6}>
            <InputForm
              name={'cui'}
              id={'Cui'}
              label={'CUI (13 Digitos)'}
              onChange={handleChange}
              placeholder={'Ingrese su correo electronico'}
              type={'text'}
              value={form.cui}
              error={errors.cui}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'nit'}
              id={'Nit'}
              label={'NIT (9 Digitos)'}
              onChange={handleChange}
              placeholder={'Ingrese su NIT'}
              type={'text'}
              value={form.nit}
              error={errors.nit}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'firstName'}
              id={'Nombre'}
              label={'Nombre'}
              onChange={handleChange}
              placeholder={'Ingrese sus Nombres'}
              type={'text'}
              value={form.firstName}
              error={errors.firstName}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'lastName'}
              id={'Apellido'}
              label={'Apellido'}
              onChange={handleChange}
              placeholder={'Ingrese sus Apellidos'}
              type={'text'}
              value={form.lastName}
              error={errors.lastName}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'address'}
              id={'Direccion'}
              label={'Direccion'}
              onChange={handleChange}
              placeholder={'Ingrese su Dirección'}
              type={'text'}
              value={form.address}
              error={errors.address}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputSelect
              name={'gender'}
              id={'Genero'}
              label={'Genero'}
              onChange={handleChange}
              placeholder={'Ingrese Genero'}
              type={'text'}
              value={form.gender}
              error={errors.gender}
              data={genderData}
              idField={'name'}
              nameField={'name'}
              unSelectedValue={''}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'phoneNumber'}
              id={'Telefono'}
              label={'Telefono (8 Digitos)'}
              onChange={handleChange}
              placeholder={'Ingrese su Telefono'}
              type={'number'}
              value={form.phoneNumber}
              error={errors.phoneNumber}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'occupation'}
              id={'Profesión'}
              label={'Profesión'}
              onChange={handleChange}
              placeholder={'Ingrese su Profesión'}
              type={'text'}
              value={form.occupation}
              error={errors.occupation}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'email'}
              id={'Correo'}
              label={'Correo Electronico'}
              onChange={handleChange}
              placeholder={'Ingrese su Correo'}
              type={'email'}
              value={form.email}
              error={errors.email}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <Col sm={12} md={6}>
            <InputForm
              name={'password'}
              id={'Contraseña'}
              label={'Contraseña'}
              onChange={handleChange}
              placeholder={'Ingrese su contraseña'}
              type={'password'}
              value={form.password}
              error={errors.password}
              className={'input-form input-form-login py-3'}
            />
          </Col>
          <div className="flex w-full justify-center px-4">
            <button
              type="submit"
              className="mt-6 block w-[95%] rounded-3xl bg-sky-500 py-3 font-bold text-white hover:bg-sky-600 md:w-[50%] lg:w-[35%]"
            >
              Registrarme y Crear Una Cuenta
            </button>
          </div>
          <Col>
            <p className="mt-2 text-center text-gray-600">
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

export default RegisterPage;