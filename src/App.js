import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import MyContextProvider from './MycontextProvider'; // make sure the path is correct
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <MyContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </MyContextProvider>
  );
}

export default App;
