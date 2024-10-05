import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LembreteEntrada from './LembreteEntrada';

function App() {
  const adicionarLembrete = (lembrete) => {
    console.log(lembrete);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <LembreteEntrada onAdd={adicionarLembrete} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
