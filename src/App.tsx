// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MyVeloTV from './pages/my-velo-tv';
import WhatsHappening from './pages/WhatsHappening';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/my-velo-tv" element={<MyVeloTV />} />
            <Route path="/whats-happening" element={<WhatsHappening />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
