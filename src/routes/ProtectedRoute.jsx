import { node, number } from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children, operation }) => {
  const { isLogedIn, authorities } = useAuth();

  if (!isLogedIn) {
    return <Navigate to={'/login'} />;
  }

  if (!authorities.some((op) => op.id === operation))
    return <Navigate to={'/Unauthorized'} />;


  return children;
};

ProtectedRoute.propTypes = {
  children: node.isRequired,
  operation: number.isRequired,
};

export default ProtectedRoute;
