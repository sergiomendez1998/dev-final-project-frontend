import PropTypes from "prop-types";
import { Col } from "../grid/Col";
import { InputForm } from "../inputs/InputForm";
import { Response } from "../messages/Response";
import { Badge, Button, Card } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { CATALOGS } from "../../config/constants";
import { getAllCatalogs } from "../../services/catalogService";
import { InputSelect } from "../inputs/InputSelect";
import { InputDateTime } from "../inputs/InputDateTime";
import { useArrayForm } from "../../hooks/useArrayForm";
import { FaPlus, FaTrash } from "react-icons/fa";

const now = new Date();
const date = now.toISOString().substring(0, 10);

const validateForm = (form) => {
  const errors = [];

  form.forEach((f, idx) => {
    const error = {};

    const number = f.quantity.replace(/[^0-9]/g, "");
    f.quantity = number;

    if (f.sampleType == 0) {
      error.sampleType = "Selecciona un tipo de muestra";
    }
    if (f.measureUnit == 0) {
      error.measureUnit = "Selecciona una unidad de medida";
    }
    if (!f.presentation) {
      error.presentation = "Ingresa la presentación de la muestra";
    }else if (f.presentation.length >= 50) {
      f.presentation = f.presentation.substring(0, 50);
    }
    if (parseInt(f.quantity) <= 0) {
      error.quantity = "Ingresa la cantidad de la muestra";
    }
    if (!f.expirationDate) {
      error.expirationDate = "Ingresa la fecha de expiración";
    }
    errors[idx] = error;
  });

  return errors;
};

export const SampleForm = ({ initialForm, sendForm }) => {
  const { data: sampleType } = useQuery({
    queryKey: ["catalog", CATALOGS.sampleType],
    queryFn: () => getAllCatalogs(CATALOGS.sampleType),
  });

  const { data: unitMeasure } = useQuery({
    queryKey: ["catalog", CATALOGS.measureUnit],
    queryFn: () => getAllCatalogs(CATALOGS.measureUnit),
  });

  const {
    form,
    errors,
    handleChange,
    handleSubmit,
    loading,
    response,
    addList,
    removeList,
  } = useArrayForm(initialForm, validateForm, sendForm);

  return (
    <article className="max-h-[70vh] overflow-y-auto p-5">
      <div className="mb-3 flex justify-end">
        <Button color="success" className="font-bold" onClick={addList}>
          <FaPlus className="me-2" /> Agregar
        </Button>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {form.map((f, idx) => (
          <Card key={idx}>
            {form.length > 1 && (
              <span
                className="flex cursor-pointer justify-end text-red-600"
                onClick={(e) => removeList(e, idx)}
              >
                <FaTrash />
              </span>
            )}
            <Badge>muestra : {f.uuid}</Badge>
            <article className="flex flex-row flex-wrap">
              <Col sm={12} md={6}>
                <InputSelect
                  name={"sampleType"}
                  id={"sampleType"}
                  label={"Tipo de Muestra"}
                  onChange={(e) => handleChange(e, idx)}
                  placeholder={"Selecciona tipo de muestra"}
                  value={f.sampleType}
                  error={errors[idx]?.sampleType}
                  data={sampleType ?? []}
                  idField={"id"}
                  nameField={"name"}
                  unSelectedValue={0}
                  className={"input-form input-form-internal py-3"}
                />
              </Col>
              <Col sm={12} md={6}>
                <InputSelect
                  name={"measureUnit"}
                  id={"measureUnit"}
                  label={"Unidad de medida"}
                  onChange={(e) => handleChange(e, idx)}
                  placeholder={"Selecciona unidad de medida"}
                  value={f.measureUnit}
                  error={errors[idx]?.measureUnit}
                  data={unitMeasure ?? []}
                  idField={"id"}
                  nameField={"description"}
                  unSelectedValue={0}
                  className={"input-form input-form-internal py-3"}
                />
              </Col>
              <Col sm={12} md={6}>
                <InputForm
                  label="Presentación"
                  name="presentation"
                  error={errors[idx]?.presentation}
                  onChange={(e) => handleChange(e, idx)}
                  value={f.presentation}
                  placeholder={"Ingresa la presentación de la muestra"}
                  type={"text"}
                  className="input-form input-form-internal py-3"
                />
              </Col>
              <Col sm={12} md={6}>
                <InputForm
                  label="Cantidad"
                  name="quantity"
                  error={errors[idx]?.quantity}
                  onChange={(e) => handleChange(e, idx)}
                  value={f.quantity}
                  placeholder={"Ingresa la cantidad de la muestra"}
                  type={"text"}
                  className="input-form input-form-internal py-3"
                />
              </Col>
              <Col xs={12} lg={6}>
                <InputDateTime
                  label="Fecha de Expiracion"
                  name="expirationDate"
                  error={errors[idx]?.expirationDate}
                  value={f.expirationDate}
                  onChange={(e) => handleChange(e, idx)}
                  readOnly={false}
                  min={date}
                  className="input-form input-form-internal py-3"
                />
              </Col>
            </article>
          </Card>
        ))}
        {response && (
          <div className="mx-3">
            <Response message={response.message} type={response.successful} />
          </div>
        )}
        <Col xs={12} lg={6} className={"flex items-center"}>
          <Button
            isProcessing={loading}
            processingSpinner={
              <AiOutlineLoading className="h-6 w-6 animate-spin" />
            }
            color="primary"
            type="submit"
            fullSized
          >
            {"Asignar Muestra"}
          </Button>
        </Col>
      </form>
    </article>
  );
};

SampleForm.propTypes = {
  initialForm: PropTypes.array.isRequired,
  sendForm: PropTypes.func.isRequired,
};
