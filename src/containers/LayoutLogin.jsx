import PropTypes from 'prop-types';

const LayoutLogin = ({ children }) => {
  return <main>{children}</main>;
};

LayoutLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutLogin;