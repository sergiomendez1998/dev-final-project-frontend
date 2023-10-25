import { Button } from 'flowbite-react';
import { InputForm } from '../../components/inputs/InputForm';
import { AnimatedLink } from '../../components/links/AnimatedLink';
import { Response } from '../../components/messages/Response';
import { IMAGE_PREFIX } from '../../config/constants';
import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useLogin';
import { AiOutlineLoading } from 'react-icons/ai';

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

const LoginPage = () => {
  const { handlerLogin } = useLogin();

  const petition = async (form) => {
    return handlerLogin(form);
  };

  const { form, errors, handleChange, handleSubmit, response, loading } = useForm(
    initialForm,
    validateForm,
    petition
  );

  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center md:flex-row">
      <div className="flex w-full items-center justify-center px-6 md:mx-auto md:max-w-md lg:max-w-lg lg:px-16 xl:max-w-xl xl:px-12">
        <div className="w-full p-4 md:p-0">
          {response && (
            <Response message={response.message} type={response.success} />
          )}
          <h1 className="mb-10 text-center text-3xl font-bold leading-tight">
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
              <AnimatedLink
                to={'foward-password'}
                className="text-sm font-semibold text-cyan-500 hover:text-cyan-700 focus:text-cyan-900"
              >
                Olvido su Contraseña?
              </AnimatedLink>
            </div>
            <Button
              type="submit"
              fullSized
              isProcessing={loading}
              color="secondary"
              className="rounded-full py-2"
              processingSpinner={
                <AiOutlineLoading className="h-6 w-6 animate-spin" />
              }
            >
              Iniciar Sesión
            </Button>
          </form>
          <hr className="my-6 w-full border-gray-300" />
          <p className="mt-8 text-end text-gray-600">
            No Tienes Cuenta?{' '}
            <AnimatedLink
              to={'/register'}
              className="text-cyan-500 hover:text-cyan-700 focus:text-cyan-900"
            >
              Registrate
            </AnimatedLink>
          </p>
          <p className="mt-4 text-center font-bold text-gray-600">
            <AnimatedLink
              to={'/'}
              className="text-cyan-500 hover:text-cyan-700 focus:text-cyan-900"
            >
              Ver Portal
            </AnimatedLink>
          </p>
        </div>
      </div>
      <div className="hidden h-screen w-1/2 flex-col items-center justify-center bg-sky-600 md:flex">
        <h3 className="py-4 text-center text-4xl font-bold text-white">
          Lab2You
        </h3>
        <div className="flex w-[80%] flex-col justify-center">
          <img
            src={`${IMAGE_PREFIX}img/logo.jpg`}
            alt=""
            className="h-96 w-full rounded-3xl "
          />
          <p className="pt-2 text-center text-xl text-white">
            Agenda tu visita en un solo click, en lab2you tu eres nuestra
            prioridad
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
