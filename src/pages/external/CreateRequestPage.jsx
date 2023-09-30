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

const initialForm = {
  requestType: 0,
  description: "",
  noRequest: 0,
  supportType: 0,
  email: "",
  phone: "",
  noSupport: "",
};

const validateForm = (form) => {
  const errors = {};

  if (form.description === "") {
    errors.description = "El campo descripcion es requerido";
  }

  if (form.email === "") {
    errors.email = "El campo correo electronico es requerido";
  }

  if (form.phone === "") {
    errors.phone = "El campo telefono es requerido";
  }else if (form.phone.trim().length < 8) {
    errors.phone = "El campo telefono debe tener 8 digitos";
  }else if (form.phone.trim().length > 8) {
    form.phone = form.phone.substring(0,8);
  }

  if (form.noSupport === "") {
    errors.noSupport = "El campo no. soporte es requerido";
  }

  if (form.requestType === 0) {
    errors.requestType = "El campo tipo de solicitud es requerido";
  }

  if (form.supportType === 0) {
    errors.supportType = "El campo tipo de soporte es requerido";
  }

  return errors;
};

const CreateRequestPage = () => {
  const { userId, email } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
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
    const converted = convertToCreateRequest(form);
    const result = await Swal.fire({
      title: "Desea crear la solicitud?",
      text: "al confirmar se creara la solicitud",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
    });

    if (result.isConfirmed) {
      const data = await createRequest(converted);
      console.log({data});
      if (data.successful) {
        Swal.fire("Solicitud creada", data.message, "success");
        setCurrentStep(currentStep + 1);
      } else {
        Swal.fire("Error al crear solicitud", data.message, "error");
      }

      return data;
    }else{
      return {
        successful: false,
        message: "Solicitud cancelada",
      }
    }
  };

  const { form, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    validateForm,
    request,
  );

  const CurrentStepComponent = {
    1: <GeneralRequest form={form} errors={errors} onChange={handleChange} />,
    2: <SupportRequest form={form} errors={errors} onChange={handleChange} />,
    3: <CompleteForm />,
  };

  return (
    <section>
      <HeaderPage title="Solicitud" pref="Crear" />
      <div className="mx-auto my-5 w-full lg:w-3/4">
        <Stepper steps={stepArray} currentStepNumber={currentStep} />
      </div>
      <form className="flex flex-col items-center">
        <Row className="w-full rounded-xl p-10 shadow-[0px_20px_20px_10px_#00000024] md:w-3/4">
          {CurrentStepComponent[currentStep]}
          <Col
            xs={12}
            className={`flex ${
              currentStep != 1 ? "justify-between" : "justify-end"
            } pt-6`}
          >
            {currentStep > 1 && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClick}
                disabled={currentStep == 3}
              >
                Anterior
              </button>
            )}
            <button
              type={currentStep < 2 ? "button" : "submit"}
              className="btn btn-primary"
              onClick={(e) =>
                currentStep < 2 ? handleClick("next") : handleSubmit(e)
              }
              disabled={currentStep == 3}
            >
              {currentStep < 2 ? "Siguiente" : "Finalizar"}
            </button>
          </Col>
        </Row>
      </form>
    </section>
  );
};

export default CreateRequestPage;
