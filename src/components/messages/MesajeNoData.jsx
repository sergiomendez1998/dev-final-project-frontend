import PropTypes from 'prop-types';

export const MesajeNoData = ({ mesaje }) => {
  return (
    <div className="m-3">
      <p className="text-center font-bold text-red-700">{mesaje}</p>
    </div>
  );
};

MesajeNoData.propTypes = {
  mesaje: PropTypes.string.isRequired,
};
