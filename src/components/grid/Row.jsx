import PropTypes from 'prop-types';

export const Row = ({ children, className }) => {
  return <div className={`flex flex-wrap ${className}`}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
