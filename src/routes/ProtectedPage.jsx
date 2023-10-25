import { node } from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const ProtectedPage = ({ children }) => {
  const { isLogedIn } = useAuth();

  if (!isLogedIn) {
    return <Navigate to={'/login'} />;
  }

  return children;
};

ProtectedPage.propTypes = {
  children: node.isRequired,
};

export default ProtectedPage;
