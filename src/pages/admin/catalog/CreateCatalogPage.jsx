import { CatalogForm } from "../../../components/forms/CatalogForm";
import { CATALOGS } from "../../../config/constants";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../../../components/buttons/ButtonBack";
import { convertToCatalogRegister } from "../../../util/utilConvert";
import { createCatalog } from "../../../services/catalogService";
import { HeaderPage } from "../../../components/layout/HeaderPage";

const initialForm = {
  catalogType: "",
  name: "",
  description: "",
};

const CreateCatalogPage = () => {
  const { type } = useParams();

  initialForm.catalogType = type ?? CATALOGS.analysisDocumentType;

  const sendForm = async (form) => {
    const create = convertToCatalogRegister(form);
    const response = await createCatalog(create);
    return response;
  };

  return (
    <section>
      <HeaderPage title="Catalogos" pref="Crear" />
      <ButtonBack />
      <div className="flex h-[60vh] items-center justify-center">
        <CatalogForm initialForm={initialForm} sendForm={sendForm} />
      </div>
    </section>
  );
};

export default CreateCatalogPage;
