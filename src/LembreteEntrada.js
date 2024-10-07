import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function LembreteEntrada({ onAdicionarLembrete }) {
  const [novoLembrete, setNovoLembrete] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdicionarLembrete(novoLembrete);
    setNovoLembrete('');
  };

  return (
    <Form onSubmit={handleSubmit} className="w-100 mt-3">
      <Row>
        <Col xs={9}>
          <Form.Control
            type="text"
            placeholder="Digite seu novo lembrete"
            value={novoLembrete}
            onChange={(e) => setNovoLembrete(e.target.value)}
            className="input-lembrete"
          />
        </Col>
        <Col xs={2}>
          <Button variant="primary" type="submit" block className="btn-ok">
            OK
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default LembreteEntrada;
