import PropTypes from "prop-types";
import { Col } from "../grid/Col";
import { InputSelect } from "../inputs/InputSelect";
import { InputForm } from "../inputs/InputForm";
import { useQuery } from "@tanstack/react-query";
import { getSupportTypeCatalogsByUserType } from "../../services/catalogService";
import { useAuth } from "../../hooks/useAuth";

export const SupportRequest = ({ form, errors, onChange }) => {
  const { userType } = useAuth();

  const { data } = useQuery({
    queryFn: () => getSupportTypeCatalogsByUserType(userType),
    queryKey: ["catalog", userType],
  });
  return (
    <>
      <Col xs={12} lg={12}>
        <h3 className="text-xl font-bold">Soporte</h3>
        <p className="text-slate-400">
          Puedes editar tu informacion de contacto si es necesario
        </p>
      </Col>
      <Col xs={12} lg={6}>
        <InputSelect
          name={"supportType"}
          id={"tipe"}
          label={"Tipo Soporte"}
          onChange={onChange}
          placeholder={"Selecciona tipo soporte"}
          value={form.supportType}
          error={errors.supportType}
          data={data ?? []}
          idField={"name"}
          nameField={"description"}
          unSelectedValue={0}
          className={"input-form input-form-internal py-3"}
        />
      </Col>
      <Col xs={12} lg={6}>
        <InputForm
          name={"email"}
          id={"email"}
          label={"Correo Electronico"}
          onChange={onChange}
          placeholder={"Ingrese correo electronico"}
          type={"email"}
          value={form.email}
          error={errors.email}
          className={"input-form input-form-internal py-3"}
        />
      </Col>
      <Col xs={12} lg={6}>
        <InputForm
          name={"phone"}
          id={"text"}
          label={"Telefonos"}
          onChange={onChange}
          placeholder={"Ingrese un numero de telefono"}
          type={"text"}
          value={form.phone}
          error={errors.phone}
          className={"input-form input-form-internal py-3"}
        />
      </Col>
      <Col xs={12} lg={6}>
        <InputForm
          name={"noSupport"}
          id={"noSupport"}
          label={"No. Soporte"}
          onChange={onChange}
          placeholder={"Ingrese no. soporte"}
          type={"text"}
          value={form.noSupport}
          error={errors.noSupport}
          className={"input-form input-form-internal py-3"}
        />
      </Col>
    </>
  );
};

SupportRequest.propTypes = {
  form: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
