import { HeaderPage } from "../../components/layout/HeaderPage";
import { CatalogForm } from "../../components/forms/CatalogForm";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../../components/buttons/ButtonBack";
import { convertToCatalogRegister } from "../../util/utilConvert";
import { getAllCatalogs, updateCatalog } from "../../services/catalogService";
import { CATALOGS } from "../../config/constants";
import { useQuery } from "@tanstack/react-query";

const initialForm = {
  id: 0,
  catalogType: "",
  name: "",
  description: "",
};

const EditCatalogPage = () => {
  const { type, id } = useParams();

  const { data, refetch } = useQuery({
    queryKey: ["catalog", type],
    queryFn: () => getAllCatalogs(type),
  });

  const catalog = data?.find((item) => item.id === parseInt(id)) ?? initialForm;
  catalog.catalogType = type ?? CATALOGS.analysisDocumentType;

  const sendForm = async (form) => {
    form.id = id;
    const create = convertToCatalogRegister(form);
    const response = await updateCatalog(create);
    response.successful && refetch();
    return response;
  };

  return (
    <section>
      <HeaderPage title="Catalogos" pref="Actualizar" />
      <ButtonBack />
      <div className="flex h-[60vh] items-center justify-center">
        <CatalogForm initialForm={catalog} sendForm={sendForm} />
      </div>
    </section>
  );
};

export default EditCatalogPage;
