import PropTypes from "prop-types";
import { Col } from "../grid/Col";
import { InputSelect } from "../inputs/InputSelect";
import { InputForm } from "../inputs/InputForm";
import { useQuery } from "@tanstack/react-query";
import { getSupportTypeCatalogsByUserType } from "../../services/catalogService";
import { useAuth } from "../../hooks/useAuth";
import { USER_TYPES } from "../../config/constants";
import { Button } from "flowbite-react";
import NotFound from "../../pages/error/NotFound";

export const SupportRequest = ({ form, errors, onChange, onVerify }) => {
  const { userType } = useAuth();

  const { data, error } = useQuery({
    queryFn: () => getSupportTypeCatalogsByUserType(userType),
    queryKey: ["catalog", userType],
  });

  if (error) {
    return <NotFound Message={error.message} Number={error.statusCode} />;
  }


  return (
    <>
      <Col xs={12} lg={12} className="flex flex-wrap">
        <Col sm={12} lg={6}>
          <h3 className="text-xl font-bold">Soporte</h3>
          <p className="text-slate-400">
            Puedes editar tu informacion de contacto si es necesario
          </p>
        </Col>
        {form.customerCui != "" && form.customerCui.length == 13 && (
          <Col sm={12} lg={6}>
            <Button fullSized className="mt-2 md:mt-4" onClick={onVerify}>
              Verificar si tiene Cuenta
            </Button>
          </Col>
        )}
      </Col>
      <Col xs={12} lg={6}>
        <InputSelect
          name={"supportType"}
          id={"tipe"}
          label={"Tipo Soporte"}
          onChange={onChange}
          placeholder={"Selecciona tipo soporte"}
          value={form.supportType}
          error={errors?.supportType}
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
          name={"supportNumber"}
          id={"supportNumber"}
          label={"No. Soporte"}
          onChange={onChange}
          placeholder={"Ingrese no. soporte"}
          type={"text"}
          value={form.supportNumber}
          error={errors.supportNumber}
          className={"input-form input-form-internal py-3"}
        />
      </Col>
      {userType == USER_TYPES.internal && (
        <Col xs={12} lg={6}>
          <InputForm
            name={"customerCui"}
            id={"text"}
            label={"CUI del cliente"}
            onChange={onChange}
            placeholder={"Ingrese un numero de cui"}
            type={"text"}
            value={form.customerCui}
            error={errors.customerCui}
            className={"input-form input-form-internal py-3"}
          />
        </Col>
      )}
    </>
  );
};

SupportRequest.propTypes = {
  form: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onVerify: PropTypes.func.isRequired,
};
