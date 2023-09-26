import { useAuth } from '../auth/hooks/useAuth.js';

export const useRoutes = () => {
  const { login } = useAuth();

  const rolesArray = Array.isArray(login.roles)
    ? login.roles.map((role) => role.authority)
    : [];

  let shouldShowLink = false;

  if (rolesArray.includes('ROLE_ADMIN')) {
    shouldShowLink = true;
  }

  return [
    {
      title: 'Control de usuarios',
      iconName: 'fas fa-users',
      shouldShowLink: shouldShowLink,
      routes: [
        {
          id: 1,
          name: 'Crear Usuarios',
          path: '/RegistrationForm',
          iconName: 'fas fa-user-plus',
          shouldShowItem: true,
        },
        {
          id: 2,
          name: 'Lista de Usuarios',
          path: '/RegistrationForm',
          iconName: 'fas fa-list',
          shouldShowItem: true,
        },
      ],
    },
  ];
};
