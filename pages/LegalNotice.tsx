import React from 'react';
import PageTransition from '../components/PageTransition';

const LegalNotice: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-32 pb-24 px-6 md:px-12 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl bg-brand-bg p-12 border border-brand-border">
          <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Cumplimiento Normativo</span>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-text mb-12">Aviso Legal</h1>
          
          <div className="space-y-12 text-brand-accent font-light leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">1. Datos Identificativos</h2>
              <p className="mb-4">
                En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos de la empresa titular del sitio web:
              </p>
              <ul className="space-y-2 border-l border-brand-gold pl-6 mt-6 text-brand-text">
                <li><strong>Denominación Social:</strong> New Talent Management S.L.</li>
                <li><strong>NIF:</strong> B-12345678</li>
                <li><strong>Domicilio Social:</strong> Paseo de la Castellana 150, Madrid, 28046, España.</li>
                <li><strong>Inscripción Registral:</strong> Inscrita en el Registro Mercantil de Madrid, Tomo 45.000, Folio 100, Hoja M-123456.</li>
                <li><strong>Email de contacto:</strong> legal@newtalentmanagement.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">2. Objeto</h2>
              <p>
                El presente Aviso Legal regula las condiciones de uso, acceso y navegación del sitio web de New Talent Management. El acceso y/o uso del portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">3. Propiedad Intelectual e Industrial</h2>
              <p>
                New Talent Management S.L. por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web (imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
              </p>
              <p className="mt-4">
                Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de New Talent Management S.L.
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
              <p>
                New Talent Management S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">5. Legislación Aplicable y Jurisdicción</h2>
              <p>
                La relación entre New Talent Management S.L. y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid, salvo que la ley aplicable disponga otra cosa.
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

export default LegalNotice;