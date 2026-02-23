import { StaffMember, Club, Testimonial, NewsItem, Athlete } from '../types';

// --- STAFF DATA ---
const STAFF_ES: StaffMember[] = [
  {
    id: '1',
    name: 'Alejandro Valderrama',
    role: 'Fundador & Guía Principal',
    bio: 'Pionero en la gestión humanista del deporte. Su enfoque se centra en construir la persona detrás del atleta, asegurando que los valores y la integridad guíen cada decisión de carrera.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop' // Man in suit
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Psicóloga Deportiva',
    bio: 'Ex-olímpica dedicada a la salud mental. Especialista en ayudar a los atletas a gestionar la presión, el fracaso y el éxito con equilibrio emocional.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop' // Professional woman
  },
  {
    id: '3',
    name: 'Marco Rossi',
    role: 'Director de Desarrollo Humano',
    bio: 'Educador y coach de vida. Diseña los planes de carrera "post-fútbol" y se asegura de que la formación académica nunca se detenga.',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop' // Man professional
  },
  {
    id: '4',
    name: 'Sarah Jenkings',
    role: 'Protección & Bienestar',
    bio: 'Abogada especializada en derechos humanos en el deporte. Su misión es proteger la integridad del atleta frente a abusos y asegurar entornos seguros.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop' // Woman corporate
  }
];

