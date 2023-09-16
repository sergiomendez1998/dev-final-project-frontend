import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { AnimatedLink } from '../links/AnimatedLink';

export const CompleteForm = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <h1 className="text-center font-bold">Solicitud Creada Exitosamente</h1>
      <FaCheckCircle size={100} className="text-lime-600 my-4" />
      <AnimatedLink className={'btn btn-primary'} to={'/'}>
        Regresar a la pagina principal
      </AnimatedLink>
    </div>
  );
};
