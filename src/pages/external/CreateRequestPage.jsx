import { useState } from "react";
import Swal from "sweetalert2";
import { Stepper } from "../../components/step/Stepper";
import { HeaderPage } from "../../components/layout/HeaderPage";
import { Col } from "../../components/grid/Col";
import { Row } from "../../components/grid/Row";
import { GeneralRequest } from "../../components/forms/GeneralRequest";
import { SupportRequest } from "../../components/forms/SupportRequest";
import { CompleteForm } from "../../components/forms/CompleteForm";
import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../hooks/useAuth";
import { convertToCreateRequest } from "../../util/utilConvert";
import { createRequest } from "../../services/requestService";
import { Response } from "../../components/messages/Response";
import { Button, Card } from "flowbite-react";
import { FaCashRegister, FaShoppingCart, FaTrash } from "react-icons/fa";
import { Drawer } from "../../containers/Drawer";
import { useSale } from "../../hooks/useSale";
import { AiOutlineLoading } from "react-icons/ai";

const initialForm = {
  examType: [],
  description: "",
  noRequest: 0,
  supportType: 0,
  email: "",
  phone: "",
  noSupport: "",
};

const validateForm = (form) => {
  const errors = {};

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const number = form.phone.replace(/[^0-9]/g, "");
  form.phone = number;

  const description = form.description.replace(/[^a-zA-Z\s]/g, "");
  form.description = description;

  const support = form.noSupport.replace(/[^a-zA-Z0-9]/g, "");
  form.noSupport = support;

  if (form.description === "") {
    errors.description = "El campo descripcion es requerido";
  } else if (form.description.length >= 100) {
    form.description = form.description.substring(0, 100);
  }

  if (form.email === "") {
    errors.email = "El campo correo electronico es requerido";
  } else if (!regex.test(form.email)) {
    errors.email = "El correo no es valido";
  } else if (form.email.length >= 100) {
    form.email = form.email.substring(0, 100);
  }

  if (form.phone === "") {
    errors.phone = "El campo telefono es requerido";
  } else if (form.phone.trim().length < 8) {
    errors.phone = "El campo telefono debe tener 8 digitos";
  } else if (form.phone.trim().length > 8) {
    form.phone = form.phone.substring(0, 8);
  }

  if (form.noSupport === "") {
    errors.noSupport = "El campo no. soporte es requerido";
  } else if (form.noSupport.length >= 50) {
    form.noSupport = form.noSupport.substring(0, 50);
  }

  if (form.supportType === 0) {
    errors.supportType = "El campo tipo de soporte es requerido";
  }

  return errors;
};

const CreateRequestPage = () => {
  const { userId, email, name } = useAuth();
  const { cart, getTotal, clearCart, removeProduct } = useSale();
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const stepArray = ["General", "Soporte", "Completar"];
  initialForm.email = email;

  const handleClick = (clickType) => {
    let newStep = currentStep;
    clickType == "next" ? newStep++ : newStep--;
    // Check if steps are within the boundary
    if (newStep > 0 && newStep <= stepArray.length) {
      setCurrentStep(newStep);
    }
  };

  const request = async (form) => {
    form.id = userId;
    form.examType = cart;
    const converted = convertToCreateRequest(form);
    const result = await Swal.fire({
      title: "Desea crear la solicitud?",
      text: "al confirmar se creara la solicitud",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      denyButtonText: "Cancelar",
    });

    if (!result.isConfirmed) {
      return {
        successful: false,
        message: "Solicitud cancelada",
      };
    }

    const data = await createRequest(converted);

    if (data.successful) {
      Swal.fire("Solicitud creada", data.message, "success");
      setCurrentStep(currentStep + 1);
      clearCart();
    } else {
      Swal.fire("Error al crear solicitud", data.message, "error");
    }

    return data;
  };

  const {
    form,
    errors,
    handleChange,
    handleSubmit,
    response,
    changeList,
    removeList,
    loading,
  } = useForm(initialForm, validateForm, request);

  const CurrentStepComponent = {
    1: (
      <GeneralRequest
        form={form}
        errors={errors}
        onChange={handleChange}
        changeList={changeList}
        removeList={removeList}
      />
    ),
    2: <SupportRequest form={form} errors={errors} onChange={handleChange} />,
    3: <CompleteForm />,
  };

  const sendForm = async (form) => {
    form.examType = cart;
    handleSubmit(form);
  };

  return (
    <section>
      <HeaderPage
        title="Solicitud"
        pref="Crear"
        suf={
          <FaShoppingCart
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
            size={25}
          />
        }
      />

      <div className="mx-auto my-5 w-full lg:w-3/4">
        <Stepper steps={stepArray} currentStepNumber={currentStep} />
      </div>
      <form className="flex flex-col items-center" onSubmit={sendForm}>
        <Row className="w-full rounded-xl p-10 shadow-[0px_20px_20px_10px_#00000024] md:w-3/4">
          {response && (
            <Response message={response.message} type={response.successful} />
          )}
          {CurrentStepComponent[currentStep]}
          <Col
            xs={12}
            className={`flex ${currentStep != 1 ? "justify-between" : "justify-end"
              } pt-6`}
          >
            {currentStep > 1 && (
              <Button
                type="button"
                color="failure"
                onClick={handleClick}
                disabled={currentStep == 3}
              >
                Anterior
              </Button>
            )}
            <Button
              type={currentStep < 2 ? "button" : "submit"}
              color="primary"
              onClick={() => currentStep < 2 && handleClick("next")}
              disabled={currentStep == 3}
              isProcessing={loading}
              processingSpinner={
                <AiOutlineLoading className="h-6 w-6 animate-spin" />
              }
            >
              {currentStep < 2 ? "Siguiente" : "Finalizar"}
            </Button>
          </Col>
        </Row>
        <Drawer
          title={
            <div>
              <h1>Pedido para {name}</h1>
              <h2>Correo: {email}</h2>
            </div>
          }
          isOpen={isOpen}
          setIsOpen={() => setIsOpen(!isOpen)}
        >
          <article className="mb-4 ms-4 flex justify-center">
            <Button
              type={currentStep < 2 ? "button" : "submit"}
              color="primary"
              onClick={() => currentStep < 2 && handleClick("next")}
              disabled={currentStep == 3}
            >
              <FaCashRegister size={20} className="me-2" />{" "}
              {currentStep < 2 ? "Siguiente" : "Finalizar"}
            </Button>
          </article>
          <article className="flex justify-between px-4">
            <p className="text-2xl font-bold">
              Total: Q {getTotal().toFixed(2)}
            </p>
            <Button color="failure" onClick={clearCart}>
              <FaTrash size={20} className="me-2" /> Eliminar
            </Button>
          </article>
          <section className="m-4">
            <h2 className="font-bold">Productos Detalle</h2>
            <div className="flex flex-wrap gap-4">
              {cart.map((item, idx) => (
                <Card
                  key={idx}
                  className="relative w-full border-2 py-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
                >
                  <FaTrash
                    className="absolute right-5 top-3 cursor-pointer text-red-600"
                    size={15}
                    onClick={() => {
                      removeProduct(item);
                    }}
                  />
                  <span className="mt-2 flex flex-row justify-between">
                    <p className="font-bold">{item.name}</p>{" "}
                    <p>Q {item.price?.toFixed(2)}</p>
                  </span>
                </Card>
              ))}
            </div>
          </section>
        </Drawer>
      </form>
    </section>
  );
};

export default CreateRequestPage;
