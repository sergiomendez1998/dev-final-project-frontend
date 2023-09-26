import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEnterprise } from '../hooks/useEnterprise';
import { useError } from '../hooks/useError';

const ProtectedUnauthorized = ({ children }) => {
  const { isLoggedIn, isAdmin } = useAuth();
  const { idEmpresa } = useEnterprise();
  const { status } = useError();

  if (!isLoggedIn) {
    return <Navigate to={`/login`} />;
  }

  if (idEmpresa == 0) {
    return <Navigate to={`/ChangeEnterprice`} />;
  }

  if (!isAdmin) {
    return <Navigate to={`/unauthorized`} />;
  }

  switch (status) {
    case 403:
      return <Navigate to={`/unauthorized`} />;
    case 401:
      return <Navigate to={`/expired`} />;
    case 100:
      return <Navigate to={`/error`} />;
  }

  return children;
};

ProtectedUnauthorized.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedUnauthorized;
