import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { getTestimonials } from '../services/api';
import { Testimonial } from '../types';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { t, language } = useLanguage();

  useEffect(() => {
    getTestimonials(language).then(setTestimonials);
  }, [language]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden border-b border-brand-border pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://image2url.com/r2/default/images/1771320459400-7732c8ec-825a-47c9-8832-e04c2e8fc7d0.avif" 
            alt="Stadium Tunnel"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        </div>

        <div className="relative z-20 container mx-auto text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-condensed text-[14vw] leading-[0.8] uppercase tracking-tighter mix-blend-difference"
          >
            {t('home.hero_title_1')} <br/>
            <span className="italic font-serif font-light normal-case tracking-normal block text-[8vw] -mt-4 md:-mt-8 opacity-90">{t('home.hero_title_2')}</span>
          </motion.h1>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-end border-t border-white/30 pt-6">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest max-w-sm">
                {t('home.est')}
            </p>
            <Link 
              to="/contact" 
              className="mt-6 md:mt-0 group flex items-center gap-4 font-condensed uppercase text-xl md:text-2xl tracking-wide hover:opacity-70 transition-opacity"
            >
              {t('home.cta_hero')} <ArrowRight className="group-hover:translate-x-2 transition-transform"/>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="border-b border-brand-border py-6 overflow-hidden bg-brand-bg">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-brand-text font-condensed uppercase text-6xl md:text-8xl tracking-tighter opacity-10">
            <span>{t('home.marquee')}</span>
            <span>{t('home.marquee')}</span>
        </div>
      </div>

      {/* Intro Section */}
      <section className="bg-brand-bg border-b border-brand-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-brand-border flex flex-col justify-center">
                <h2 className="font-condensed text-5xl md:text-7xl text-brand-text uppercase leading-[0.9] mb-12">
                  {t('home.intro_title_1')} <br/> {t('home.intro_title_2')} <br/>
                  <span className="text-brand-accent italic font-serif lowercase">{t('home.intro_title_3')}</span>
                </h2>
                <Link to="/about" className="text-brand-text font-mono text-xs uppercase tracking-widest border-b border-brand-text pb-1 w-max hover:opacity-50 transition-opacity">
                  {t('home.intro_link')}
                </Link>
            </div>
            <div className="relative h-full min-h-[500px] lg:min-h-auto flex items-center justify-center overflow-hidden">
                 <img 
                    src="https://image2url.com/r2/default/images/1771320574310-faf43a3d-692e-4b04-bfc0-f028072a59e7.jpg" 
                    alt="Player Focus"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-brand-bg/10"></div>
            </div>
        </div>
      </section>

      {/* The Numbers Section (Minimalist) */}
      <section className="bg-brand-bg border-b border-brand-border py-24 px-6 md:px-12">
          <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                  <div className="border-l border-brand-border pl-6">
                      <h3 className="text-5xl md:text-7xl font-condensed text-brand-text mb-2">25+</h3>
                      <p className="text-brand-accent text-xs uppercase tracking-widest">{t('home.stat_contract')}</p>
                  </div>
                  <div className="border-l border-brand-border pl-6">
                      <h3 className="text-5xl md:text-7xl font-condensed text-brand-text mb-2">120+</h3>
                      <p className="text-brand-accent text-xs uppercase tracking-widest">{t('home.stat_athletes')}</p>
                  </div>
                  <div className="border-l border-brand-border pl-6">
                      <h3 className="text-5xl md:text-7xl font-condensed text-brand-text mb-2">14</h3>
                      <p className="text-brand-accent text-xs uppercase tracking-widest">{t('home.stat_countries')}</p>
                  </div>
                  <div className="border-l border-brand-border pl-6">
                      <h3 className="text-5xl md:text-7xl font-condensed text-brand-text mb-2">35</h3>
                      <p className="text-brand-accent text-xs uppercase tracking-widest">{t('home.stat_titles')}</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Recent Operations */}
      <section className="bg-brand-bg border-b border-brand-border">
          <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-brand-border">
                   <span className="text-brand-accent text-xs font-mono uppercase tracking-widest mb-4">{t('home.ops_subtitle')}</span>
                   <h2 className="font-condensed text-5xl md:text-6xl text-brand-text uppercase leading-none mb-8">
                       {t('home.ops_title')} <br/> {t('home.ops_title_2')}
                   </h2>
                   <Link to="/talents" className="text-brand-text text-xs uppercase tracking-widest border-b border-brand-text pb-1 w-max hover:opacity-50 transition-opacity">
                       {t('home.view_roster')}
                   </Link>
              </div>
              <div className="relative h-[50vh] md:h-auto overflow-hidden group">
                   <img 
                    src="https://image2url.com/r2/default/images/1771320939733-f0e74460-ed88-4577-a195-10994bc81971.jpg" 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700" 
                    alt="Football Detail"
                   />
              </div>
          </div>
      </section>

      {/* Testimonials (Editorial List) */}
      <section className="bg-brand-bg border-b border-brand-border py-24">
        <div className="container mx-auto px-6 md:px-12">
            <h3 className="font-condensed text-xl uppercase text-brand-text mb-12 border-b border-brand-border pb-4">{t('home.testimonials_title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {testimonials.slice(0, 2).map((item) => (
                  <div key={item.id} className="flex flex-col">
                    <p className="text-2xl md:text-4xl text-brand-text font-serif italic leading-tight mb-8">
                        "{item.quote}"
                    </p>
                    <div className="mt-auto">
                        <p className="text-brand-text font-condensed text-lg uppercase tracking-wide">{item.author}</p>
                        <p className="text-brand-accent text-xs uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Quote Break */}
      <section className="py-32 px-6 bg-brand-text text-brand-bg flex items-center justify-center">
         <div className="container mx-auto text-center">
              <p className="font-condensed text-4xl md:text-6xl uppercase leading-none max-w-4xl mx-auto">
                {t('home.success_quote')}
              </p>
         </div>
      </section>
    </PageTransition>
  );
};

export default Home;