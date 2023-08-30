import React from 'react';
import { Row } from './grid/Row';
import { Col } from './grid/Col';
import { Grid } from './grid/Grid';

const GridTemplate = () => {
  return (
    <div className="container mx-auto">
      <Row>
        <Col>
          <div className="bg-gray-200 p-4">1 of 4</div>
        </Col>
        <Col>
          <div className="bg-gray-200 p-4">2 of 4 (wider)</div>
        </Col>
        <Col>
          <div className="bg-gray-200 p-4">3 of 4</div>
        </Col>
        <Col>
          <div className="bg-gray-200 p-4">4 of 4</div>
        </Col>
      </Row>
      <Grid>
        <div className="bg-gray-200 p-4">1 of 4</div>
        <div className="bg-gray-200 p-4">2 of 4 (wider)</div>
        <div className="bg-gray-200 p-4">3 of 4</div>
        <div className="bg-gray-200 p-4">4 of 4</div>
      </Grid>
    </div>
  );
};

export default GridTemplate;
