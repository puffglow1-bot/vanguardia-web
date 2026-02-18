export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Club {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  club?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

// Nueva interfaz para Talentos
export interface Athlete {
  id: string;
  name: string;
  sport: string;
  position: string;
  // Lógica de negocio: Estado dentro de la academia
  academyStatus: 'Graduado' | 'Elite Level 3' | 'Proyección Level 2' | 'Ingreso Reciente' | 'Graduate' | 'Projection Level 2' | 'Recent Intake'; 
  academyProgress: number; // 0 a 100
  stats: { label: string; value: string }[];
  bio: string;
  images: {
    portrait: string;
    action: string;
  };
  featured: boolean;
}