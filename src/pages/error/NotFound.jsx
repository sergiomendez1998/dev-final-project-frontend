import { string, number, oneOfType } from "prop-types";
import { useState, useEffect } from "react";
import { Col } from "../../components/grid/Col";
import { Row } from "../../components/grid/Row";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const NotFound = ({ Message, Number }) => {
  const navigate = useNavigate();
  const { handlerLogout } = useLogin();

  const [text, setText] = useState("Regresar");

  useEffect(() => {
    if (Number === "404") {
      setText("Regresar");
    } else if (Number === "500" || Number === "401") {
      setText("Cerrar Sesión");
    }
  }, [Number]);

  const handleClick = () => {
    if (Number) {
      navigate(-1);
    } else if (Number === "500" || Number === "401") {
      handlerLogout();
    }
  };

  return (
    <div className="container mx-auto">
      <Row className="min-h-[80vh] items-center justify-center">
        <Col xs={12} className="text-center">
          <span className="block text-3xl font-bold lg:text-8xl">{Number}</span>
          <div className="mb-4 text-2xl italic md:text-3xl">{Message}</div>
          <span
            className="cursor-pointer font-bold text-sky-700 hover:text-sky-500"
            onClick={handleClick}
          >
            {text}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  Message: string.isRequired,
  Number: oneOfType([string, number]).isRequired,
};
