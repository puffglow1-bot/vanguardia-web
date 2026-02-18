import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getTestimonials } from '../services/api';
import { Testimonial } from '../types';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';

const TalentRoster: React.FC = () => {
  const { t, language } = useLanguage();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  
  // Cast the process steps from translations
  const processSteps = (t('roster.process') as unknown) as Array<{step: string, title: string, description: string}>;

  useEffect(() => {
    getTestimonials(language).then(setTestimonials);
  }, [language]);

  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-20 transition-colors duration-500">
        
        {/* Header */}
        <div className="border-b border-brand-border p-6 md:p-12 md:flex justify-between items-end bg-brand-bg">
             <div>
                <h1 className="font-condensed text-6xl md:text-9xl text-brand-text uppercase leading-none tracking-tighter">
                  {t('roster.title')} <br/> {t('roster.title_2')}
                </h1>
             </div>
             <div className="mt-8 md:mt-0">
                <p className="font-mono text-xs text-brand-gold uppercase tracking-widest max-w-xs text-right">
                    {t('roster.subtitle')}
                </p>
             </div>
        </div>

        {/* Steps Container */}
        <div className="container mx-auto px-6 md:px-12 py-24">
            <div className="space-y-0">
                {Array.isArray(processSteps) && processSteps.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-12 border-t border-brand-border py-12 group hover:bg-brand-text/5 transition-colors"
                    >
                        <div className="md:col-span-2">
                             <span className="text-4xl md:text-6xl font-condensed text-brand-border group-hover:text-brand-turf transition-colors">{item.step}</span>
                        </div>
                        <div className="md:col-span-4 py-4 md:py-0">
                            <h3 className="text-3xl font-condensed text-brand-text uppercase">{item.title}</h3>
                        </div>
                        <div className="md:col-span-6">
                            <p className="text-brand-accent font-serif text-lg leading-relaxed max-w-xl">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="w-full border-t border-brand-border"></div>
        </div>

        {/* Text-Only Testimonials */}
        <div className="bg-brand-text/5 border-t border-brand-border py-24">
            <div className="container mx-auto px-6 md:px-12">
                <h3 className="font-condensed text-3xl uppercase text-brand-text mb-12 text-center">{t('roster.testimonials_header')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testimonials.map((testim) => (
                        <div key={testim.id} className="bg-brand-bg p-8 border border-brand-border shadow-sm hover:border-brand-text transition-colors">
                            <div className="mb-6 text-brand-gold text-2xl font-serif">“</div>
                            <p className="text-brand-accent font-light font-sans text-sm leading-relaxed mb-6">
                                {testim.quote}
                            </p>
                            <div className="border-t border-brand-border pt-4">
                                <p className="text-brand-text font-condensed uppercase tracking-wide">{testim.author}</p>
                                <p className="text-brand-accent/60 text-xs uppercase tracking-widest mt-1">{testim.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default TalentRoster;