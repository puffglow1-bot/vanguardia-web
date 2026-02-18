import React from 'react';
import PageTransition from '../components/PageTransition';
import { Activity, Brain, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Academy: React.FC = () => {
  const { t } = useLanguage();
  const upcomingDates = (t('academy.dates') as unknown) as Array<{city: string, place: string, date: string}>;

  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-20 transition-colors duration-500">
        
        {/* Header Image with Floating Title */}
        <div className="relative h-[70vh] w-full group border-b border-brand-border">
            <div className="h-full w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2500&auto=format&fit=crop" 
                    alt="Academy Pitch" 
                    className="w-full h-full object-cover transition-all duration-[2s]"
                />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
                <span className="text-brand-text text-xs font-bold tracking-[0.4em] uppercase mb-6 animate-fade-in-up bg-brand-bg/90 p-1 px-2">{t('academy.hero_tag')}</span>
                <h1 className="font-condensed text-6xl md:text-9xl text-white drop-shadow-lg uppercase leading-none mb-4 animate-fade-in-up">{t('academy.hero_title')} <br/> {t('academy.hero_title_2')}</h1>
                <p className="text-white drop-shadow-md font-light text-lg max-w-xl animate-fade-in-up delay-200">{t('academy.hero_subtitle')}</p>
            </div>
        </div>

        {/* Intro Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-brand-border">
            <div className="lg:col-span-4 p-12 border-b lg:border-b-0 lg:border-r border-brand-border flex items-center bg-brand-bg">
                 <h2 className="font-condensed text-4xl text-brand-text uppercase">{t('academy.methodology_title')}</h2>
            </div>
            <div className="lg:col-span-8 p-12 md:p-24 bg-brand-bg">
                <p className="text-xl md:text-2xl font-serif text-brand-text leading-relaxed">
                    {t('academy.methodology_text')}
                </p>
            </div>
        </div>

        {/* The 3 Pillars */}
        <div>
            {/* Pillar 1: Tactical */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-brand-border min-h-[60vh] group">
                <div className="p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-border group-hover:bg-brand-text/5 transition-colors">
                    <Crosshair className="w-16 h-16 text-brand-turf mb-8" />
                    <h3 className="font-condensed text-5xl text-brand-text uppercase mb-6">{t('academy.pillar_1_title')}</h3>
                    <p className="text-brand-accent font-serif text-lg leading-relaxed mb-8">
                        {t('academy.pillar_1_text')}
                    </p>
                    <div className="w-full bg-brand-border h-[1px]"></div>
                    <p className="mt-8 text-xs font-mono text-brand-turf uppercase tracking-widest">
                        {t('academy.pillar_1_focus')}
                    </p>
                </div>
                <div className="relative overflow-hidden h-full min-h-[300px]">
                    <img src="https://image2url.com/r2/default/images/1771322229162-a62bc46a-5a54-4af7-8894-5e98a5d67b69.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Tactics"/>
                </div>
            </div>

            {/* Pillar 2: Physical */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-brand-border min-h-[60vh] group">
                 <div className="relative overflow-hidden h-full order-2 lg:order-1 min-h-[300px]">
                    <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Gym"/>
                </div>
                <div className="p-12 md:p-24 flex flex-col justify-center border-l border-brand-border group-hover:bg-brand-text/5 transition-colors order-1 lg:order-2">
                    <Activity className="w-16 h-16 text-brand-gold mb-8" />
                    <h3 className="font-condensed text-5xl text-brand-text uppercase mb-6">{t('academy.pillar_2_title')}</h3>
                    <p className="text-brand-accent font-serif text-lg leading-relaxed mb-8">
                        {t('academy.pillar_2_text')}
                    </p>
                    <div className="w-full bg-brand-border h-[1px]"></div>
                    <p className="mt-8 text-xs font-mono text-brand-gold uppercase tracking-widest">
                        {t('academy.pillar_2_focus')}
                    </p>
                </div>
            </div>

             {/* Pillar 3: Mental */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-brand-border min-h-[60vh] group">
                <div className="p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-border group-hover:bg-brand-text/5 transition-colors">
                    <Brain className="w-16 h-16 text-brand-text mb-8" />
                    <h3 className="font-condensed text-5xl text-brand-text uppercase mb-6">{t('academy.pillar_3_title')}</h3>
                    <p className="text-brand-accent font-serif text-lg leading-relaxed mb-8">
                        {t('academy.pillar_3_text')}
                    </p>
                    <div className="w-full bg-brand-border h-[1px]"></div>
                    <p className="mt-8 text-xs font-mono text-brand-text uppercase tracking-widest">
                        {t('academy.pillar_3_focus')}
                    </p>
                </div>
                <div className="relative overflow-hidden h-full min-h-[300px]">
                    <img src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Mental"/>
                </div>
            </div>
        </div>

        {/* Facilities Section */}
        <section className="py-24 px-6 md:px-12 border-b border-brand-border bg-brand-bg">
            <div className="container mx-auto">
                <h2 className="font-condensed text-5xl text-brand-text uppercase mb-12 text-center">{t('academy.facilities_title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden aspect-video mb-4 border border-brand-border relative">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gym"/>
                        </div>
                        <h4 className="text-brand-text font-condensed text-xl uppercase group-hover:text-brand-turf transition-colors">{t('academy.facilities_1')}</h4>
                        <p className="text-xs text-brand-accent font-mono mt-1">Madrid HQ</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden aspect-video mb-4 border border-brand-border relative">
                            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Pitch"/>
                        </div>
                        <h4 className="text-brand-text font-condensed text-xl uppercase group-hover:text-brand-turf transition-colors">{t('academy.facilities_2')}</h4>
                        <p className="text-xs text-brand-accent font-mono mt-1">Training Ground</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="overflow-hidden aspect-video mb-4 border border-brand-border relative">
                            <img src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Recovery"/>
                        </div>
                        <h4 className="text-brand-text font-condensed text-xl uppercase group-hover:text-brand-turf transition-colors">{t('academy.facilities_3')}</h4>
                        <p className="text-xs text-brand-accent font-mono mt-1">Recovery Zone</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Tryouts Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
             <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-brand-border bg-brand-bg text-brand-text">
                  <h2 className="font-condensed text-6xl uppercase leading-none mb-6">{t('academy.cta_title')} <br/> {t('academy.cta_title_2')}</h2>
                  <p className="font-serif text-lg leading-relaxed mb-8 text-brand-accent">
                      {t('academy.cta_text')}
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-brand-text text-brand-bg text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-turf hover:text-white transition-all">
                      {t('academy.cta_button')}
                  </Link>
             </div>
             <div className="bg-brand-text/5 p-12 md:p-24">
                 <h3 className="text-brand-turf text-xs font-bold tracking-[0.2em] uppercase mb-8">{t('academy.dates_title')}</h3>
                 <div className="space-y-8">
                   {Array.isArray(upcomingDates) && upcomingDates.map((item, index) => (
                      <div key={index} className="flex justify-between items-end border-b border-brand-border pb-4">
                          <div>
                              <p className="font-condensed text-2xl text-brand-text uppercase">{item.city}</p>
                              <p className="text-xs text-brand-accent uppercase tracking-widest">{item.place}</p>
                          </div>
                          <span className="font-mono text-brand-turf text-sm">{item.date}</span>
                      </div>
                   ))}
                 </div>
             </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Academy;