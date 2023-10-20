import PropTypes from 'prop-types';

export const Response = ({ message, type }) => {
  return (
    <div
      className={`my-1 flex w-full flex-row rounded-md ${type ? 'bg-emerald-500' : 'bg-rose-500'
        } p-2 shadow-lg`}
    >
      <div className="ml-1">
        <p className="font-bold text-white">{message}</p>
      </div>
    </div>
  );
};

Response.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
};
