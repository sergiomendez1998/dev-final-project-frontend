import React from 'react';

export const InputSelect = ({
  label,
  name,
  id,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  className,
  data,
  idField,
  nameField,
  unSelectedValue,
}) => {
  return (
    <div className="mt-4 w-full">
      <label className="font-bold block text-gray-600">{label}</label>
      <select
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        autoFocus
        autoComplete="true"
        required
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value={unSelectedValue}>-- Seleccione una opción --</option>
        {data.map((item, idx) => (
          <option key={idx} value={item[idField]}>
            {item[nameField]}
          </option>
        ))}
      </select>
      <p className="text-red-600 font-bold">{error}</p>
    </div>
  );
};
