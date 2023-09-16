import { InputForm } from '../../components/inputs/InputForm';
import { AnimatedLink } from '../../components/links/AnimatedLink';
import { Response } from '../../components/messages/Response';
import { IMAGE_PREFIX } from '../../config/constants';
import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useLogin';

const initialForm = {
  email: '',
  password: '',
};

const validateForm = (form) => {
  const errors = {};

  if (!form.email.trim()) {
    errors.email = 'El campo email es requerido';
  }

  if (!form.password.trim()) {
    errors.password = 'El campo password es requerido';
  } else if (form.password.length < 5) {
    errors.password = 'El password debe tener al menos 6 caracteres';
  }

  return errors;
};

export const LoginPage = () => {
  const { handlerLogin } = useLogin();

  const petition = async (form) => {
    return handlerLogin(form);
  };

  const { form, errors, handleChange, handleSubmit, response } = useForm(
    initialForm,
    validateForm,
    petition
  );

  return (
    <section className="flex h-screen w-screen flex-col justify-center items-center md:flex-row">
      <div className="flex w-full items-center justify-center px-6 md:mx-auto xl:max-w-xl md:max-w-md lg:max-w-lg lg:px-16 xl:px-12">
        <div className="h-100 w-full p-4 md:p-0">
          {response && (
            <Response message={response.message} type={response.success} />
          )}
          <h1 className="mb-10 text-3xl font-bold leading-tight text-center">
            Bienvenido a Lab2You
          </h1>
          <form onSubmit={handleSubmit}>
            <InputForm
              name={'email'}
              id={'email'}
              label={'Correo Electronico'}
              onChange={handleChange}
              placeholder={'Ingrese su correo electronico'}
              type={'email'}
              value={form.email}
              error={errors.email}
              className={'input-form input-form-login py-4'}
            />
            <InputForm
              name={'password'}
              id={'password'}
              label={'Contraseña'}
              onChange={handleChange}
              placeholder={'Ingrese su contraseña'}
              type={'password'}
              value={form.password}
              error={errors.password}
              className={'input-form input-form-login py-4'}
            />
            <div className="mt-2 text-right">
              <AnimatedLink to={"foward-password"} className="text-sm font-semibold text-cyan-500 hover:text-cyan-700 focus:text-cyan-900">
                Olvido su Contraseña?
              </AnimatedLink>
            </div>
            <button
              type="submit"
              className="mt-6 block w-full rounded-3xl bg-sky-500 px-4 py-3 font-semibold text-white hover:bg-sky-600"
            >
              Iniciar Sesión
            </button>
          </form>
          <hr className="my-6 w-full border-gray-300" />
          <p className="mt-8 text-gray-600 text-end">
            No Tienes Cuenta?{' '}
            <AnimatedLink
              to={'/register'}
              className="text-cyan-500 hover:text-cyan-700 focus:text-cyan-900"
            >
              Registrate
            </AnimatedLink>
          </p>
        </div>
      </div>
      <div className="hidden bg-sky-600 md:flex h-screen w-1/2 flex-col items-center justify-center">
        <h3 className="text-white text-center text-4xl py-4 font-bold">
          Lab2You
        </h3>
        <div className="w-[80%] flex justify-center flex-col">
          <img
            src={`${IMAGE_PREFIX}img/logo.jpg`}
            alt=""
            className="w-full h-96 rounded-3xl "
          />
          <p className="text-white text-xl text-center pt-2">
            Agenda tu visita en un solo click, en lab2you tu eres nuestra
            prioridad
          </p>
        </div>
      </div>
    </section>
  );
};
