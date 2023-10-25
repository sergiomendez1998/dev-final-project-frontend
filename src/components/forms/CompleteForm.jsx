import { FaCheckCircle } from 'react-icons/fa';
import { AnimatedLink } from '../links/AnimatedLink';

export const CompleteForm = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-center font-bold">Solicitud Creada Exitosamente</h1>
      <FaCheckCircle size={100} className="my-4 text-lime-600" />
      <AnimatedLink className={'btn btn-primary'} to={'/Dashboard'}>
        Regresar al inicio
      </AnimatedLink>
    </div>
  );
};
