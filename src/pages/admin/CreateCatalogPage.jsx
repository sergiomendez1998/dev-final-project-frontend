import React from 'react';
import { HeaderPage } from '../../components/layout/HeaderPage';
import { CatalogForm } from '../../components/forms/CatalogForm';
import { CATALOGS } from '../../config/constants';

const initialForm = {
  catalogType: CATALOGS.analysisDocumentType,
  name: '',
  description: '',
};

export const CreateCatalogPage = () => {
  const sendForm = (form) => {
    console.log(form);
  };

  return (
    <section>
      <HeaderPage title="Catalogos" pref="Crear" />
      <CatalogForm initialForm={initialForm} sendForm={sendForm} />
    </section>
  );
};
