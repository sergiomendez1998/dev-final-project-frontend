import { ButtonBack } from "../../../components/buttons/ButtonBack";
import { UserForm } from "../../../components/forms/UserForm";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { USER_TYPES } from "../../../config/constants";
import { createEmployee } from "../../../services/userService";
import { convertToEmployeeRegister } from "../../../util/utilConvert";

const initialForm = {
  cui: "",
  firstName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  gender: "",
  departmentId: 0,
  nickName: "",
  email: "",
  userType: USER_TYPES.internal,
  roleId: 0,
};

const CreateUserPage = () => {
  const sendForm = async (form) => {
    const convert = convertToEmployeeRegister(form);
    const response = await createEmployee(convert);
    return response;
  };

  return (
    <section>
      <HeaderPage title="Mantenimiento Usuarios" pref="Crear" />
      <ButtonBack />
      <div className="flex items-center justify-center">
        <UserForm initialForm={initialForm} sendForm={sendForm} />
      </div>
    </section>
  );
};

export default CreateUserPage;
