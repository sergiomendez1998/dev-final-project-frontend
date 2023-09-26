import PropTypes from 'prop-types';

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
}) => {
  return (
    <div className="mt-4 w-full">
      <label className="block font-bold text-gray-600">{label}</label>
      <input
        type={type}
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
      />
      <p className="font-bold text-red-600">{error}</p>
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};