const STAFF_EN: StaffMember[] = [
  {
    id: '1',
    name: 'Alejandro Valderrama',
    role: 'Founder & Head Guide',
    bio: 'Pioneer in humanist sports management. His focus is on building the person behind the athlete, ensuring values and integrity guide every career decision.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Sports Psychologist',
    bio: 'Former Olympian dedicated to mental health. Specialist in helping athletes manage pressure, failure, and success with emotional balance.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Marco Rossi',
    role: 'Director of Human Development',
    bio: 'Educator and life coach. Designs "post-football" career plans and ensures that academic education never stops.',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Sarah Jenkings',
    role: 'Protection & Wellness',
    bio: 'Lawyer specializing in human rights in sport. Her mission is to protect the athlete\'s integrity against abuse and ensure safe environments.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  }
];

// --- TESTIMONIALS DATA ---
const TESTIMONIALS_ES: Testimonial[] = [
  {
    id: '1',
    quote: "En newtalentmanagement no encontraron un contrato para mí, encontraron un propósito. Me ayudaron a madurar como hombre, lo que mejoró mi juego.",
    author: "Matías Vargas",
    role: "Atleta",
    club: "Shanghai Port"
  },
  {
    id: '2',
    quote: "Es la única agencia que pregunta '¿Cómo estás?' antes de preguntar '¿Cómo jugaste?'. Esa humanidad lo cambia todo.",
    author: "Familia Gómez",
    role: "Padres de Atleta",
    club: "Cantera"
  },
  {
    id: '3',
    quote: "Su academia me enseñó disciplina y valores. Aprendí que el respeto al compañero es tan vital como el gol.",
    author: "Lucas Silva",
    role: "Graduado",
    club: "SL Benfica B"
  },
  {
    id: '4',
    quote: "La transición al fútbol profesional fue dura, pero el equipo de psicólogos estuvo ahí cada día. No solo soy mejor portero, soy más fuerte mentalmente.",
    author: "David Soria",
    role: "Portero Profesional",
    club: "Getafe CF"
  }
];

const TESTIMONIALS_EN: Testimonial[] = [
  {
    id: '1',
    quote: "At newtalentmanagement they didn't just find a contract for me, they found a purpose. They helped me mature as a man, which improved my game.",
    author: "Matías Vargas",
    role: "Athlete",
    club: "Shanghai Port"
  },
  {
    id: '2',
    quote: "It's the only agency that asks 'How are you?' before asking 'How did you play?'. That humanity changes everything.",
    author: "The Gómez Family",
    role: "Athlete Parents",
    club: "Youth Academy"
  },
  {
    id: '3',
    quote: "Their academy taught me discipline and values. I learned that respect for teammates is as vital as the goal.",
    author: "Lucas Silva",
    role: "Graduate",
    club: "SL Benfica B"
  },
  {
    id: '4',
    quote: "The transition to professional football was hard, but the psychology team was there every day. I'm not just a better goalkeeper, I'm mentally stronger.",
    author: "David Soria",
    role: "Pro Goalkeeper",
    club: "Getafe CF"
  }
];

// --- ATHLETES DATA ---
const ATHLETES_ES: Athlete[] = [
  {
    id: 'a1',
    name: 'Thiago "El Arquitecto" Mendes',
    sport: 'Fútbol',
    position: 'Líder en Campo',
    academyStatus: 'Graduado',
    academyProgress: 100,
    featured: true,
    stats: [
      { label: 'Inteligencia Táctica', value: 'Elite' },
      { label: 'Compañerismo', value: '10/10' },
      { label: 'Edad', value: '23' }
    ],
    bio: 'Thiago es el ejemplo de nuestra filosofía. Más allá de su técnica, destaca por su capacidad de liderazgo positivo y su estabilidad emocional en momentos críticos.',
    images: {
      portrait: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop', // Soccer player
      action: 'https://images.unsplash.com/photo-1628891892234-419d8525b64c?q=80&w=1000&auto=format&fit=crop' // Action
    }
  },
  {
    id: 'a2',
    name: 'Sofía "La Muralla" Romano',
    sport: 'Fútbol',
    position: 'Referente Defensiva',
    academyStatus: 'Elite Level 3',
    academyProgress: 85,
    featured: true,
    stats: [
      { label: 'Resiliencia', value: 'Alta' },
      { label: 'Disciplina', value: 'Férrea' },
      { label: 'Edad', value: '19' }
    ],
    bio: 'Sofía destaca por su fortaleza mental. Ha superado lesiones con una madurez impropia de su edad, convirtiendo la adversidad en un motor de crecimiento.',
    images: {
      portrait: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1000&auto=format&fit=crop', // Female athlete
      action: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000&auto=format&fit=crop' // Action
    }
  },
  {
    id: 'a3',
    name: 'Javier "Rayo" Castillo',
    sport: 'Fútbol',
    position: 'Talento Creativo',
    academyStatus: 'Proyección Level 2',
    academyProgress: 60,
    featured: false,
    stats: [
      { label: 'Creatividad', value: 'Pura' },
      { label: 'Pasión', value: 'Total' },
      { label: 'Edad', value: '17' }
    ],
    bio: 'Javier llegó con mucho talento pero poca dirección. Nuestro programa de mentoría le está ayudando a canalizar su energía.',
    images: {
      portrait: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop',
      action: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop'
    }
  }
];

const ATHLETES_EN: Athlete[] = [
  {
    id: 'a1',
    name: 'Thiago "The Architect" Mendes',
    sport: 'Football',
    position: 'Field Leader',
    academyStatus: 'Graduate',
    academyProgress: 100,
    featured: true,
    stats: [
      { label: 'Tactical IQ', value: 'Elite' },
      { label: 'Teamwork', value: '10/10' },
      { label: 'Age', value: '23' }
    ],
    bio: 'Thiago is the embodiment of our philosophy. Beyond his technique, he stands out for his positive leadership and emotional stability in critical moments.',
    images: {
      portrait: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
      action: 'https://images.unsplash.com/photo-1628891892234-419d8525b64c?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'a2',
    name: 'Sofía "The Wall" Romano',
    sport: 'Football',
    position: 'Defensive Anchor',
    academyStatus: 'Elite Level 3',
    academyProgress: 85,
    featured: true,
    stats: [
      { label: 'Resilience', value: 'High' },
      { label: 'Discipline', value: 'Iron' },
      { label: 'Age', value: '19' }
    ],
    bio: 'Sofía stands out for her mental strength. She has overcome injuries with a maturity beyond her years, turning adversity into a motor for growth.',
    images: {
      portrait: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1000&auto=format&fit=crop',
      action: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: 'a3',
    name: 'Javier "Bolt" Castillo',
    sport: 'Football',
    position: 'Creative Talent',
    academyStatus: 'Projection Level 2',
    academyProgress: 60,
    featured: false,
    stats: [
      { label: 'Creativity', value: 'Pure' },
      { label: 'Passion', value: 'Total' },
      { label: 'Age', value: '17' }
    ],
    bio: 'Javier arrived with immense talent but little direction. Our mentorship program is helping him channel his energy.',
    images: {
      portrait: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop',
      action: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop'
    }
  }
];

// --- CLUBS ---
const MOCK_CLUBS: Club[] = [
  { id: '1', name: 'Girona FC', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Girona_FC_Logo.svg/1200px-Girona_FC_Logo.svg.png' },
  { id: '2', name: 'Manchester City', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png' },
  { id: '3', name: 'SL Benfica', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png' },
  { id: '4', name: 'Atlético de Madrid', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png' },
  { id: '5', name: 'River Plate', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/River_Plate_logo.svg/1200px-River_Plate_logo.svg.png' }
];

// --- NEWS (Updated images for football context) ---
const NEWS_ES: NewsItem[] = [
  { id: '1', title: 'Expansión a Brasil', excerpt: 'Nueva sede en São Paulo para captación de talento sudamericano.', date: '15 NOV 2023', category: 'Expansión', imageUrl: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000&auto=format&fit=crop' },
];

const NEWS_EN: NewsItem[] = [
  { id: '1', title: 'Expansion to Brazil', excerpt: 'New HQ in São Paulo for South American talent scouting.', date: '15 NOV 2023', category: 'Expansion', imageUrl: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000&auto=format&fit=crop' },
];


// --- API FUNCTIONS ---

export const getStaff = async (lang: 'es' | 'en' = 'es'): Promise<StaffMember[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(lang === 'es' ? STAFF_ES : STAFF_EN), 600); 
  });
};

export const getClubs = async (): Promise<Club[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_CLUBS), 600);
  });
};

export const getTestimonials = async (lang: 'es' | 'en' = 'es'): Promise<Testimonial[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(lang === 'es' ? TESTIMONIALS_ES : TESTIMONIALS_EN), 600);
  });
};

export const getNews = async (lang: 'es' | 'en' = 'es'): Promise<NewsItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(lang === 'es' ? NEWS_ES : NEWS_EN), 750);
  });
};

export const getAthletes = async (lang: 'es' | 'en' = 'es'): Promise<Athlete[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(lang === 'es' ? ATHLETES_ES : ATHLETES_EN), 600);
  });
};

export const getAthleteById = async (id: string, lang: 'es' | 'en' = 'es'): Promise<Athlete | undefined> => {
  return new Promise((resolve) => {
    const db = lang === 'es' ? ATHLETES_ES : ATHLETES_EN;
    setTimeout(() => resolve(db.find(a => a.id === id)), 400);
  });
};