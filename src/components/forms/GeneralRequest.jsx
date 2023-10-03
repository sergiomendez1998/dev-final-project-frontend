import PropTypes from "prop-types";
import { useState } from "react";
import { Col } from "../grid/Col";
import { IoIosPeople, IoIosAdd, IoIosTrash } from "react-icons/io";
import { InputSelect } from "../inputs/InputSelect";
import { InputForm } from "../inputs/InputForm";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getAllCatalogs } from "../../services/catalogService";
import { CATALOGS } from "../../config/constants";
import { Button } from "flowbite-react";
import { Row } from "../grid/Row";

export const GeneralRequest = ({
  form,
  errors,
  onChange,
  changeList,
  removeList,
}) => {
  const { name } = useAuth();
  const [examType, setExamType] = useState("");

  const { data } = useQuery({
    queryFn: () => getAllCatalogs(CATALOGS.testType),
    queryKey: ["catalog", CATALOGS.testType],
  });

  const handleChange = (e) => {
    setExamType(e.target.value);
  };

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
            <span className="font-bold">Nit:</span> 0000000000
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
            value={examType}
            unSelectedValue={0}
            className={"input-form input-form-internal py-3"}
          />
        </Col>
        <Col  md={6} sm={12}>
          <Button
            color="success"
            className="ms-2 mt-12 h-12 font-bold"
            onClick={() => changeList("examType", { name: examType })}
            fullSized
          >
            <IoIosAdd className="me-2" size={25} /> <p>agregar</p>
          </Button>
        </Col>
      </Row>
      <p
        className={'ms-2 font-bold text-red-600'}
      >
        {errors.examType}
      </p>
      <Col md={12}>
        <div className="flow-root">
          <ul>
            {form.examType?.map((item, index) => (
              <li
                key={index}
                className="my-2 rounded-xl border border-black p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-gray-900 dark:text-white ">
                      {item.name}
                    </p>
                  </div>
                  <Button
                    color="failure"
                    size={"sm"}
                    onClick={() => removeList("examType", item)}
                  >
                    <IoIosTrash size={15} />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
  changeList: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
};
