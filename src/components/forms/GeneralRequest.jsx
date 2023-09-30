import PropTypes from "prop-types";
import { Col } from "../grid/Col";
import { IoIosPeople } from "react-icons/io";
import { InputSelect } from "../inputs/InputSelect";
import { InputForm } from "../inputs/InputForm";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getAllCatalogs } from "../../services/catalogService";
import { CATALOGS } from "../../config/constants";

export const GeneralRequest = ({ form, errors, onChange }) => {
  const { name } = useAuth();

  const { data } = useQuery({
    queryFn: () => getAllCatalogs(CATALOGS.testType),
    queryKey: ["catalog", CATALOGS.testType],
  });

  return (
    <>
      <Col xs={12} lg={6}>
        <h3 className="text-xl font-bold">Informacion General</h3>
        <p className="text-slate-400">porfavor ingrese los campos requeridos</p>
      </Col>
      <Col
        xs={12}
        lg={6}
        className="flex justify-center rounded-xl border-2 border-black py-2"
      >
        <Col md={3}>
          <IoIosPeople size={75} />
        </Col>
        <Col md={9} className={"my-auto"}>
          <p>
            <span className="font-bold">Nit:</span> 0000000000
          </p>
          <p>
            <span className="font-bold">Nombre:</span> {name}
          </p>
        </Col>
      </Col>
      <Col xs={12} lg={6}>
        <InputSelect
          name={"requestType"}
          id={"tipe"}
          label={"Tipo Solicitud"}
          onChange={onChange}
          placeholder={"Selecciona tipo solicitud"}
          data={data ?? []}
          idField={"id"}
          nameField={"name"}
          value={form.requestType}
          error={errors.requestType}
          unSelectedValue={0}
          className={"input-form input-form-internal py-3"}
        />
      </Col>
      <Col xs={12} lg={6}>
        <InputForm
          name={"description"}
          id={"description"}
          label={"Descripcion"}
          onChange={onChange}
          placeholder={"Ingrese una descripcion"}
          type={"text"}
          value={form.description}
          error={errors.description}
          className={"input-form input-form-internal py-3"}
        />
      </Col>
      <Col>
        <div className="mt-10">
          <p>
            <span className="font-bold">No Solicitud:</span> 0000000000
          </p>
        </div>
      </Col>
    </>
  );
};

GeneralRequest.propTypes = {
  form: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
