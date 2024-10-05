import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LembreteEntrada from './LembreteEntrada';
import { ListGroup } from 'react-bootstrap';

function App() {
  const [lembretes, setLembretes] = useState([]);

  const adicionarLembrete = (lembrete) => {
    setLembretes([...lembretes, lembrete]);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <LembreteEntrada onAdd={adicionarLembrete} />
          <ListGroup className="mt-3">
            {lembretes.map((lembrete, index) => (
              <ListGroup.Item key={index}>{lembrete}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
