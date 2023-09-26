import PropTypes from 'prop-types';

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
      <label className="block font-bold text-gray-600">{label}</label>
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
      <p className="font-bold text-red-600">{error}</p>
    </div>
  );
};

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  idField: PropTypes.string.isRequired,
  nameField: PropTypes.string.isRequired,
  unSelectedValue: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
};
