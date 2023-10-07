import PropTypes from "prop-types";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const InputForm = ({
  label,
  name,
  type,
  id,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  className,
  maxLength,
  max,
  iconClass,
  readonly,
}) => {
  const [types, setTypes] = useState(type);

  const handlePassword = () => {
    if (types === "password") {
      setTypes("text");
    } else {
      setTypes("password");
    }
  };

  return (
    <div className="mt-4 w-full">
      <label className="block font-bold text-gray-600">{label}</label>
      <input
        type={types}
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
        maxLength={maxLength}
        max={max}
        disabled={readonly}
      />
      {type === "password" && (
        <button
          type="button"
          className={`relative ${
            iconClass ? iconClass : "bottom-10"
          } left-[90%]`}
          onClick={handlePassword}
        >
          {types === "password" ? <IoEye size={25} /> : <IoEyeOff size={25} />}
        </button>
      )}
      <p
        className={`font-bold text-red-600 ${
          type == "password" ? "relative bottom-6" : ""
        }`}
      >
        {error}
      </p>
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  maxLength: PropTypes.number,
  max: PropTypes.number,
  iconClass: PropTypes.string,
  readonly: PropTypes.bool,
};
