import {RegisterPage} from "../pages/RegisterPage.jsx";
import {RegisterForm} from "./RegisterForm.jsx";

export const RegistrationFormView = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Registro de usuarios</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="src/components/layout#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-4">
                <RegisterForm/>
                </div>

            </div>
        </>
    );
};