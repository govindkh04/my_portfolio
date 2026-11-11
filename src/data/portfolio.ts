/** Content transcribed from Govind Khandelwal's supplied resume. */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Govind Khandelwal',
  displayName: 'Govind',
  firstName: 'GOVIND',
  seriesTag: 'THE SERIES',
  originalLabel: 'A GOVIND KHANDELWAL ORIGINAL',
  role: 'B.Tech Mathematics & Computing Student',
  tagline: ['Mathematics & Computing', 'AI / Generative AI', 'Full-Stack Development'],
  intro:
    'Mathematics & Computing student at Delhi Technological University, building AI-powered applications and browser-based tools with Python, FastAPI, React, JavaScript, and LLMs.',
  location: 'New Delhi, India',
  email: 'govindkhandelwal_ece_25a11057@dtu.ac.in',
  phone: '+917296966160',
  links: {
    linkedin: 'https://www.linkedin.com/in/govind-khandelwal-756b18368',
    github: 'https://github.com/govindkhandelwal04102006-ai',
    leetcode: 'https://leetcode.com/u/GOVINDK04/',
  },
  resumePdf: '/assets/Govind_Khandelwal_Resume.pdf',
  portrait: {
    src: '/assets/gk-monogram.svg',
    srcSet: '',
    alt: 'Decorative GK monogram',
  },
  interests: ['Generative AI', 'LLM applications', 'Modular system design'],
};

export const education = [
  {
    school: 'Delhi Technological University',
    place: 'New Delhi, India',
    degree: 'Bachelor of Technology — Mathematics & Computing',
    period: '2025 – Present',
    score: 'CGPA 8.9 / 10',
  },
  {
    school: 'Children Academy Convent School',
    place: 'Alwar, Rajasthan',
    degree: 'Class XII — CBSE',
    period: 'Class XII',
    score: '83.6%',
  },
  {
    school: 'Royal Academy School',
    place: 'Alwar, Rajasthan',
    degree: 'Class X — CBSE',
    period: 'Class X',
    score: '96.0%',
  },
];

