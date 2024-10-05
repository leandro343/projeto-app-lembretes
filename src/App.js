import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LembreteLista from './LembreteLista';

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <LembreteLista />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
