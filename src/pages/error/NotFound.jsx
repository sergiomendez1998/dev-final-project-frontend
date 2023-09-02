import React from 'react';
import { AnimatedLink } from '../../components/links/AnimatedLink';
import { Col } from '../../components/grid/Col';
import { Row } from '../../components/grid/Row';

export const NotFound = ({Message, Number}) => {
  return (
    <div className="container mx-auto">
      <Row className="justify-center items-center min-h-[80vh]">
        <Col xs={12} className="text-center">
          <span className="text-8xl font-bold d-block">{Number}</span>
          <div className="mb-4 italic text-3xl">{Message}</div>
          <AnimatedLink to={'/'} className="btn btn-link text-sky-700">
            Regresar Al Inicio
          </AnimatedLink>
        </Col>
      </Row>
    </div>
  );
};

