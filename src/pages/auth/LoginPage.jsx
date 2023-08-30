import { InputForm } from '../../components/inputs/InputForm';
import { Response } from '../../components/messages/Response';
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
  const {handlerLogin} = useLogin();

  const petition = async (form) => {
    return handlerLogin(form);
  };

  const { form, errors, handleBlur, handleChange, handleSubmit, response } = useForm(
    initialForm,
    validateForm,
    petition
  );

  return (
    <section className="flex h-screen w-screen flex-col justify-center items-center md:flex-row">
      <div className="flex w-full items-center justify-center  px-6  md:mx-auto :w-1/2 md:max-w-md lg:max-w-full lg:px-16 xl:px-12">
        <div className="h-100 w-[75%]">
          {
            response && <Response message={response.message} type={response.success}/>
          }
          <h1 className="mt-12 text-black text-xl font-bold leading-tight dark:text-gray-50 md:text-2xl text-center">
            Bienvenido a Lab2You
          </h1>
          <form onSubmit={handleSubmit}>
            <InputForm
              name={'email'}
              id={'email'}
              label={'Correo Electronico'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Ingrese su correo electronico'}
              type={'email'}
              value={form.email}
              error={errors.email}
            />
            <InputForm
              name={'password'}
              id={'password'}
              label={'contraseña'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={'Ingrese su contraseña'}
              type={'password'}
              value={form.password}
              error={errors.password}
            />
            <div className="mt-2 text-right">
              <a className="text-sm font-semibold text-gray-700 hover:text-rose-700 focus:text-rose-700">
                Olvido su Contraseña?
              </a>
            </div>
            <button
              type="submit"
              className="mt-6 block w-full rounded-3xl bg-sky-500 px-4 py-3 font-semibold text-white hover:bg-sky-400 focus:bg-sky-400"
            >
              Iniciar Sesión
            </button>
          </form>
          <hr className="my-6 w-full border-gray-300" />
          <p className="mt-8 text-gray-600 text-end">
            No Tienes Cuenta?{' '}
            <a className="font-semibold text-cyan-500 hover:text-rose-700">
              Registrate
            </a>
          </p>
        </div>
      </div>
      <div className="hidden bg-sky-600 md:flex h-screen w-100 flex-col align-center justify-center">
        <h3 className="text-white text-center py-4 font-bold">Lab2You</h3>
        <div className="px-5 flex justify-center flex-col">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-full h-96"
          />
          <h5 className="px-9 text-white text-center pt-2">
            Agenda tu visita en un solo click, en lab2you tu eres nuestra
            prioridad
          </h5>
        </div>
      </div>
    </section>
  );
};
