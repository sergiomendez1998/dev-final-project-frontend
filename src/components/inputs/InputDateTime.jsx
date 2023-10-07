import PropTypes from "prop-types";


export const InputDateTime = ({ label, name, value, error, min, max, onChange, className }) => {
  return (
    <div className="mt-4 w-full">
      <label className="block font-bold text-gray-600">{label}</label>
      <input
        name={name}
        className={className}
        type="date"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
       <p className="font-bold text-red-600">{error}</p>
    </div>
  );
};

InputDateTime.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
};
