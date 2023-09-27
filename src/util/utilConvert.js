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
      name: data.name,
      description: data.description
    },
  };
};
