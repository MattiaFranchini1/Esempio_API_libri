//componente per la pagina di aggiunta libri

import React, { useState } from 'react';
import { Container, Form, Button, Card, Toast } from 'react-bootstrap';

const AddBookPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publisher: '',
        price: ''
    });
    const [showToast, setShowToast] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/libri', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Errore durante la creazione del libro');
            }
            setFormData({
                title: '',
                author: '',
                publisher: '',
                price: ''
            });
            setShowToast(true);
        } catch (error) {
            console.error('Errore:', error);
        }
    };

    return (
        <Container className="mt-4 d-flex justify-content-center align-items-center position-relative">
            <Card style={{ width: '400px' }}>
                <Card.Body>
                    <h1 className="text-center mb-4" style={{ color: '#76ABAE' }}>Aggiungi un Libro</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Titolo</Form.Label>
                            <Form.Control type="text" placeholder="Inserisci il titolo" name="title" value={formData.title} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAuthor">
                            <Form.Label>Autore</Form.Label>
                            <Form.Control type="text" placeholder="Inserisci l'autore" name="author" value={formData.author} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPublisher">
                            <Form.Label>Editore</Form.Label>
                            <Form.Control type="text" placeholder="Inserisci l'editore" name="publisher" value={formData.publisher} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Label>Prezzo</Form.Label>
                            <Form.Control type="number" placeholder="Inserisci il prezzo" name="price" value={formData.price} onChange={handleChange} required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Aggiungi Libro
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                delay={3000}
                autohide
                style={{ position: 'fixed', bottom: '20px', right: '20px' }}
            >
                <Toast.Header>
                    <strong className="me-auto">Successo</strong>
                </Toast.Header>
                <Toast.Body>Libro aggiunto con successo!</Toast.Body>
            </Toast>
        </Container>
    );
};

export default AddBookPage;
