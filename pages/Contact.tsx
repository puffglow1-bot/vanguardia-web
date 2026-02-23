import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) newErrors.name = t('contact.error_name');
    
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = t('contact.error_email');
    
    if (!data.subject) newErrors.subject = t('contact.error_subject');
    
    if (!data.message.trim() || data.message.trim().length < 10) newErrors.message = t('contact.error_message');
    
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam silencioso en cliente

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    setServerMessage('');

    try {
      // Conexión real con el Backend
      const response = await fetch('https://vanguardia-athletics-tu-url.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerMessage(data.message); // Mensaje del servidor
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        
        // Reset status after 5s
        setTimeout(() => {
            setStatus('idle');
            setServerMessage('');
        }, 5000); 
      } else {
        setStatus('error');
        setServerMessage(data.message || 'Error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setStatus('error');
      setServerMessage('Error de conexión con el servidor.');
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6 bg-brand-bg text-brand-text transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          {/* Fixed Title Rendering */}
          <h1 className="text-5xl md:text-8xl font-condensed font-bold mb-12 text-brand-text uppercase leading-[0.85] tracking-tighter">
            {t('contact.title')} <br />
            <span className="text-brand-accent">{t('contact.title_2')}</span>
          </h1>
          
          {status === 'success' && (
            <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded">
              {t('contact.success')} {serverMessage && <span className="text-xs block mt-1 opacity-80">Server: {serverMessage}</span>}
            </div>
          )}

          {status === 'error' && (
            <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded">
              Hubo un problema. {serverMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs text-brand-accent uppercase tracking-widest">{t('contact.label_name')}</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 text-brand-text focus:outline-none placeholder-brand-accent/50 transition-colors ${errors.name ? 'border-red-500' : 'border-brand-border focus:border-brand-text'}`}
                  placeholder={t('contact.placeholder_name')}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs text-brand-accent uppercase tracking-widest">{t('contact.label_email')}</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 text-brand-text focus:outline-none placeholder-brand-accent/50 transition-colors ${errors.email ? 'border-red-500' : 'border-brand-border focus:border-brand-text'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-brand-accent uppercase tracking-widest">{t('contact.label_interest')}</label>
              <select name="subject" value={formData.subject} onChange={handleChange} className={`w-full bg-transparent border-b py-3 text-brand-text focus:outline-none transition-colors ${errors.subject ? 'border-red-500' : 'border-brand-border focus:border-brand-text'}`}>
                <option value="" className="bg-brand-bg text-brand-accent">{t('contact.option_default')}</option>
                <option value="representacion" className="bg-brand-bg text-brand-text">{t('contact.option_rep')}</option>
                <option value="academia" className="bg-brand-bg text-brand-text">{t('contact.option_academy')}</option>
                <option value="club" className="bg-brand-bg text-brand-text">{t('contact.option_club')}</option>
                <option value="otros" className="bg-brand-bg text-brand-text">{t('contact.option_other')}</option>
              </select>
               {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs text-brand-accent uppercase tracking-widest">{t('contact.label_message')}</label>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} rows={4}
                className={`w-full bg-transparent border-b py-3 text-brand-text focus:outline-none placeholder-brand-accent/50 transition-colors ${errors.message ? 'border-red-500' : 'border-brand-border focus:border-brand-text'}`}
                placeholder={t('contact.placeholder_message')}
              />
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>

            <button type="submit" disabled={status === 'sending'} className="mt-8 px-12 py-4 border border-brand-text text-brand-text uppercase tracking-widest text-xs hover:bg-brand-text hover:text-brand-bg transition-all disabled:opacity-50">
              {status === 'sending' ? t('contact.sending') : t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};
export default Contact;