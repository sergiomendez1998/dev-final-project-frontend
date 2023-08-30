import { Footer } from "./Footer";

export const Dashboard = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
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


                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="small-box bg-primary">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Usuarios Activos</p>
                                    </div>

                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="small-box bg-primary">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Usuarios Activos</p>
                                    </div>

                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="small-box bg-primary">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Usuarios Activos</p>
                                    </div>

                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Laboratorios Realizados</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>               
            </div>
        </>
    );
};
