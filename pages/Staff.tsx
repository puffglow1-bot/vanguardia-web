import React, { useEffect, useState } from 'react';
import { StaffMember } from '../types';
import { getStaff } from '../services/api';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';

const Staff: React.FC = () => {
  const [team, setTeam] = useState<StaffMember[]>([]);
  const { t, language } = useLanguage();
  
  const depts = (t('staff.depts') as unknown) as string[];

  useEffect(() => {
    getStaff(language).then(setTeam);
  }, [language]);

  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-20 transition-colors duration-500">
        
        {/* Header */}
        <div className="border-b border-brand-border p-6 md:p-12 lg:p-24 flex flex-col justify-end min-h-[40vh]">
            <span className="font-mono text-xs text-brand-accent uppercase tracking-widest block mb-4">{t('staff.leadership_tag')}</span>
            <h1 className="font-condensed text-6xl md:text-9xl text-brand-text uppercase leading-none tracking-tighter">
                {t('staff.title')}
            </h1>
        </div>

        {/* Staff List - Typography Only */}
        <div className="container mx-auto px-6 md:px-12 py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16">
                {team.map((member) => (
                    <div key={member.id} className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 border-b border-brand-border pb-12 group hover:pl-4 transition-all duration-300 cursor-default">
                        <div className="md:col-span-4 mb-4 md:mb-0">
                            <h2 className="text-3xl md:text-5xl font-condensed text-brand-text uppercase leading-none">{member.name}</h2>
                            <p className="text-xs text-brand-accent uppercase tracking-widest mt-2 font-mono">{member.role}</p>
                        </div>
                        <div className="md:col-span-6 md:col-start-6">
                             <p className="text-brand-text font-serif text-lg md:text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                {member.bio}
                             </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Structure Simple List */}
        <div className="bg-brand-bg py-24 px-6 md:px-12 border-t border-brand-border transition-colors duration-500">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                    <h3 className="font-condensed text-4xl uppercase mb-6 text-brand-text">{t('staff.structure_title')}</h3>
                    <p className="text-brand-accent font-serif text-lg leading-relaxed">{t('staff.structure_subtitle')}</p>
                 </div>
                 <div className="space-y-4 font-mono text-sm uppercase tracking-widest text-brand-text/80">
                     {Array.isArray(depts) && depts.map((item, index) => (
                         <p key={index} className="border-b border-brand-border pb-2">{item}</p>
                     ))}
                 </div>
            </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Staff;