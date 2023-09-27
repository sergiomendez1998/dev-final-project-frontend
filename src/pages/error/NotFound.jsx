import PropTypes from 'prop-types';
import { AnimatedLink } from '../../components/links/AnimatedLink';
import { Col } from '../../components/grid/Col';
import { Row } from '../../components/grid/Row';

const NotFound = ({ Message, Number }) => {
  return (
    <div className="container mx-auto">
      <Row className="min-h-[80vh] items-center justify-center">
        <Col xs={12} className="text-center">
          <span className="block text-8xl font-bold">{Number}</span>
          <div className="mb-4 text-3xl italic">{Message}</div>
          <AnimatedLink to={'/'} className="text-sky-700 hover:text-sky-900">
            Regresar Al Inicio
          </AnimatedLink>
        </Col>
      </Row>
    </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  Message: PropTypes.string.isRequired,
  Number: PropTypes.number.isRequired,
};
