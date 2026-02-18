import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Athlete } from '../types';
import { getAthleteById } from '../services/api';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';

const TalentProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [athlete, setAthlete] = useState<Athlete | null>(null);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getAthleteById(id, language).then((data) => {
        setAthlete(data || null);
        setLoading(false);
      });
    }
  }, [id, language]);

  if (loading) return <div className="bg-brand-bg h-screen flex items-center justify-center text-brand-accent text-xs tracking-widest">{t('profile.loading')}</div>;
  if (!athlete) return <div className="bg-brand-bg h-screen flex items-center justify-center text-brand-text">{t('profile.not_found')}</div>;

  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-20 transition-colors duration-500">
        
        {/* Header - Text Only (No Photo) */}
        <div className="bg-brand-text/5 border-b border-brand-border py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <span className="text-brand-turf text-xs font-bold tracking-[0.4em] uppercase mb-4 block">{athlete.sport} — {athlete.position}</span>
                <h1 className="font-serif text-5xl md:text-8xl text-brand-text leading-none mb-8">{athlete.name}</h1>
                
                <Link to="/contact" className="inline-block px-8 py-3 bg-brand-text text-brand-bg text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-turf hover:text-white transition-colors">
                    {t('profile.check_availability')}
                </Link>
            </div>
        </div>

        {/* Content Grid */}
        <div className="container mx-auto px-6 md:px-12 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left: Stats & Bio */}
                <div className="lg:col-span-7 space-y-16">
                    <div>
                        <h2 className="text-xs text-brand-accent uppercase tracking-[0.3em] mb-8">{t('profile.bio_title')}</h2>
                        <p className="text-brand-text font-serif text-xl md:text-2xl leading-relaxed">
                            {athlete.bio}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-brand-border pt-12">
                        {athlete.stats.map((stat, idx) => (
                            <div key={idx}>
                                <span className="text-[10px] text-brand-accent uppercase tracking-widest block mb-1">{stat.label}</span>
                                <span className="text-3xl font-serif text-brand-text">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Academy Logic & Status */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 p-8 border border-brand-border bg-brand-bg shadow-sm">
                        <h3 className="font-serif text-2xl text-brand-text mb-6 flex items-center">
                            <span className="w-2 h-2 bg-brand-turf rounded-full mr-4 animate-pulse"></span>
                            {t('profile.status_title')}
                        </h3>
                        
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between text-xs uppercase tracking-widest text-brand-accent mb-2">
                                    <span>{t('profile.current_level')}</span>
                                    <span className="text-brand-text">{athlete.academyStatus}</span>
                                </div>
                                <div className="w-full bg-brand-text/10 h-1">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${athlete.academyProgress}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="bg-brand-turf h-full"
                                    ></motion.div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm text-brand-accent font-light leading-relaxed">
                                    {athlete.academyProgress === 100 
                                        ? t('profile.status_graduated_text')
                                        : t('profile.status_progress_text')
                                    }
                                </p>
                            </div>

                            <div className="pt-6 border-t border-brand-border">
                                <Link to="/academy" className="text-[10px] text-brand-text hover:text-brand-turf uppercase tracking-[0.2em] transition-colors flex items-center">
                                    {t('profile.view_program')}
                                    <span className="ml-2 text-lg">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default TalentProfile;