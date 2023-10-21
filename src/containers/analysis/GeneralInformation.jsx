import { Card } from "flowbite-react";
import { bool, object } from "prop-types";
import { Col } from "../../components/grid/Col";
import { LoadingComponent } from "../../components/loading/LoadingComponent";

export const GeneralInformation = ({ data, isLoading }) => {
    return (
        <div>
            <h2 className="text-center font-bold">Información General</h2>
            {!isLoading ? (
                <Card>
                    <header className="flex flex-row flex-wrap justify-center">
                        {Object.entries(data.Encabezado).map(([key, value]) => {
                            return (
                                <Col
                                    key={key}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    className="flex flex-col text-center"
                                >
                                    <span className="font-bold">{key}</span>
                                    <span>{value}</span>
                                </Col>
                            );
                        })}
                    </header>
                    <section className="flex flex-col rounded-xl border-2 border-gray-300 px-2 py-4">
                        <h2 className="text-center font-bold">Muestra</h2>
                        {Object.entries(data.Muestra).map(([key, value]) => {
                            return (
                                <div key={key} className="flex justify-between">
                                    <span className="font-bold">{key}</span>
                                    <span>{value}</span>
                                </div>
                            );
                        })}
                    </section>
                    <section className="flex flex-col rounded-xl border-2 border-gray-300 px-2 py-4">
                        <h2 className="text-center font-bold">Usuario</h2>
                        {Object.entries(data["Usuario Externo"]).map(([key, value]) => {
                            return (
                                <div key={key} className="flex justify-between">
                                    <span className="font-bold">{key}</span>
                                    <span>{value}</span>
                                </div>
                            );
                        })}
                    </section>
                </Card>
            ) : (
                <LoadingComponent />
            )}
        </div>
    );
};

GeneralInformation.propTypes = {
    data: object,
    isLoading: bool,
};
