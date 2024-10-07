import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function LembreteLista({ lembretes, onRemoverLembrete }) {
  return (
    <div>
      <h3 className="text-center mt-4">Seus Lembretes</h3>
      <ListGroup className="mt-3">
        {lembretes.map((lembrete, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <span>{lembrete}</span>
            <Button variant="danger" size="sm" onClick={() => onRemoverLembrete(index)}>
              Remover
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default LembreteLista;
