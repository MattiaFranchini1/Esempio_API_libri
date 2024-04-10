//pagina di homepage

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';

const HomePage = () => {
  const [libri, setLibri] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroPrezzo, setFiltroPrezzo] = useState('');
  const [altezzaMassima, setAltezzaMassima] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [libroSelezionato, setLibroSelezionato] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/libri')
      .then(response => response.json())
      .then(data => setLibri(data))
      .catch(error => console.error('Errore durante il recupero dei dati:', error));
  }, []);

  useEffect(() => {
    const altezzaMassimaRiga = Math.max(...Array.from(document.querySelectorAll('.card')).map(card => card.clientHeight));
    setAltezzaMassima(altezzaMassimaRiga);
  }, [libri, filtroNome, filtroPrezzo]);

  const handleCambioRicerca = (event) => {
    setFiltroNome(event.target.value);
  };

  const handleCambioOrdinamentoPrezzo = (event) => {
    setFiltroPrezzo(event.target.value);
  };

  const handleApriModal = (libro) => {
    setLibroSelezionato(libro);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Filtraggio e ordinamento dei libri
  let libriFiltrati = libri.filter(libro => {
    return libro.title.toLowerCase().includes(filtroNome.toLowerCase());
  });

  if (filtroPrezzo === 'asc') {
    libriFiltrati = libriFiltrati.sort((a, b) => a.price - b.price);
  } else if (filtroPrezzo === 'desc') {
    libriFiltrati = libriFiltrati.sort((a, b) => b.price - a.price);
  }

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4" style={{ color: '#76ABAE' }}>Benvenuto nella Libreria Online</h1>
      <Form className="mb-3">
        <Row>
          <Col xs={12} md={6} lg={8} className="mb-3 mb-md-0">
            <Form.Control type="text" placeholder="Cerca per nome..." value={filtroNome} onChange={handleCambioRicerca} />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Form.Select className="mb-3 mb-md-0" onChange={handleCambioOrdinamentoPrezzo} value={filtroPrezzo}>
              <option value="">Predefinito</option>
              <option value="asc">Prezzo crescente</option>
              <option value="desc">Prezzo decrescente</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Row xs={1} md={2} lg={4} className="g-4">
        {libriFiltrati.map((libro) => (
          <Col key={libro.id} style={{ marginBottom: '15px' }}>
            <Card style={{ height: `${altezzaMassima}px`, backgroundColor: '#31363F' }} onClick={() => handleApriModal(libro)}>
              <Card.Img variant="top" src={libro.image} />
              <Card.Body>
                <Card.Title style={{ color: '#76ABAE' }}>{libro.title}</Card.Title>
                <Card.Text style={{ color: '#EEEEEE' }}>
                  <strong>Autore:</strong> {libro.author}<br />
                  <strong>Editore:</strong> {libro.publisher}<br />
                  <strong>Prezzo:</strong> €{libro.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{libroSelezionato && libroSelezionato.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {libroSelezionato && (
            <div>
              <p><strong>Autore:</strong> {libroSelezionato.author}</p>
              <p><strong>Editore:</strong> {libroSelezionato.publisher}</p>
              <p><strong>Prezzo:</strong> €{libroSelezionato.price}</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default HomePage;
