import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/common/ParticleBackground';
import LoadingScreen from './components/common/LoadingScreen';
import FloatingButtons from './components/common/FloatingButtons';  // ← إضافة
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        {/* Loading Screen */}
        {isLoading && <LoadingScreen />}
        
        {/* المحتوى الرئيسي */}
        <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <ParticleBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          
          {/* ===== الأزرار العائمة ===== */}
          <FloatingButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;