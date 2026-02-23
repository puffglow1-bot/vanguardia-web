import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('newtalentmanagement_cookie_consent');
    if (!consent) {
      // Delay slightly for better UX on initial load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('newtalentmanagement_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('newtalentmanagement_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-6 md:p-8"
        >
          <div className="max-w-4xl mx-auto bg-neutral-900/90 backdrop-blur-md border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 pr-8">
              <h4 className="text-white font-serif text-lg mb-2">Su privacidad es nuestra prioridad</h4>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al continuar navegando, entendemos que acepta nuestra{' '}
                <Link to="/cookies" className="text-brand-gold underline decoration-1 underline-offset-4 hover:text-white transition-colors">
                  Política de Cookies
                </Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="px-6 py-3 border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase hover:bg-white/5 transition-all duration-300 text-center"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-white text-black text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold transition-all duration-300 text-center font-medium"
              >
                Aceptar
              </button>
            </div>

            <button 
              onClick={handleReject} 
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors md:hidden"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;