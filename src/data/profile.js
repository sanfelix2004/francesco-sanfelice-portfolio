/**
 * Real profile data — sourced from CV, GitHub projects, Corner live site.
 * LinkedIn tech-only enrichment (role/education/skills already aligned with CV).
 */
export const profile = {
  name: 'Francesco Sanfelice di Bagnoli',
  shortName: 'Francesco',
  lastName: 'Sanfelice',
  role: 'Software Engineer · Backend & Cloud Systems',
  tagline: 'JAVA / SPRING / AWS',
  location: 'Giovinazzo (BA), Italia',
  email: 'sanfelicefrancesco004@gmail.com',
  phone: '+393288826170',
  phoneDisplay: '+39 328 882 6170',
  github: 'https://github.com/sanfelix2004',
  linkedin: 'https://www.linkedin.com/in/francesco-sanfelice-di-bagnoli-006598230/',
  portfolio: 'https://sanfelix2004.github.io/francesco-sanfelice-portfolio/',
  cvUrl: `${import.meta.env.BASE_URL}Francesco-Sanfelice-CV.pdf`,
  avatar: `${import.meta.env.BASE_URL}images/avatar.png?v=3`,
  bio:
    "Hi, I'm Francesco — a Junior Software Engineer focused on scalable backend microservices, cloud-native systems and AI-powered products. I work daily with Java, Spring and AWS, and I love shipping reliable software that holds up under real traffic.",
  statementTitle: 'Building reliable backends, cloud systems and high-impact digital products.',
  statementBody:
    'From OTT microservices for Mediaset Infinity at Fincons Group to live web products and AI platforms — I design, ship and iterate with engineering discipline and a product mindset.',
}

/** Tool / software row under the hero */
export const tools = [
  'Java',
  'Spring Boot',
  'AWS',
  'Redis',
  'DynamoDB',
  'PostgreSQL',
  'Docker',
  'Git',
  'OpenAPI',
  'React',
  'Swift',
  'Python',
]

/** Certifications from CV */
export const certifications = [
  'Cambridge English B2',
  'Cisco CPA — Programming Essentials in C++',
  'Cisco Introduction to Cybersecurity',
  'Cisco NDG Linux Unhatched',
  'Cisco Introduction to Packet Tracer',
  'Cisco Entrepreneurship',
]

/**
 * "What I do" services — mapped from CV competencies + shipped projects
 */
export const services = [
  {
    id: 'backend',
    title: 'Backend Microservices',
    subtitle: 'Java · Spring Boot · Spring Cloud',
    thumb: 'BE',
    href: '#projects',
  },
  {
    id: 'cloud',
    title: 'Cloud & AWS Systems',
    subtitle: 'SQS · SNS · S3 · DynamoDB · Parameter Store',
    thumb: 'AWS',
    href: '#projects',
  },
  {
    id: 'api',
    title: 'REST API Design',
    subtitle: 'OpenAPI 3.0 · Swagger · Versioning',
    thumb: 'API',
    href: '#projects',
  },
  {
    id: 'ai',
    title: 'AI & Data Products',
    subtitle: 'Smart Energy AI · ML foundations',
    thumb: 'AI',
    href: '#projects',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps (Swift / Flutter)',
    subtitle: 'HACCP Software · cross-platform UI',
    thumb: 'iOS',
    href: '#projects',
  },
  {
    id: 'web',
    title: 'Full-stack Web Products',
    subtitle: 'Corner Pub · bookings · live demos',
    thumb: 'WEB',
    href: '#projects',
  },
]

export const projects = [
  {
    id: 'corner',
    badge: 'Live',
    title: 'Corner Pub Giovinazzo',
    description:
      'Digital preview & official site for Corner Hamburgeria — menu, table/event bookings, allergens and privacy flow. Deployed on Render.',
    href: 'https://cornerpubgiovinazzo.onrender.com',
    cta: 'Open live site',
  },
  {
    id: 'smart-energy',
    badge: 'Open source',
    title: 'Smart Energy AI',
    description:
      'Smart Sustainability platform: Spring Boot backend, solar simulation, standby detection and Smart Home AI tips with a 24h dashboard.',
    href: 'https://github.com/sanfelix2004/smart-energy-ai-public',
    cta: 'View on GitHub',
  },
  {
    id: 'haccp',
    badge: 'In progress · Swift',
    title: 'HACCP Software',
    description:
      'iOS app for restaurants: HACCP checklists, reports, analytics and traceability. Modular feature-based Swift architecture.',
    href: 'https://github.com/sanfelix2004/haccp-software',
    cta: 'View on GitHub',
  },
]

export const experience = [
  {
    title: 'Software Engineer — Fincons Group',
    meta: '04/2025 — Present · Bari, Italy',
    body: 'Backend microservices for Mediaset Infinity OTT (ITA/ESP). Java/Spring, OpenAPI, Redis, DynamoDB, AWS messaging (SQS/SNS/S3/Parameter Store).',
  },
  {
    title: 'BSc Computer Engineering & AI — Guglielmo Marconi University',
    meta: 'In progress · transfer from Polytechnic University of Bari',
    body: 'CFU validation transfer. Focus on algorithms, AI, machine learning, operating systems and networks.',
  },
  {
    title: 'Erasmus+ Inclusion — Galway, Ireland',
    meta: '2022 · English immersion',
    body: 'International work experience that strengthened communication and adaptability in a multicultural environment.',
  },
]

export const contacts = [
  { id: 'email', label: 'Email', href: `mailto:${profile.email}`, kind: 'email' },
  { id: 'phone', label: 'WhatsApp', href: `https://wa.me/393288826170`, kind: 'whatsapp' },
  { id: 'github', label: 'GitHub', href: profile.github, kind: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: profile.linkedin, kind: 'linkedin' },
  { id: 'cv', label: 'Resume', href: profile.cvUrl, kind: 'cv', download: true },
  { id: 'corner', label: 'Corner', href: 'https://cornerpubgiovinazzo.onrender.com', kind: 'link' },
]
