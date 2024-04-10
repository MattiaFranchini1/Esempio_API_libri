
const express = require('express'); //libreria express
const app = express();
const bodyParser = require('body-parser');

//lista libri
const libri = [
    { id: 1, title: "Il Signore degli Anelli", author: "J.R.R. Tolkien", publisher: "Bompiani", price: 20 },
    { id: 2, title: "Harry Potter e la Pietra Filosofale", author: "J.K. Rowling", publisher: "Salani", price: 15 },
    { id: 3, title: "1984", author: "George Orwell", publisher: "Mondadori", price: 18 },
    { id: 4, title: "Il vecchio e il mare", author: "Ernest Hemingway", publisher: "Mondadori", price: 25 },
    { id: 5, title: "Moby Dick", author: "Herman Melville", publisher: "Garzanti", price: 22 },
    { id: 6, title: "Cime tempestose", author: "Emily Brontë", publisher: "Mondadori", price: 19 },
    { id: 7, title: "Orgoglio e pregiudizio", author: "Jane Austen", publisher: "Newton Compton", price: 18 },
    { id: 8, title: "Il nome della rosa", author: "Umberto Eco", publisher: "Bompiani", price: 21 },
    { id: 9, title: "Cent'anni di solitudine", author: "Gabriel García Márquez", publisher: "Mondadori", price: 20 },
    { id: 10, title: "La fattoria degli animali", author: "George Orwell", publisher: "Einaudi", price: 17 },
    { id: 11, title: "Delitto e castigo", author: "Fëdor Dostoevskij", publisher: "Feltrinelli", price: 23 },
    { id: 12, title: "La metamorfosi", author: "Franz Kafka", publisher: "Mondadori", price: 16 },
    { id: 13, title: "Il giovane Holden", author: "J.D. Salinger", publisher: "Mondadori", price: 18 },
    { id: 14, title: "Don Chisciotte", author: "Miguel de Cervantes", publisher: "Mondadori", price: 24 },
    { id: 15, title: "La Divina Commedia", author: "Dante Alighieri", publisher: "Mondadori", price: 28 },
    { id: 16, title: "Piccole donne", author: "Louisa May Alcott", publisher: "Mondadori", price: 19 },
    { id: 17, title: "Anna Karenina", author: "Lev Tolstoj", publisher: "Mondadori", price: 26 },
    { id: 18, title: "Cronache di Narnia", author: "C.S. Lewis", publisher: "Mondadori", price: 20 },
    { id: 19, title: "Oliver Twist", author: "Charles Dickens", publisher: "Mondadori", price: 17 },
    { id: 20, title: "Il conte di Montecristo", author: "Alexandre Dumas", publisher: "Mondadori", price: 25 },
    { id: 21, title: "Il Gattopardo", author: "Giuseppe Tomasi di Lampedusa", publisher: "Mondadori", price: 24 },
    { id: 22, title: "Il Piccolo Principe", author: "Antoine de Saint-Exupéry", publisher: "Mondadori", price: 15 },
    { id: 23, title: "Il nome della rosa", author: "Umberto Eco", publisher: "Bompiani", price: 21 },
    { id: 24, title: "Il Trono di Spade", author: "George R.R. Martin", publisher: "Mondadori", price: 30 },
    { id: 25, title: "Lo Hobbit", author: "J.R.R. Tolkien", publisher: "Bompiani", price: 18 },
    { id: 26, title: "La ragazza di fuoco", author: "Suzanne Collins", publisher: "Mondadori", price: 19 },
    { id: 27, title: "Il cacciatore di aquiloni", author: "Khaled Hosseini", publisher: "Mondadori", price: 20 },
    { id: 28, title: "Il ritratto di Dorian Gray", author: "Oscar Wilde", publisher: "Mondadori", price: 16 },
    { id: 29, title: "La storia infinita", author: "Michael Ende", publisher: "Mondadori", price: 22 },
    { id: 30, title: "Il giovane Holden", author: "J.D. Salinger", publisher: "Mondadori", price: 18 },
    { id: 31, title: "Donne che corrono coi lupi", author: "Clarissa Pinkola Estés", publisher: "Mondadori", price: 28 },
    { id: 32, title: "Cronache del ghiaccio e del fuoco", author: "George R.R. Martin", publisher: "Mondadori", price: 32 },
    { id: 33, title: "Il giovane Holden", author: "J.D. Salinger", publisher: "Mondadori", price: 18 },
    { id: 34, title: "Shining", author: "Stephen King", publisher: "Mondadori", price: 20 },
    { id: 35, title: "Il Piccolo Principe", author: "Antoine de Saint-Exupéry", publisher: "Mondadori", price: 15 },
    { id: 36, title: "Le cronache di Narnia", author: "C.S. Lewis", publisher: "Mondadori", price: 20 },
    { id: 37, title: "1984", author: "George Orwell", publisher: "Mondadori", price: 18 },
    { id: 38, title: "Il Canto di Natale", author: "Charles Dickens", publisher: "Mondadori", price: 12 },
    { id: 39, title: "La lunga marcia", author: "Richard Bachman", publisher: "Sperling & Kupfer", price: 18 },
    { id: 40, title: "Piccole donne crescono", author: "Louisa May Alcott", publisher: "Mondadori", price: 18 },
    { id: 41, title: "Il mondo nuovo", author: "Aldous Huxley", publisher: "Mondadori", price: 21 },
    { id: 42, title: "Le avventure di Pinocchio", author: "Carlo Collodi", publisher: "Mondadori", price: 15 },
    { id: 43, title: "Il richiamo della foresta", author: "Jack London", publisher: "Mondadori", price: 16 },
    { id: 44, title: "Il vecchio e il mare", author: "Ernest Hemingway", publisher: "Mondadori", price: 25 },
    { id: 45, title: "Il castello", author: "Franz Kafka", publisher: "Mondadori", price: 20 },
    { id: 46, title: "La fattoria degli animali", author: "George Orwell", publisher: "Einaudi", price: 17 },
    { id: 47, title: "Lo Hobbit", author: "J.R.R. Tolkien", publisher: "Bompiani", price: 18 },
    { id: 48, title: "Il grande Gatsby", author: "F. Scott Fitzgerald", publisher: "Mondadori", price: 22 },
    { id: 49, title: "Cime tempestose", author: "Emily Brontë", publisher: "Mondadori", price: 19 },
    { id: 50, title: "La fattoria degli animali", author: "George Orwell", publisher: "Einaudi", price: 17 }
];

//cose per gestire i cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());

//Endpoint per ottenere tutti i libri
app.get('/libri', (req, res) => {
    res.json(libri);
});

//Endpoint per ottenere il libro con un id
app.get('/libri/:id', (req, res) => {
    const libroId = parseInt(req.params.id);
    const libro = libri.find(libro => libro.id === libroId);

    if (libro) {
        res.json(libro);
    } else {
        res.status(404).json({ message: 'Libro non trovato' });
    }
});

// Endpoint per creare un nuovo libro
app.post('/libri', (req, res) => {
    console.log(req.body)
    const nuovoLibro = req.body;
    const nuovoId = libri.length + 1;
    nuovoLibro.id = nuovoId;

    console.log(nuovoLibro)
    libri.push(nuovoLibro);
    res.status(201).json(nuovoLibro);
});

//Endpoint per cancellare un libro
app.delete('/libri/:id', (req, res) => {
    const libroId = parseInt(req.params.id);
    const index = libri.findIndex(libro => libro.id === libroId);

    if (index !== -1) {
        libri.splice(index, 1);
        res.status(200).json({ message: 'Libro eliminato con successo' });
    } else {
        res.status(404).json({ message: 'Libro non trovato' });
    }
});

//avvio il server
app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});
