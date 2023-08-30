import { useEffect, useState } from "react";

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
    setErrors(validateForm(form));
    setLoading(true);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await peticion(form);
        setForm(initialForm);
        setResponse(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setResponse("");
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
