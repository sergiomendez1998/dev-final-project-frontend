import { useSelector } from 'react-redux'

export const useAuth = () => {
  const {isLogedIn, name, email, token, role} = useSelector(state => state.auth)

  console.log(isLogedIn, name, email, token, role)

  return {
    isLogedIn,
    name,
    email,
    token,
    role
  }
}

