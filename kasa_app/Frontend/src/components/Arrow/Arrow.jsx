import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './src/pages/Home/Home';
import About from './src/pages/About/About';
import NotFound from './src/pages/NotFound/NotFound';
import LogementDetails from './src/pages/LogementDetails/LogementDetails';
import Header from './src/components/Layout/Header';
import Footer from './src/components/Layout/Footer';
import './src/styles/App.css';
//importe suite des styles et des composants

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<LogementDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}