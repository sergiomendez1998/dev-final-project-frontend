import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useForm = (initialForm, validateForm, peticion) => {
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
    }

    setForm(newForm);

    setErrors(validateForm(newForm));
  };

  const handleBlur = (e) => {
    handleChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("");
    const valErr = validateForm(form);
    setErrors(valErr);
    setLoading(true);
    if (Object.keys(valErr).length === 0) {
      try {
        const response = await peticion(form);
        setForm(initialForm);
        setResponse(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setResponse("");
      Swal.fire(
        'Hay errores en el formulario',
        `Completa los campos ${(Object.keys(valErr).map(x => `${x} `))} correctamente`,
        'error'
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
  };
};
