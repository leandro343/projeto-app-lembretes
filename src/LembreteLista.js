import React from 'react';
import { ListGroup } from 'react-bootstrap';

const lembretesFicticios = [
  'Preparar aula de programação',
  'Fazer feira',
  'Preparar marmitas'
];

function LembreteLista() {
  return (
    <ListGroup>
      {lembretesFicticios.map((lembrete, index) => (
        <ListGroup.Item key={index}>{lembrete}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default LembreteLista;
