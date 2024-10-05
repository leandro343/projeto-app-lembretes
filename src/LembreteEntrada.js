import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function LembreteEntrada({ onAdd }) {
  const [novoLembrete, setNovoLembrete] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novoLembrete.trim()) {
      onAdd(novoLembrete);
      setNovoLembrete('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Digite seu novo lembrete"
          value={novoLembrete}
          onChange={(e) => setNovoLembrete(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        OK
      </Button>
    </Form>
  );
}

export default LembreteEntrada;
