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

export const convertToCreateRequest = (data) => {
  return {
    supportNumber: data.noSupport,
    email: data.email,
    remark: data.description,
    items: data.examType.map(exam => {
      return {
        id: exam.id,
        name: exam.name,
        description: exam.description,
      }
    }),
    supportType: {
      id: 0,
      name: data.supportType,
    },
    userId: data.id
  }
}

export const convertToCreateSample = (data) => {
  return {
    label: data.label,
    presentation: data.presentation,
    quantity: data.quantity,
    sampleType: {
      id: data.sampleType,
      name: '',
      description: '',
    },
    measureUnit: {
      id: data.measureUnit,
      name: '',
      description: '',
    },
    expirationDate: new Date(data.expirationDate).toISOString(),
  }
}

export const convertToItemsSelect = (data) => {
  return Object.entries(data).map(([key, value]) => {
    return {
      label: key,
      options: value.map((v) => {
        return {
          value: v.id,
          label: v.itemWrapper.name,
        };
      }),
    };
  });
}

export const convertToGeneralInfoSample = (data) => {
  return {
    Id: data.id,
    "Unidad de medida": data.measureUnit.description,
    "Presentación:": data.presentation,
    Tipo: data.sampleType.name,
    Cantidad: data.quantity,
    Items: data.items.length,
  }
}
