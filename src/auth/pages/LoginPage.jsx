import {useState} from "react";
import Swal from "sweetalert2";
import {useAuth} from "../hooks/useAuth";
import {Navbar} from "../../components/layout/Navbar.jsx";
import {Footer} from "../../components/layout/Footer.jsx";
import {NavLink} from "react-router-dom";

const initialLoginForm = {
    email: '',
    password: '',
}
export const LoginPage = () => {

    const {handlerLogin} = useAuth();

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const {email, password} = loginForm;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }

        // aca implementamos el login
        handlerLogin({email, password});

        setLoginForm(initialLoginForm);
    }
    return (
        <>

            <div className="modal" style={
                {display: 'block'}} tabIndex="-1">
                <Navbar/>


                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title">BIENVENIDO A LAB2YOU</h5>

                            <div className="col-md-8 col-lg-4 col-xl-5">

                                <img
                                    src="/dist/img/logo.jpg"
                                    className="img-fluid"
                                    alt="Phone image"
                                />

                            </div>
                        </div>
                        <br/>

                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <div className="row justify-content-center">
                                    <div className="col col-10">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            <i className="fas fa-envelope"></i> Correo electrónico
                                        </label>
                                        <input
                                            id="exampleInputEmail1"
                                            className="form-control my-3"

                                            name="email"
                                            value={email}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                    <div className="col col-10">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                            <i className="fas fa-lock"></i> Contraseña
                                        </label>
                                        <input
                                            className="form-control my-3"
                                            id="exampleInputPassword1"
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button
                                    className="btn btn-primary"
                                    type="submit">
                                    Iniciar Sesion
                                </button>
                            </div>

                            <div className="text-center">
                                <p style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <span style={{ marginRight: "5px" }}>¿No tienes cuenta?</span>
                                    <NavLink to="/registrar" className="nav-link" style={{ color: "blue" }}>
                                        Registrar
                                    </NavLink>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );

}