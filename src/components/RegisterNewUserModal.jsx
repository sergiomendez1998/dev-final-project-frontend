import {Navbar} from "./layout/Navbar.jsx";
import {RegisterForm} from "./RegisterForm.jsx";
import {NavLink} from "react-router-dom";

export const RegisterNewUserModal = () => {

    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center ">

                <div className="border p-4 bg-white">
                    <div className="border p-4 mb-4 text-center">
                        <h2>Bienvenido a lab2you registro de usuarios</h2>
                        <p>Por favor ingresa tus datos solicitados</p>
                        <div className="text-right">
                            <NavLink to={"/"} className="btn btn-warning">
                                Iniciar sesion
                            </NavLink>
                        </div>
                    </div>

                   <RegisterForm/>

                </div>
            </div>
        </>
    )
}