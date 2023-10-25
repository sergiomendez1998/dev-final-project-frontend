import { useSelector } from "react-redux";

export const useAuth = () => {
  const {
    isLogedIn,
    name,
    email,
    token,
    role,
    userId,
    userType,
    nit,
    modules,
    authorities,
  } = useSelector((state) => state.auth);

  return {
    isLogedIn,
    name,
    email,
    token,
    role,
    userId,
    userType,
    nit,
    authorities,
    modules,
  };
};
