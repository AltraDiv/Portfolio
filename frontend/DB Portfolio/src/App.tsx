import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './pages/components/Navbar';
import { MarvelIntro } from './components/MarvelIntro';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(window.location.pathname === '/');

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <MarvelIntro key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;