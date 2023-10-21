import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useForm = (initialForm, validateForm, onSubmit) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setForm(initialForm);
  }, [initialForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newForm = {
      ...form,
      [name]: value,
    };

    setForm(newForm);

    setErrors(validateForm(newForm));
  };

  const changeList = (name, value) => {
    const newForm = {
      ...form,
      [name]: [...form[name], value],
    };
    setErrors(validateForm(newForm));
    setForm(newForm);
  }

  const handleChangeFile = (e) => {
    const { name, files } = e.target;

    const newForm = {
      ...form,
      [name]: files[0],
    };

    setForm(newForm);

    setErrors(validateForm(newForm));
  };

  const removeList = (name, value) => {
    const newForm = {
      ...form,
      [name]: form[name].filter((item) => item !== value),
    };
    setErrors(validateForm(newForm));
    setForm(newForm);
  }

  const handleBlur = (e) => {
    handleChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("");
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setLoading(true);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await onSubmit(form);
        response.successful ? setForm(initialForm) : setErrors(response.errors ?? {});
        setResponse(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setResponse("");
      const errorFields = Object.keys(validationErrors).join(" ");
      Swal.fire(
        "Hay errores en el formulario",
        `Completa los campos ${errorFields} correctamente`,
        "error",
      );
    }
    setLoading(false);
  };

  return {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
    changeList,
    removeList,
    handleChangeFile,
  };
};
