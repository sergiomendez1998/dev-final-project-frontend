import { useParams } from "react-router-dom";
import { ButtonBack } from "../../../components/buttons/ButtonBack";
import { UserForm } from "../../../components/forms/UserForm";
import { HeaderPage } from "../../../components/layout/HeaderPage";
import { USER_TYPES } from "../../../config/constants";
import { getAllEmployees, updateEmployee } from "../../../services/userService";
import {
  convertToEmployee,
  convertToEmployeeUpdate,
} from "../../../util/utilConvert";
import { useQuery } from "@tanstack/react-query";
import NotFound from "../../error/NotFound";

const initialFormEmployee = {
  cui: "",
  firstName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  gender: "",
  departmentId: 0,
  nickName: "",
  email: "",
  password: "",
  userType: USER_TYPES.internal,
  roleId: 0,
  userId: 0,
};

const UpdateUserPage = () => {
  const { id } = useParams();

  const { data, error } = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployees,
  });

  if (error) {
    return <NotFound Message={error.message} Number={error.statusCode} />;
  }

  const initialForm =
    convertToEmployee(data?.find((item) => item.id === parseInt(id))) ??
    initialFormEmployee;
  initialForm.gender = "";

  const sendForm = async (form) => {
    const convert = convertToEmployeeUpdate(form);
    convert.id = id;
    const response = await updateEmployee(convert);
    return response;
  };

  return (
    <section>
      <HeaderPage title="Mantenimiento Analistas" pref="Actualizar" />
      <ButtonBack />
      <div className="flex items-center justify-center">
        <UserForm
          initialForm={initialForm}
          sendForm={sendForm}
          type={"update"}
        />
      </div>
    </section>
  );
};

export default UpdateUserPage;
