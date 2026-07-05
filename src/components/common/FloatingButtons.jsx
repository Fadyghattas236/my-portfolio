/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaFileDownload, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { personalData } from '../../data/personalData';

// رابط الـ CV من Google Drive (معدل للعرض المباشر)
const cvLink = 'https://drive.google.com/file/d/1A_apYpuv19vG3IF1hqOGDgV5Ba_2YI22/preview';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* ===== زرار الواتساب - يمين ===== */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 150, delay: 0.1 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.a
              href={`https://wa.me/${personalData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="relative group block"
            >
              {/* الخلفية المتوهجة */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* الزر الرئيسي */}
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 text-white p-4 rounded-2xl shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 border border-green-300/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-2xl md:text-3xl" />
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-bold">WhatsApp</div>
                    <div className="text-[10px] opacity-80">Chat with me</div>
                  </div>
                </div>
              </div>

              {/* شارة النشاط */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-dark"
              />
              <motion.div
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full opacity-30"
              />
            </motion.a>
          </motion.div>

          {/* ===== زرار الـ CV - شمال (يفتح من Drive) ===== */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 150, delay: 0.2 }}
            className="fixed bottom-8 left-8 z-50"
          >
            <motion.a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative group block"
            >
              {/* الخلفية المتوهجة */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* الزر الرئيسي */}
              <div className="relative bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-2xl shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 border border-primary/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <FaFileDownload className="text-2xl md:text-3xl" />
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-bold">View CV</div>
                    <div className="text-[10px] opacity-80">Open PDF</div>
                  </div>
                </div>
              </div>

              {/* شارة جديدة */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white text-[8px] font-bold px-2 py-0.5 rounded-full border border-white/20 shadow-lg">
                NEW
              </div>
            </motion.a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;