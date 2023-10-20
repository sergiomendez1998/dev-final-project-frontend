import PropTypes from "prop-types";
import { useState } from "react";
import { Col } from "../grid/Col";
import { IoIosPeople, IoIosAdd } from "react-icons/io";
import { InputSelect } from "../inputs/InputSelect";
import { InputForm } from "../inputs/InputForm";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getAllCatalogs } from "../../services/catalogService";
import { CATALOGS } from "../../config/constants";
import { Button } from "flowbite-react";
import { Row } from "../grid/Row";
import { useSale } from "../../hooks/useSale";
import { toast } from "react-toastify";

export const GeneralRequest = ({
  form,
  errors,
  onChange,
}) => {
  const { name, nit } = useAuth();
  const { addProduct } = useSale();
  const [examType, setExamType] = useState({});
  const [itemType, setItemType] = useState(null);
  const [itemsType, setItemsType] = useState([]);

  const { data } = useQuery({
    queryFn: () => getAllCatalogs(CATALOGS.testType),
    queryKey: ["catalog", CATALOGS.testType],
  });

  const handleChange = (e) => {
    setExamType(data.find((item) => item.name == e.target.value));
    setItemsType(data.find((item) => item.name == e.target.value).items)
  };

  const handleChangeitem = (e) => {
    setItemType(itemsType.find((item) => item.name == e.target.value));
  }

  return (
    <>
      <Col xs={12} lg={6}>
        <h3 className="text-xl font-bold">Informacion General</h3>
        <p className="text-slate-400">porfavor ingrese los campos requeridos</p>
      </Col>
      <Col
        xs={12}
        lg={6}
        className="flex justify-center rounded-xl border-2 border-black py-2 md:mt-4 lg:mt-0"
      >
        <Col md={3}>
          <IoIosPeople size={75} />
        </Col>
        <Col md={9} className={"my-auto"}>
          <p>
            <span className="font-bold">{nit || nit != '' ? `NIT: ${nit}` : "Usuario Interno"}</span>
          </p>
          <p>
            <span className="font-bold">Nombre:</span> {name}
          </p>
        </Col>
      </Col>
      <Col md={12}>
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
      <Row className="mx-0 w-full items-center">
        <Col md={6} sm={12}>
          <InputSelect
            name={"examType"}
            id={"tipe"}
            label={"Tipo Solicitud"}
            onChange={handleChange}
            placeholder={"Selecciona tipo solicitud"}
            data={data ?? []}
            idField={"name"}
            nameField={"name"}
            value={examType?.name}
            unSelectedValue={0}
            className={"input-form input-form-internal py-3"}
          />
        </Col>
        <Col md={6} sm={12}>
          <InputSelect
            name={"itemsType"}
            id={"items"}
            label={"Items disponibles"}
            onChange={handleChangeitem}
            placeholder={"selecciona un item"}
            data={itemsType ?? []}
            idField={"name"}
            nameField={"name"}
            value={itemType?.name}
            unSelectedValue={0}
            className={"input-form input-form-internal py-3"}
          />
        </Col>
        <Col md={6} sm={12}>
          <Button
            color="success"
            className="mt-2 h-12 font-bold"
            onClick={() => {
              itemType != null
                ? addProduct(itemType)
                : toast.error("seleccione un tipo de examen"
                );
            }}
            fullSized
          >
            <IoIosAdd className="me-2" size={25} /> <p>agregar</p>
          </Button>
        </Col>
      </Row>
    </>
  );
};

GeneralRequest.propTypes = {
  form: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  changeList: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
};
