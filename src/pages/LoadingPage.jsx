import { Col } from "../components/grid/Col";
import logo from '/img/logo.jpg'


export const LoadingPage = () => {
  return (
    <div className="flex h-[90vh] flex-row items-center">
      <div className="container">
        <div className="flex flex-row justify-center">
          <Col md={4} sm={4} xs={8}>
          <img
            src={logo}
            className={`loading rounded-xl`}
            alt=""
          />
            <h3 className="text-center text-3xl font-bold text-gray-500">Cargando... Espere</h3>
          </Col>    
        </div>
      </div>
    </div>
  );
};

