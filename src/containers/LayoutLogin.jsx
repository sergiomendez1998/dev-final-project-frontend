import PropTypes from 'prop-types';

export const LayoutLogin = ({ children }) => {
  return <main>{children}</main>;
};

LayoutLogin.propTypes = {
  children: PropTypes.node.isRequired,
};
