import {NavLink} from "react-router-dom";
import {useAuth} from "../../auth/hooks/useAuth.js";
import {useRoutes} from "../../hooks/useRoutes";
import {NavWrapper} from "../NavWrapper.jsx";

export const Menu = () => {
  const routes = useRoutes();
  const { login } = useAuth();

    return (
        <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <div className="brand-link">
            <img
                src="dist/img/logo.jpg"
                alt="AdminLTE Logo"
                className="brand-image img-fluid elevation-10"
                style={{ opacity: '.8' }}
            />
            <span className="brand-text font-weight-light">Lab2YouApp</span>
          </div>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user1-128x128.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <div className="d-block" style={{ color: 'white' }}>{login.user}</div>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">

                  <NavLink to="/" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                    </p>
                  </NavLink>
                </li>

                {
                  routes.map((it,key)=> {
                    if (it.shouldShowLink)
                      return    <NavWrapper iconName={it.iconName} items={it.routes} title={it.title}/>

                    return null;
                  })
                }

                <li className="nav-header">EXAMPLES</li>

              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    )
}