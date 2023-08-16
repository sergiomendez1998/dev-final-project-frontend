import {useAuth} from "../../auth/hooks/useAuth.js";
import {NavLink} from "react-router-dom";

export const Header = () => {
    const {login, handlerLogout} = useAuth();
    return (
        <div>
            <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"/></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>


                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                    <span className="nav-item nav-link text-primary mx-3">
                        {login.user?.username}
                    </span>
                        <button
                            onClick={handlerLogout}
                            className="btn btn-outline-danger  "><i className="fas fa-sign-out-alt"/>
                            cerrar session
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}