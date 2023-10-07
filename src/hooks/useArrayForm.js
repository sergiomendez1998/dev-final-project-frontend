import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useArrayForm = (initialForm, validateForm, onSubmit) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setForm(initialForm);
  }, [initialForm]);

  const handleChange = (e, idx) => {
    const { name, value } = e.target;

    const newForm = [...form];

    const newValue = {
      ...newForm[idx],
      [name]: value,
    };

    newForm[idx] = newValue;    

    setForm(newForm);

    setErrors(validateForm(newForm));
  };

  const removeList = (e, idx) => {
    const newForm = form.filter((item, index) => index !== idx);    
    setErrors(validateForm(newForm));
    setForm(newForm);
  };

  const addList = () => {
    const newForm = [...form, form[0]];
    setErrors(validateForm(newForm));
    setForm(newForm);
  }

  const handleBlur = (e, idx) => {
    handleChange(e, idx);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("");
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setLoading(true);
    if (validationErrors.length === 0) {
      try {
        const response = await onSubmit(form);
        response.successful && setForm(initialForm);
        setResponse(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setResponse("");
      
      Swal.fire(
        "Hay errores en el formulario",
        `tienes ${validationErrors.length} errores`,
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
    removeList,
    addList,
  };
};
