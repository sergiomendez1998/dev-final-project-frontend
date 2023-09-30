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

export const convertToEmployeeUpdate = (data) => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,    
    user: {
      id: data.userId,
      email: data.email,
      role: {
        id: 0,
        name: data.roleId,
      },
    }
  }
};

export const convertToEmployee = (data) => {

  if (!data) {
    return;
  }

  return {
    cui: data.cui,
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    phoneNumber: data.phoneNumber,
    gender: data.gender,
    departmentId: data.department.name,
    nickName: data.user.nickName,
    email: data.user.email,
    password: "",
    userType: 'internal',
    roleId: data?.user.role?.name,
    userId: data.user.id,
  }
};

export const convertToCreateRequest = (data)=>{
  return {
    supportNumber: data.noSupport,
    email: data.email,
    remark: data.description,
    examType: {
      id: 0,
      name: data.requestType
    },
    supportType: {
      id: 0,
      name: data.supportType,
    },
    userId: data.id
  }
}
