import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { isLogedIn, name, email, token, role, userId } = useSelector(
    (state) => state.auth
  );

  return {
    isLogedIn,
    name,
    email,
    token,
    role,
    userId
  };
};