/** The resume lists a student leadership role rather than paid employment. */
export const experience = [
  {
    company: 'Society of Software Engineering (SSE)',
    role: 'Technical Head, Junior Council',
    place: 'Delhi Technological University',
    period: '2026 – 2027',
    points: [
      'Contributed to Shrinkr, a Chrome-based media compressor, and a BAH Hackathon project on satellite-based AQI and HCHO hotspot analysis.',
      'Strengthened data structures and algorithms through regular practice.',
      'Collaborated on content creation, posters, and social media initiatives.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-portfolio-chatbot',
    title: 'AI Portfolio Chatbot',
    year: '',
    genre: 'Generative AI · Full-Stack',
    logline: 'A conversational portfolio assistant that answers recruiter questions about skills, projects, and experience.',
    stack: ['Python', 'FastAPI', 'Groq', 'JavaScript', 'Render', 'Vercel'],
    build: [
      'Built a conversational AI portfolio integrating more than 10 LLM concepts to answer questions about skills, projects, and experience.',
      'Developed PDF and DOCX job matching with multi-turn memory, then deployed the full-stack application using FastAPI, Render, and Vercel.',
    ],
    features: ['Recruiter Q&A about portfolio content', 'PDF and DOCX job matching', 'Multi-turn conversation memory', 'FastAPI backend and JavaScript frontend'],
    metrics: [{ value: '10+', label: 'LLM concepts integrated' }, { value: 'PDF + DOCX', label: 'job-match formats' }],
    github: 'https://github.com/govindkh04/AI-Portfolio',
    palette: { from: '#0c1f1a', via: '#1e4f3f', to: '#132228', accent: '#589C80' },
    motif: 'shield',
  },
  {
    id: 'shrinkr',
    title: 'Shrinkr — Browser-Based Media Compressor',
    year: '',
    genre: 'Chrome Extension · Media Compression',
    logline: 'A browser-based media compressor for audio and other formats, built with a six-member team.',
    stack: ['JavaScript ES6', 'Chrome Extension API', 'Web Audio API', 'LameJS', 'FFmpeg WASM', 'HTML5', 'CSS3'],
    build: [
      'Developed the lossy audio compression pipeline for MP3 and WAV files using Web Audio API and LameJS, including PCM decoding, 16-bit conversion, and chunk-based MP3 encoding.',
      'Implemented live compression metrics and collaborated with a six-member team on a multi-format media compression extension.',
    ],
    features: ['MP3 and WAV audio compression', 'PCM decoding and 16-bit conversion', 'Chunk-based MP3 encoding', 'Real-time compression metrics', 'Multi-format media compression extension'],
    metrics: [{ value: 'Up to 70%', label: 'file size reduction' }, { value: '10.87 → 3.25 MB', label: 'example compressed file' }, { value: '6', label: 'team members' }],
    github: 'https://github.com/KartikSisodia217/MACS_Compression_Project',
    palette: { from: '#1c190a', via: '#5a420e', to: '#132228', accent: '#EBAE29' },
    motif: 'flow',
  },
  {
    id: 'talentalign',
    title: 'TalentAlign — AI Resume Matcher',
    year: '',
    genre: 'Generative AI · Recruiting',
    logline: 'An AI resume-matching system that extracts candidate details and scores them against HR requirements.',
    stack: ['Python', 'Groq API', 'Llama 3.3', 'Pydantic', 'Prompt Engineering', 'JSON'],
    build: [
      'Built a resume matching system that parses PDF and DOCX resumes, uses Llama 3.3 through the Groq API to extract structured candidate information, and validates it with Pydantic and JSON.',
      'Developed case-insensitive matching and weighted scoring across skills, experience, projects, and education to produce a match percentage and hiring recommendation.',
    ],
    features: ['PDF and DOCX resume parsing', 'Structured candidate information extraction', 'Pydantic and JSON validation', 'Weighted, case-insensitive matching', 'Hiring recommendation generation'],
    metrics: [{ value: '4', label: 'matching categories' }, { value: 'PDF + DOCX', label: 'resume input formats' }],
    github: 'https://github.com/govindkh04/TalentAlign',
    palette: { from: '#152119', via: '#295444', to: '#132228', accent: '#62c29c' },
    motif: 'tenants',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  {
    id: 'dell-aspire', title: 'Dell Aspire Scholar', org: 'Merit-based scholarship',
    detail: 'Awarded the MSDF-backed scholarship focused on professional leadership and technical excellence.', laurel: 'Scholarship',
  },
  {
    id: 'pratibha-samman', title: 'Pratibha Samman Patra 2022', org: 'Talent Honour Award',
    detail: 'Awarded by Alwar District Vaishya Mahasammelan Samiti for securing 96.00% in Class 10.', laurel: 'Academic Excellence',
  },
  {
    id: 'jee-main', title: 'JEE Main 2025', org: 'Top 1.1% nationally',
    detail: 'Secured 98.9 percentile and All India CRL 16,788 among 15.39 lakh candidates.', laurel: '98.9 Percentile',
  },
];

export type Certification = { issuer: string; name: string; link?: string; detail?: string };
export const certifications: Certification[] = [
  {
    issuer: 'Clever Harvey', name: 'JuniorMBA in Artificial Intelligence',
    detail: 'Training covered ML, deep learning, neural networks, CNNs, transformers, LLMs, generative AI, prompt engineering, RAG, and reinforcement learning.',
  },
  {
    issuer: 'Data Analysis', name: 'Introduction to Data Analysis using Excel',
    detail: 'Data analysis and manipulation, Excel formulas, logical functions, text processing, visualizations, delimited files, and workflow optimization.',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages', title: 'Programming & Web', subtitle: 'Languages and web technologies',
    skills: [
      { name: 'Python', mono: 'Py' }, { name: 'C / C++', mono: 'C+' }, { name: 'JavaScript', mono: 'Js' },
      { name: 'MATLAB', mono: 'M' }, { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'ai', title: 'AI & Generative AI', subtitle: 'Models, prompts, and LLM applications',
    skills: [
      { name: 'Generative AI', mono: 'AI' }, { name: 'LLMs', mono: 'LL' }, { name: 'Prompt Engineering', mono: 'PE' },
      { name: 'Groq API', mono: 'Gq' }, { name: 'Llama 3.3', mono: 'L3' },
    ],
  },
  {
    id: 'frameworks', title: 'Frameworks & Tools', subtitle: 'Application development and developer tools',
    skills: [
      { name: 'React', mono: 'Re' }, { name: 'Pydantic', mono: 'Py' }, { name: 'FastAPI', mono: 'Fa' },
      { name: 'PyPDF', mono: 'PDF' }, { name: 'python-docx', mono: 'Dx' }, { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'GH' }, { name: 'VS Code', mono: 'VS' },
    ],
  },
  {
    id: 'design-data', title: 'Design & Data', subtitle: 'Design tools and spreadsheet analysis',
    skills: [{ name: 'Figma', mono: 'Fi' }, { name: 'Canva', mono: 'Ca' }, { name: 'Microsoft Excel', mono: 'Xl' }],
  },
  {
    id: 'fundamentals', title: 'Core Concepts', subtitle: 'Problem solving and system structure',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'DSA' }, { name: 'Modular System Design', mono: 'MS' },
      { name: 'Problem Solving', mono: 'PS' },
    ],
  },
];
export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Portfolio Chatbot', 'TalentAlign'],
  'C / C++': ['Technical skills'],
  JavaScript: ['AI Portfolio Chatbot', 'Shrinkr'],
  'Generative AI': ['AI Portfolio Chatbot', 'TalentAlign', 'JuniorMBA in Artificial Intelligence'],
  LLMs: ['AI Portfolio Chatbot', 'TalentAlign'],
  'Prompt Engineering': ['TalentAlign', 'JuniorMBA in Artificial Intelligence'],
  'Groq API': ['AI Portfolio Chatbot', 'TalentAlign'],
  'Llama 3.3': ['TalentAlign'],
  React: ['Frameworks and tools'],
  FastAPI: ['AI Portfolio Chatbot'],
  PyPDF: ['AI Portfolio Chatbot', 'TalentAlign'],
  'python-docx': ['AI Portfolio Chatbot', 'TalentAlign'],
  Figma: ['Design & Data'],
  Canva: ['Design & Data'],
  'Microsoft Excel': ['Introduction to Data Analysis using Excel'],
  'Data Structures & Algorithms': ['Core concepts'],
  'Modular System Design': ['Core concepts'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
const crimson: Palette = { from: '#0c1f1a', via: '#1e4f3f', to: '#132228', accent: '#589C80' };
const amber: Palette = { from: '#1c190a', via: '#5a420e', to: '#132228', accent: '#EBAE29' };
const ocean: Palette = { from: '#0f2422', via: '#24594c', to: '#132228', accent: '#589C80' };
const violet: Palette = { from: '#172223', via: '#38504a', to: '#132228', accent: '#F5EED2' };
const jade: Palette = { from: '#091c16', via: '#19553f', to: '#132228', accent: '#46e3a8' };
const cream: Palette = { from: '#182422', via: '#364942', to: '#132228', accent: '#F5EED2' };

export const seasons: Season[] = [
  {
    number: 1, title: 'Academic Foundations', period: 'Class X – Class XII',
    synopsis: 'Schooling at Royal Academy School and Children Academy Convent School in Alwar, Rajasthan.',
    episodes: [
      { code: 'S01 E01', title: 'Class X', description: 'Completed CBSE Class X with 96.0%. The Pratibha Samman Patra recognized this result.', tags: ['CBSE', '96.0%', 'Pratibha Samman Patra'], runtime: 'Royal Academy School', palette: amber },
      { code: 'S01 E02', title: 'Class XII', description: 'Completed Class XII under the CBSE board with 83.6%.', tags: ['CBSE', '83.6%'], runtime: 'Children Academy Convent School', palette: cream },
    ],
  },
  {
    number: 2, title: 'Mathematics & Computing', period: '2025 – Present',
    synopsis: 'Pursuing a Bachelor of Technology at Delhi Technological University in New Delhi.',
    episodes: [
      { code: 'S02 E01', title: 'The DTU Chapter', description: 'B.Tech in Mathematics & Computing at Delhi Technological University, with a CGPA of 8.9 / 10.', tags: ['B.Tech', 'Mathematics & Computing', 'CGPA 8.9 / 10'], runtime: '2025 – Present', palette: violet },
      { code: 'S02 E02', title: 'JEE Main 2025', description: 'Scored 98.9 percentile and CRL 16,788 among 15.39 lakh candidates.', tags: ['98.9 percentile', 'Top 1.1%', 'CRL 16,788'], runtime: '2025', palette: jade },
    ],
  },
  {
    number: 3, title: 'Building AI Applications', period: 'Projects',
    synopsis: 'Three projects spanning conversational AI, browser-based media compression, and AI-assisted resume matching.',
    episodes: projects.map((project, i) => ({
      code: `S03 E0${i + 1}`, title: project.title,
      description: project.logline, tags: project.stack.slice(0, 4), runtime: 'Resume project',
      palette: [crimson, amber, ocean][i],
    })),
  },
  {
    number: 4, title: 'Leadership & Recognition', period: '2022 – 2027',
    synopsis: 'Technical leadership with the SSE Junior Council and recognition for academics, leadership, and technical promise.',
    episodes: [
      { code: 'S04 E01', title: 'Technical Head', description: 'Technical Head, Junior Council, Society of Software Engineering at DTU.', tags: ['SSE', 'Junior Council', 'Leadership'], runtime: '2026 – 2027', palette: ocean },
      ...achievements.map((award, i) => ({ code: `S04 E0${i + 2}`, title: award.title, description: award.detail, tags: [award.org], runtime: award.id === 'pratibha-samman' ? '2022' : award.id === 'jee-main' ? '2025' : 'Scholarship', palette: [amber, cream, jade][i] })),
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'University', title: 'DTU', detail: 'B.Tech · Mathematics & Computing', palette: violet },
  { label: 'Current CGPA', title: '8.9 / 10', detail: 'Delhi Technological University', palette: cream },
  { label: 'JEE Main 2025', title: '98.9', detail: 'Percentile · Top 1.1%', palette: jade },
  { label: 'School result', title: '96.0%', detail: 'CBSE Class X', palette: amber },
  { label: 'AI Project', title: 'Portfolio Chatbot', detail: '10+ LLM concepts integrated', palette: crimson },
  { label: 'Browser Extension', title: 'Shrinkr', detail: 'Up to 70% media file size reduction', palette: ocean },
  { label: 'AI Project', title: 'TalentAlign', detail: 'Weighted resume matching', palette: violet },
  { label: 'Leadership', title: 'Technical Head', detail: 'SSE Junior Council · 2026–2027', palette: jade },
  { label: 'Scholarship', title: 'Dell Aspire', detail: 'MSDF-backed merit scholarship', palette: amber },
  { label: 'Certification', title: 'JuniorMBA AI', detail: 'Clever Harvey', palette: crimson },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'Mathematics & Computing', lines: ['Delhi Technological University · New Delhi', 'Bachelor of Technology · 2025–Present'], chips: ['CGPA 8.9 / 10'] },
  { kicker: 'AI & Generative AI', title: 'Building with LLMs', lines: ['Python · Groq API · Llama 3.3', 'Prompt Engineering · Pydantic · JSON'], chips: ['10+ LLM concepts'] },
  { kicker: 'Projects', title: 'Three Builds', lines: ['AI Portfolio Chatbot · recruiter Q&A and job matching', 'Shrinkr · browser-based media compression', 'TalentAlign · weighted AI resume matching'] },
  { kicker: 'Leadership', title: 'Technical Head', lines: ['Junior Council · Society of Software Engineering', 'Delhi Technological University · 2026–2027'] },
  { kicker: 'Recognition', title: 'Academic & Technical', lines: ['Dell Aspire Scholar', 'Pratibha Samman Patra · 2022', 'JEE Main 2025 · 98.9 percentile · Top 1.1%'] },
  { kicker: 'Certification', title: 'JuniorMBA in Artificial Intelligence', lines: ['Clever Harvey', 'ML · Transformers · Generative AI · RAG · Reinforcement Learning'] },
  { kicker: 'Contact', title: 'Let’s build', lines: [profile.email, profile.phone, profile.location] },
];

export type ProfileId = 'govind' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'govind', name: 'Govind', blurb: 'The full series, in order', color: '#EBAE29', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, awards & skills first', color: '#589C80', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, tools & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#F5EED2', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Education · Technical Head', palette: cream },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} chapters · DTU, projects & leadership`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} AI and web projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Selected resume highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} skill areas`, palette: ocean },
  moments: { nav: 'Awards', card: 'Awards & Certifications', meta: `${achievements.length} awards · ${certifications.length} certifications`, palette: amber },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume · View & download', palette: cream },
};
