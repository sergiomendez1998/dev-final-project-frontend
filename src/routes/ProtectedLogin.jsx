import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedLogin = ({ children }) => {
  const { isLogedIn } = useAuth();

  if (isLogedIn) {
    return <Navigate to={`/`} />;
  }

  return children;
};

ProtectedLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedLogin;
