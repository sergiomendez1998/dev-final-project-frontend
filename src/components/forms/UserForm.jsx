import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import { Response } from "../messages/Response";
import { Col } from "../grid/Col";
import { InputSelect } from "../inputs/InputSelect";
import { InputForm } from "../inputs/InputForm";
import { Button } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { CATALOGS, genderData } from "../../config/constants";
import { getAllCatalogs } from "../../services/catalogService";

const validateForm = (form) => {
  const errors = {};
  if (!form.cui) {
    errors.cui = "El DPI es requerido";
  } else if (form.cui.length < 13) {
    errors.cui = "El DPI debe tener 13 digitos";
  }

  if (!form.firstName) {
    errors.firstName = "El nombre es requerido";
  }

  if (!form.lastName) {
    errors.lastName = "El apellido es requerido";
  }

  if (!form.address) {
    errors.address = "La direccion es requerida";
  }

  if (!form.phoneNumber) {
    errors.phoneNumber = "El numero de telefono es requerido";
  } else if (form.phoneNumber.trim().length < 8) {
    errors.phoneNumber = "El numero de telefono debe tener 8 digitos";
  } else if (form.phoneNumber.trim().length > 8) {
    form.phoneNumber = form.phoneNumber.substring(0, 8);
  }

  if (form.gender.trim() === "") {
    errors.gender = "El genero es requerido";
  }

  if (form.departmentId === 0) {
    errors.departmentId = "El departamento es requerido";
  }

  if (form.roleId === 0) {
    errors.roleId = "El rol es requerido";
  }

  if (!form.nickName) {
    errors.nickName = "El nombre de usuario es requerido";
  }

  if (!form.email) {
    errors.email = "El correo electronico es requerido";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "El correo electronico es invalido";
  }

  if (form.password.trim() === "") {
    errors.password = "La contraseña es requerida";
  } else if (form.password.trim().length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else if (form.password.trim().length > 20) {
    form.password = form.password.substring(0, 20);
  }

  return errors;
};

export const UserForm = ({ initialForm, sendForm }) => {
  const { data: rols } = useQuery({
    queryKey: ["catalog", CATALOGS.role],
    queryFn: () => getAllCatalogs(CATALOGS.role),
  });

  const { data: department } = useQuery({
    queryKey: ["catalog", CATALOGS.department],
    queryFn: () => getAllCatalogs(CATALOGS.department),
  });

  const { form, errors, handleChange, handleSubmit, loading, response } =
    useForm(initialForm, validateForm, sendForm);

  return (
    <article className="my-5">
      {response && (
        <Response message={response.message} type={response.successful} />
      )}
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <Col xs={12} lg={6}>
          <InputForm
            label="Cui"
            name="cui"
            error={errors.cui}
            onChange={handleChange}
            value={form.cui}
            placeholder={"Ingresa el DPI del empleado"}
            type={"text"}
            className="input-form input-form-internal py-3"
            maxLength={13}
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Nombres"
            name="firstName"
            error={errors.firstName}
            onChange={handleChange}
            value={form.firstName}
            placeholder={"Ingresa los nombres del empleado"}
            type={"text"}
            className="input-form input-form-internal py-3"
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Apellidos"
            name="lastName"
            error={errors.lastName}
            onChange={handleChange}
            value={form.lastName}
            placeholder={"Ingresa los apellidos del empleado"}
            type={"text"}
            className="input-form input-form-internal py-3"
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Direccion"
            name="address"
            error={errors.address}
            onChange={handleChange}
            value={form.address}
            placeholder={"Ingresa la direccion del empleado"}
            type={"text"}
            className="input-form input-form-internal py-3"
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Numero de telefono"
            name="phoneNumber"
            error={errors.phoneNumber}
            onChange={handleChange}
            value={form.phoneNumber}
            placeholder={"Ingresa el no. de telefono del empleado"}
            type={"number"}
            className="input-form input-form-internal py-3"
            max={99999999}
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputSelect
            name={"gender"}
            id={"gender"}
            label={"Genero"}
            onChange={handleChange}
            placeholder={"Selecciona el genero"}
            data={genderData}
            idField={"name"}
            nameField={"name"}
            value={form.gender}
            error={errors.gender}
            unSelectedValue={""}
            className={"input-form input-form-internal py-3"}
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputSelect
            name={"departmentId"}
            id={"departmentId"}
            label={"Departamento del empleado"}
            onChange={handleChange}
            placeholder={"Selecciona el departamento del empleado"}
            data={department ?? []}
            idField={"name"}
            nameField={"name"}
            value={form.departmentId}
            error={errors.departmentId}
            unSelectedValue={0}
            className={"input-form input-form-internal py-3"}
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Nombre de usuario del empleado"
            name="nickName"
            error={errors.nickName}
            onChange={handleChange}
            value={form.nickName}
            placeholder={"Nombre de usuario del empleado"}
            type={"text"}
            className="input-form input-form-internal py-3"
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Correo electronico"
            name="email"
            error={errors.email}
            onChange={handleChange}
            value={form.email}
            placeholder={"Correo electronico del empleado"}
            type={"text"}
            className="input-form input-form-internal py-3"
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputForm
            label="Contraseña"
            name="password"
            error={errors.password}
            onChange={handleChange}
            value={form.password}
            placeholder={"Contraseña a asignar para el empleado"}
            type={"password"}
            className="input-form input-form-internal py-3"
            iconClass={"bottom-9"}
          />
        </Col>
        <Col xs={12} lg={6}>
          <InputSelect
            name={"roleId"}
            id={"roleId"}
            label={"Rol del empleado"}
            onChange={handleChange}
            placeholder={"Selecciona el rol del empleado"}
            data={rols ?? []}
            idField={"name"}
            nameField={"name"}
            value={form.roleId}
            error={errors.roleId}
            unSelectedValue={0}
            className={"input-form input-form-internal py-3"}
          />
        </Col>
        <Col xs={12} lg={6} className={"mt-12 flex items-center"}>
          <Button
            isProcessing={loading}
            processingSpinner={
              <AiOutlineLoading className="h-6 w-6 animate-spin" />
            }
            color="primary"
            type="submit"
            fullSized
          >
            {initialForm.id ? "Actualizar Usuario" : "Crear Usuario"}
          </Button>
        </Col>
      </form>
    </article>
  );
};

UserForm.propTypes = {
  initialForm: PropTypes.object.isRequired,
  sendForm: PropTypes.func.isRequired,
};
