import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-bg border-t border-brand-border transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand Column */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-brand-border min-h-[300px] flex flex-col justify-between">
          <h2 className="font-condensed text-5xl md:text-6xl text-brand-text uppercase leading-none tracking-tighter">
            Vanguardia<br/>Athletics
          </h2>
          <p className="text-brand-accent font-sans text-sm mt-8">
            Global representation for the modern elite athlete.
          </p>
        </div>

        {/* Address Column */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-brand-border flex flex-col">
          <h4 className="font-condensed text-xl text-brand-text uppercase mb-6">{t('footer.headquarters')}</h4>
          <p className="text-brand-accent font-sans text-sm leading-relaxed mb-8">
            Paseo de la Castellana 150<br />
            Madrid, 28046<br />
            España
          </p>
          <a href="mailto:info@vanguardia.com" className="text-brand-text font-condensed text-lg hover:underline transition-all uppercase mt-auto inline-flex items-center">
            info@vanguardia.com <ArrowUpRight size={16} className="ml-2"/>
          </a>
        </div>

        {/* Social Column */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-brand-border flex flex-col">
          <h4 className="font-condensed text-xl text-brand-text uppercase mb-6">{t('footer.connect')}</h4>
          <div className="space-y-4">
            <a href="#" className="block text-brand-accent hover:text-brand-text transition-colors font-sans text-sm uppercase tracking-widest flex items-center justify-between group">
              Instagram <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-text"/>
            </a>
            <a href="#" className="block text-brand-accent hover:text-brand-text transition-colors font-sans text-sm uppercase tracking-widest flex items-center justify-between group">
              Twitter / X <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-text"/>
            </a>
            <a href="#" className="block text-brand-accent hover:text-brand-text transition-colors font-sans text-sm uppercase tracking-widest flex items-center justify-between group">
              LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-text"/>
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="p-8 md:p-12 flex flex-col justify-end bg-brand-bg text-brand-text">
            <nav className="flex flex-col space-y-2">
                <Link to="/legal-notice" className="text-brand-accent hover:text-brand-text text-xs uppercase tracking-widest transition-colors">{t('footer.legal_notice')}</Link>
                <Link to="/privacy" className="text-brand-accent hover:text-brand-text text-xs uppercase tracking-widest transition-colors">{t('footer.privacy')}</Link>
                <Link to="/cookies" className="text-brand-accent hover:text-brand-text text-xs uppercase tracking-widest transition-colors">{t('footer.cookies')}</Link>
                <Link to="/terms" className="text-brand-accent hover:text-brand-text text-xs uppercase tracking-widest transition-colors">{t('footer.terms')}</Link>
            </nav>
            <p className="text-[10px] text-brand-accent/40 mt-8 uppercase tracking-widest">
                {t('footer.rights')}
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;