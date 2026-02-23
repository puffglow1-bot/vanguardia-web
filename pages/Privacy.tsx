import React from 'react';
import PageTransition from '../components/PageTransition';

const Privacy: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-32 pb-24 px-6 md:px-12 transition-colors duration-500">
        <div className="container mx-auto max-w-4xl bg-brand-bg p-12 border border-brand-border">
          <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">RGPD / GDPR</span>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-text mb-12">Política de Privacidad</h1>
          
          <div className="space-y-12 text-brand-accent font-light leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">1. Responsable del Tratamiento</h2>
              <p>
                De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos que sus datos serán tratados por:
              </p>
              <ul className="list-none space-y-1 mt-4 text-brand-text font-medium">
                <li><strong>Identidad:</strong> New Talent Management S.L.</li>
                <li><strong>NIF:</strong> B-12345678</li>
                <li><strong>Dirección:</strong> Paseo de la Castellana 150, Madrid, 28046.</li>
                <li><strong>Delegado de Protección de Datos (DPO):</strong> dpo@newtalentmanagement.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">2. Finalidad y Legitimación</h2>
              <p className="mb-4">
                Tratamos la información que nos facilita con las siguientes finalidades:
              </p>
              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div className="bg-brand-text/5 p-6 border border-brand-border">
                    <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-2">Gestión de Talento</h4>
                    <p className="text-sm">Para evaluar candidaturas, gestionar la carrera de atletas representados y coordinar servicios con clubes. <br/><span className="italic text-xs opacity-60">Base legal: Ejecución de un contrato.</span></p>
                </div>
                <div className="bg-brand-text/5 p-6 border border-brand-border">
                    <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-2">Comunicaciones</h4>
                    <p className="text-sm">Para responder a consultas realizadas a través de la web y enviar newsletters si se ha suscrito. <br/><span className="italic text-xs opacity-60">Base legal: Consentimiento del interesado.</span></p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">3. Conservación de los Datos</h2>
              <p>
                Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial, no se solicite su supresión por el interesado, o durante los años necesarios para cumplir con las obligaciones legales (fiscales, mercantiles).
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">4. Destinatarios</h2>
              <p>
                No se cederán datos a terceros, salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio (ej. clubes deportivos, federaciones, proveedores de servicios médicos), informando siempre previamente al interesado. Se realizan transferencias internacionales de datos a nuestras sedes fuera de la UE (ej. UK, Brasil) bajo garantías adecuadas (Cláusulas Contractuales Tipo).
              </p>
            </section>

            <section>
              <h2 className="text-brand-text font-serif text-2xl mb-4">5. Derechos del Interesado</h2>
              <p>
                Cualquier persona tiene derecho a obtener confirmación sobre si en New Talent Management estamos tratando datos personales que les conciernan o no. Las personas interesadas tienen derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 text-brand-text">
                <li>Acceder a sus datos personales.</li>
                <li>Rectificar los datos inexactos.</li>
                <li>Solicitar su supresión (Derecho al Olvido).</li>
                <li>Solicitar la limitación del tratamiento.</li>
                <li>Oponerse al tratamiento.</li>
                <li>Portabilidad de los datos.</li>
              </ul>
              <p className="mt-4">
                Puede ejercer sus derechos enviando un email a <a href="mailto:privacy@newtalentmanagement.com" className="text-brand-turf underline">privacy@newtalentmanagement.com</a>.
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

export default Privacy;