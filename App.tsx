import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import About from './pages/About';
import Staff from './pages/Staff';
import Academy from './pages/Academy';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import LegalNotice from './pages/LegalNotice';
import TalentRoster from './pages/TalentRoster';
import TalentProfile from './pages/TalentProfile';
import News from './pages/News';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen font-sans selection:bg-brand-text selection:text-brand-bg flex flex-col bg-brand-bg text-brand-text transition-colors duration-500">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/talents" element={<TalentRoster />} />
                <Route path="/talents/:id" element={<TalentProfile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/legal-notice" element={<LegalNotice />} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;