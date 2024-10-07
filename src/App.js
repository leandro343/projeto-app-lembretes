import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';
import './App.css'; // Importe o arquivo CSS

function App() {
  // Lembretes predefinidos
  const [lembretes, setLembretes] = useState([
    'Preparar aula de programação',
    'Fazer feira',
    'Preparar marmitas',
  ]);

  // Função para adicionar um lembrete
  const adicionarLembrete = (novoLembrete) => {
    if (novoLembrete.trim() !== '') {
      setLembretes([...lembretes, novoLembrete]);
    }
  };

  // Função para remover um lembrete
  const removerLembrete = (indexToRemove) => {
    const novosLembretes = lembretes.filter((_, index) => index !== indexToRemove);
    setLembretes(novosLembretes);
  };

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Row className="w-100 justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <h1 className="text-center text-primary mb-4">Lembretes</h1>
            <LembreteEntrada onAdicionarLembrete={adicionarLembrete} />
            <LembreteLista lembretes={lembretes} onRemoverLembrete={removerLembrete} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
