
export const LoginPage1 = () => {
    return(
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img
                                src="/dist/img/logo.jpg"
                                className="img-fluid"
                                alt="Phone image"
                            />
                        </div>
                        <div className="col-md-12 col-lg-5 col-xl-5 offset-xl-1">
                            <form className="border rounded p-4">
                                <div className="text-center mb-4">
                                    <h1>Bienvenido</h1>
                                </div>
                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        <i className="fas fa-envelope"></i> Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">
                                        tu correo electrónico es seguro con nosotros.
                                    </div>
                                </div>

                                {/* Password input */}
                                <div className="form-outline mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        <i className="fas fa-lock"></i> Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                >
                                    Sign in
                                </button>

                                <div className="d-flex justify-content-around align-items-center mb-4">
                                    <br/>
                                    <br/>
                                    <a href="#!">Olviaste tu contraseña?</a>
                                </div>

                                <div className="text-center">
                                    <p>
                                       no tienes cuenta aun? <a href="#!">Registrar</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}