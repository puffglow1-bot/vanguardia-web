import React, { useEffect, useState } from 'react';
import { NewsItem } from '../types';
import { getNews } from '../services/api';
import PageTransition from '../components/PageTransition';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then(data => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  return (
    <PageTransition>
      <div className="bg-brand-bg min-h-screen pt-32 pb-24 px-6 md:px-12 transition-colors duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-24 border-b border-brand-border pb-12">
            <h1 className="font-serif text-5xl md:text-7xl text-brand-text mb-6">Noticias</h1>
            <span className="text-brand-accent text-sm font-light tracking-wide">Últimas actualizaciones de la agencia</span>
          </div>

          {loading ? (
             <div className="text-brand-text font-light text-center">Cargando noticias...</div>
          ) : (
            <div className="space-y-16 max-w-5xl mx-auto">
              {news.map((item) => (
                <article key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 group cursor-pointer">
                  <div className="md:col-span-4 overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-8 flex flex-col justify-center border-b border-brand-border pb-8 group-hover:border-brand-turf transition-colors">
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="text-brand-gold text-xs tracking-widest uppercase">{item.category}</span>
                        <span className="text-brand-accent text-xs tracking-widest">{item.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif text-brand-text mb-4 group-hover:text-brand-turf transition-colors">{item.title}</h2>
                    <p className="text-brand-accent font-light max-w-2xl">{item.excerpt}</p>
                    <span className="text-brand-text text-xs tracking-widest mt-6 uppercase border-b border-transparent group-hover:border-brand-text w-max transition-all">Leer Artículo</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default News;