//main file dove importo i componenti

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from './components/Homepage.jsx';
import Navbar from './components/Navbar.jsx';
import AddBookPage from './components/AddBook.jsx';
import DeleteBookPage from './components/DeleteBookPage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/delete" element={<DeleteBookPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);