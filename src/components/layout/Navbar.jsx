import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// استيراد اللوجو
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // تأثيرات مختلفة لكل صفحة
  const getActiveStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      isActive,
      gradient: isActive ? 'from-primary/30 to-secondary/30' : 'from-transparent to-transparent',
      border: isActive ? 'border-primary/50' : 'border-transparent',
      text: isActive ? 'text-white' : 'text-gray-400',
      dot: isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
    };
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark/90 backdrop-blur-2xl shadow-2xl shadow-primary/10 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* ===== Logo ===== */}
          <Link to="/" className="flex items-center gap-3 group relative">
            {/* glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 md:w-12 md:h-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-60 blur-sm group-hover:blur-md transition-all duration-500" />
              <div className="relative w-full h-full bg-dark rounded-xl border border-primary/30 flex items-center justify-center overflow-hidden">
                <img 
                  src={logo} 
                  alt="Fady Ashraf" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg md:text-xl text-white group-hover:text-primary transition-colors duration-300">
                Fady
              </span>
              <span className="text-[10px] md:text-xs text-gray-400 font-medium tracking-[0.2em] group-hover:text-primary/70 transition-colors duration-300">
                ASHRAF
              </span>
            </div>
          </Link>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const { isActive, gradient, border, text, dot } = getActiveStyle(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${text} hover:text-white hover:bg-white/5`}
                >
                  {/* Active background with gradient */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg border ${border}`}
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                  
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Active dot with glow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50 ${dot}`}
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  
                  {/* Hover underline effect */}
                  {!isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      whileHover={{ width: '60%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ===== Desktop CTA Button - شيلناها ===== */}
          {/* <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-dark rounded-lg px-5 py-2 border border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
                <span className="text-white text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Hire Me
                </span>
              </div>
            </motion.a>
          </div> */}

          {/* ===== Mobile Menu Button ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 hover:border-primary/30"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <FaTimes className="text-xl text-white" />
              ) : (
                <FaBars className="text-xl text-white" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-2xl border-t border-white/10"
      >
        <div className="px-4 py-6 space-y-1">
          {links.map((link) => {
            const { isActive, gradient, border } = getActiveStyle(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${gradient} text-white border ${border}`
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-sm font-medium">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="mobileActive"
                    className="ml-auto w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50"
                  />
                )}
              </Link>
            );
          })}
          
          {/* Mobile CTA - شيلناها */}
          {/* <motion.a
            href="#contact"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.02 }}
            className="block mt-4 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-dark rounded-lg px-4 py-3 border border-primary/30">
              <span className="text-white font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hire Me
              </span>
            </div>
          </motion.a> */}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;