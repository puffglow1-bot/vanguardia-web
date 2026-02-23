import React from 'react';
import PageTransition from '../components/PageTransition';

const Cookies: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-32 pb-24 px-6 md:px-12 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl bg-brand-bg p-12 border border-brand-border">
          <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Legal</span>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-text mb-12">Política de Cookies</h1>
          
          <div className="space-y-12 text-brand-accent font-light leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">¿Qué son las cookies?</h2>
              <p>
                New Talent Management utiliza cookies y tecnologías similares para garantizar el funcionamiento del sitio, medir la audiencia y ofrecer contenidos adaptados a sus intereses. Una cookie es un pequeño archivo de texto que se almacena en su navegador.
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">Tipos de Cookies Utilizadas</h2>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-brand-border">
                            <th className="py-4 px-2 text-xs font-bold text-brand-gold uppercase tracking-widest">Nombre</th>
                            <th className="py-4 px-2 text-xs font-bold text-brand-gold uppercase tracking-widest">Proveedor</th>
                            <th className="py-4 px-2 text-xs font-bold text-brand-gold uppercase tracking-widest">Finalidad</th>
                            <th className="py-4 px-2 text-xs font-bold text-brand-gold uppercase tracking-widest">Duración</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                        <tr className="border-b border-brand-border">
                            <td className="py-4 px-2 text-brand-text font-medium">_ga</td>
                            <td className="py-4 px-2">Google Analytics</td>
                            <td className="py-4 px-2">Estadísticas de uso y medición.</td>
                            <td className="py-4 px-2">2 años</td>
                        </tr>
                        <tr className="border-b border-brand-border">
                            <td className="py-4 px-2 text-brand-text font-medium">cookie_consent</td>
                            <td className="py-4 px-2">newtalentmanagement</td>
                            <td className="py-4 px-2">Recordar preferencias de privacidad.</td>
                            <td className="py-4 px-2">1 año</td>
                        </tr>
                        <tr className="border-b border-brand-border">
                            <td className="py-4 px-2 text-brand-text font-medium">session_id</td>
                            <td className="py-4 px-2">newtalentmanagement</td>
                            <td className="py-4 px-2">Mantener la sesión del usuario.</td>
                            <td className="py-4 px-2">Sesión</td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">Gestión de Cookies</h2>
              <p>
                Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Tenga en cuenta que si deshabilita las cookies, es posible que algunas funcionalidades del sitio no estén disponibles.
              </p>
            </section>
             
            <section className="pt-8 border-t border-brand-border">
              <p className="text-xs text-brand-accent">Última actualización: Enero 2026</p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Cookies;