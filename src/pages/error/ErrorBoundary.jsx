import { node } from "prop-types";
import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Actualiza el estado para que el próximo renderizado muestre el fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Aquí puedes realizar acciones adicionales, como enviar errores a un servicio de seguimiento.
        console.error("Error capturado:", error.message, errorInfo.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // Puedes personalizar la UI de fallback que se muestra cuando ocurre un error.
            return (
                <section className="flex h-screen flex-col flex-wrap justify-around overflow-y-auto p-8 font-bold text-red-600">
                    <header className="text-center text-3xl">
                        <p> Hubo un error en la aplicación. {this.state.error?.message}</p>
                    </header>
                    <main className="text-center">
                        <article>
                            <p className="text-2xl">
                                Contacte con el administrador del sistema
                            </p>
                            <p>
                                De ser posible envie una imagen con este error, cierre sesion y
                                vuelva a iniciar la pagina
                            </p>
                            <a
                                className="cursor-pointer"
                                href="mailto:Cgalvan@itglobal.com.gt"
                            >
                                contactarse a este correo: Cgalvan@itglobal.com.gt
                            </a>
                        </article>
                        <article className="mt-8">
                            <p className="text-xl"> Lamentamos los inconvenientes</p>
                            <p>
                                {" "}
                                <a href="/login">Regresar a inicio</a>
                            </p>
                        </article>
                    </main>
                    <footer className="text-center">
                        <span>Name. {this.state.error?.name}</span>
                        <span>Error: {this.state.error?.message}</span>
                        <span>Stack. {this.state.error?.stack}</span>
                    </footer>
                </section>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: node.isRequired,
};
