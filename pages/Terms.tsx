import React from 'react';
import PageTransition from '../components/PageTransition';

const Terms: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-32 pb-24 px-6 md:px-12 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl bg-brand-bg p-12 border border-brand-border">
          <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Legal</span>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-text mb-12">Términos y Condiciones</h1>
          
          <div className="space-y-12 text-brand-accent font-light leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">1. Introducción</h2>
              <p>
                Bienvenido a Vanguardia Athletics. Al acceder y utilizar nuestro sitio web, usted acepta cumplir con los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">2. Propiedad Intelectual</h2>
              <p>
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Vanguardia Athletics o de sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor. El diseño minimalista y la disposición editorial del sitio son marcas distintivas de nuestra identidad digital.
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">3. Uso del Sitio</h2>
              <p className="mb-4">Usted se compromete a utilizar este sitio únicamente con fines legales y de una manera que no infrinja los derechos de, ni restrinja o inhiba el uso y disfrute del sitio por parte de cualquier tercero. Está prohibido:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-brand-text">
                <li>Utilizar el sitio para enviar publicidad no solicitada o spam.</li>
                <li>Intentar acceder sin autorización a nuestros sistemas o bases de datos.</li>
                <li>Utilizar el contenido del sitio para fines comerciales sin nuestro consentimiento expreso por escrito.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">4. Limitación de Responsabilidad</h2>
              <p>
                Aunque nos esforzamos por mantener la información del sitio actualizada y precisa (incluyendo noticias sobre fichajes y estadísticas), Vanguardia Athletics no garantiza la exactitud, integridad o actualidad de la información. La Agencia no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de uso de este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">5. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de revisar y modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio tras la publicación de cambios constituirá su aceptación de los mismos.
              </p>
            </section>
             
            <section className="pt-8 border-t border-brand-border">
              <p className="text-xs text-brand-accent">Última actualización: Noviembre 2024</p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Terms;