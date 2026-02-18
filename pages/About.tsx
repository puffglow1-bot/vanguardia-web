import React from 'react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { Shield, TrendingUp, Briefcase, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  const service1List = (t('about.service_1_list') as unknown) as string[];
  const service2List = (t('about.service_2_list') as unknown) as string[];
  const service3List = (t('about.service_3_list') as unknown) as string[];
  const citiesList = (t('about.cities') as unknown) as string[];

  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-20 transition-colors duration-500">
        
        {/* Header - Typographic */}
        <div className="border-b border-brand-border p-6 md:p-12 lg:p-24 relative overflow-hidden">
            <div className="relative z-10">
                <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block mb-4">/ {t('nav.agency')}</span>
                <h1 className="font-condensed text-6xl md:text-8xl lg:text-9xl text-brand-text uppercase leading-[0.85] tracking-tighter max-w-5xl">
                    {t('about.title')}
                </h1>
            </div>
             <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-10 mask-image-gradient"
                alt="Architecture"
             />
        </div>

        {/* The Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-brand-border">
             <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-brand-border bg-brand-bg flex items-center">
                 <h2 className="font-condensed text-4xl md:text-5xl text-brand-text leading-tight uppercase">
                    {t('about.manifesto_title')} <br/> {t('about.manifesto_title_2')} <span className="text-brand-turf">{t('about.manifesto_word')}</span>."
                 </h2>
             </div>
             <div className="p-12 md:p-24 bg-brand-text/5">
                 <p className="font-serif text-xl text-brand-text leading-relaxed mb-6">
                     {t('about.manifesto_text_1')}
                 </p>
                 <p className="font-sans text-sm text-brand-accent font-light leading-relaxed">
                     {t('about.manifesto_text_2')}
                 </p>
             </div>
        </div>

        {/* Section 1: The Story (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-brand-border">
            <div className="lg:col-span-4 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-border">
                 <h2 className="font-condensed text-3xl text-brand-text uppercase mb-4">{t('about.origin_title')}</h2>
                 <div className="w-12 h-1 bg-brand-gold mb-8"></div>
                 <img src="https://image2url.com/r2/default/images/1771322110210-f6445372-b1b8-474e-b680-11dbf0ef07cc.jpg" className="w-full aspect-square object-cover opacity-90 transition-all duration-700" alt="Old Football" />
            </div>
            <div className="lg:col-span-8 p-6 md:p-12 lg:p-24 bg-brand-bg">
                <p className="text-xl md:text-2xl font-serif text-brand-text leading-relaxed mb-8">
                   {t('about.subtitle')}
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                    <p className="text-brand-accent font-sans font-light leading-relaxed">
                       {t('about.origin_text')}
                    </p>
                    <div className="space-y-6">
                        <div className="border-l border-brand-gold pl-6">
                            <span className="block text-4xl font-condensed text-brand-text">2004</span>
                            <span className="text-xs text-brand-accent uppercase tracking-widest">{t('home.est')}</span>
                        </div>
                        <div className="border-l border-brand-gold pl-6">
                            <span className="block text-4xl font-condensed text-brand-text">2010</span>
                            <span className="text-xs text-brand-accent uppercase tracking-widest">Expansion</span>
                        </div>
                        <div className="border-l border-brand-gold pl-6">
                            <span className="block text-4xl font-condensed text-brand-text">2022</span>
                            <span className="text-xs text-brand-accent uppercase tracking-widest">Academy Launch</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 2: Services */}
        <div className="border-b border-brand-border">
            <div className="p-6 md:p-12 border-b border-brand-border bg-brand-bg sticky top-20 z-10">
                <h2 className="font-condensed text-5xl md:text-7xl text-brand-text uppercase">{t('about.services_title')}</h2>
            </div>
            
            {/* Service 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh] border-b border-brand-border group">
                <div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-brand-border transition-colors duration-500 group-hover:bg-brand-text/5">
                    <TrendingUp className="mb-8 w-12 h-12 text-brand-turf" />
                    <h3 className="font-condensed text-4xl uppercase mb-6 text-brand-text">{t('about.service_1_title')}</h3>
                    <p className="text-lg font-serif text-brand-accent leading-relaxed mb-8">{t('about.service_1_text')}</p>
                    <ul className="space-y-2 text-sm text-brand-accent font-mono uppercase tracking-wide">
                        {Array.isArray(service1List) && service1List.map((item, idx) => (
                             <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="relative overflow-hidden h-64 md:h-auto">
                    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Negotiation"/>
                </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh] border-b border-brand-border group">
                 <div className="relative overflow-hidden order-2 md:order-1 h-64 md:h-auto">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Branding"/>
                </div>
                <div className="p-12 md:p-24 flex flex-col justify-center border-l border-brand-border transition-colors duration-500 group-hover:bg-brand-text/5 order-1 md:order-2">
                    <Globe className="mb-8 w-12 h-12 text-brand-turf" />
                    <h3 className="font-condensed text-4xl uppercase mb-6 text-brand-text">{t('about.service_2_title')}</h3>
                    <p className="text-lg font-serif text-brand-accent leading-relaxed mb-8">{t('about.service_2_text')}</p>
                    <ul className="space-y-2 text-sm text-brand-accent font-mono uppercase tracking-wide">
                        {Array.isArray(service2List) && service2List.map((item, idx) => (
                             <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh] border-b border-brand-border group">
                <div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-brand-border transition-colors duration-500 group-hover:bg-brand-text/5">
                    <Shield className="mb-8 w-12 h-12 text-brand-turf" />
                    <h3 className="font-condensed text-4xl uppercase mb-6 text-brand-text">{t('about.service_3_title')}</h3>
                    <p className="text-lg font-serif text-brand-accent leading-relaxed mb-8">{t('about.service_3_text')}</p>
                    <ul className="space-y-2 text-sm text-brand-accent font-mono uppercase tracking-wide">
                        {Array.isArray(service3List) && service3List.map((item, idx) => (
                             <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="relative overflow-hidden h-64 md:h-auto">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Legal"/>
                </div>
            </div>
        </div>

        {/* Section 3: Global Reach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-brand-border min-h-[50vh]">
             <div className="border-b lg:border-b-0 lg:border-r border-brand-border relative">
                 <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
                    alt="Global Network" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                 />
                 <div className="absolute inset-0 bg-brand-bg/20"></div>
                 <div className="relative p-12 h-full flex flex-col justify-end">
                     <h2 className="font-condensed text-4xl md:text-6xl text-brand-text uppercase mb-4 bg-brand-bg/80 backdrop-blur-sm w-max px-2">{t('about.global_title')}</h2>
                     <p className="text-brand-text bg-brand-bg/80 backdrop-blur-sm p-2 w-max max-w-md">{t('about.global_text')}</p>
                 </div>
             </div>
             <div className="p-12 flex flex-col justify-center bg-brand-bg">
                 <div className="space-y-8">
                      {Array.isArray(citiesList) && citiesList.map(city => (
                        <div key={city} className="flex items-center justify-between border-b border-brand-border pb-4 group cursor-pointer hover:bg-brand-text/5 p-4 transition-colors">
                            <span className="font-condensed text-2xl text-brand-text uppercase group-hover:pl-4 transition-all duration-300">{city}</span>
                            <span className="text-brand-turf opacity-0 group-hover:opacity-100 transition-opacity">●</span>
                        </div>
                      ))}
                 </div>
             </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default About;