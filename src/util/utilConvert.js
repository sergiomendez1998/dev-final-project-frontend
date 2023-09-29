export const convertToCustomerRegister = (data) => {
  return {
    cui: data.cui,
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    nit: data.nit,
    phoneNumber: data.phoneNumber,
    gender: data.gender,
    occupation: data.occupation,
    user: {
      nickName: data.firstName,
      password: data.password,
      email: data.email,
    },
  };
};

export const convertToCatalogRegister = (data) => {
  return {
    catalogType: data.catalogType,
    catalogDTO: {
      id: data.id ?? 0,
      name: data.name,
      description: data.description
    },
  };
};

export const convertToEmployeeRegister = (data) => {
  return {
    cui: data.cui,
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    phoneNumber: data.phoneNumber,
    gender: data.gender,
    department: {
      id: 0,
      name: data.departmentId,
    },
    user: {
      nickName: data.nickName,
      password: data.password,
      email: data.email,
      userType: data.userType,
      role: {
        id: 0,
        name: data.roleId,
      },
    },
  }
};
