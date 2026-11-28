/** Content transcribed from Govind Khandelwal's supplied resume. */

export type Palette = { from: string; via: string; to: string; accent: string };
const graphitePalette: Palette = { from: '#1C1D20', via: '#303136', to: '#1C1D20', accent: '#FFC928' };

export const profile = {
  fullName: 'Govind Khandelwal',
  displayName: 'Govind',
  firstName: 'GOVIND',
  seriesTag: 'THE SERIES',
  originalLabel: 'A GOVIND KHANDELWAL ORIGINAL',
  role: 'B.Tech Mathematics & Computing Student',
  tagline: ['Agentic & Generative AI', 'Machine Learning', 'Full-Stack Engineering'],
  intro:
    'Building AI products, autonomous workflows, and commercial AI systems with scalable web architecture that turns ideas into production software, grounded in Mathematics & Computing at DTU.',
  location: 'New Delhi, India',
  email: 'govindkhandelwal_ece_25a11057@dtu.ac.in',
  phone: '+917296966160',
  links: {
    linkedin: 'https://www.linkedin.com/in/govind-khandelwal-756b18368',
    github: 'https://github.com/govindkh04',
    leetcode: 'https://leetcode.com/u/GOVINDK04/',
  },
  resumePdf: '/assets/Govind_Khandelwal_Resume.pdf',
  portrait: {
    src: '/assets/pic_me.png',
    srcSet: '',
    alt: 'Govind Khandelwal',
  },
  interests: ['Generative AI', 'LLM applications', 'Modular system design'],
};

export const education = [
  {
    school: 'Delhi Technological University',
    place: 'New Delhi, India',
    degree: 'Bachelor of Technology â€” Mathematics & Computing',
    period: '2025 â€“ Present',
    score: 'CGPA 9.0 / 10',
  },
  {
    school: 'Children Academy Convent School',
    place: 'Alwar, Rajasthan',
    degree: 'Class XII â€” CBSE',
    period: 'Class XII',
    score: '83.6%',
  },
  {
    school: 'Royal Academy School',
    place: 'Alwar, Rajasthan',
    degree: 'Class X â€” CBSE',
    period: 'Class X',
    score: '96.0%',
  },
];

/** The resume lists a student leadership role rather than paid employment. */
export const experience = [
  {
    company: 'GCI World (Matsuo-Iwasawa Lab, UTokyo)',
    role: 'Machine Learning & Business Analytics Fellow',
    place: 'GCI World',
    period: '2026',
    points: [
      'Built a tuned LightGBM-CatBoost ensemble for Home Credit default prediction, achieving 0.758 validation ROC-AUC across 61,500 test applicants.',
      'Presented a data-driven business growth proposal in the program competition.',
    ],
  },
  {
    company: 'Society of Software Engineering (SSE)',
    role: 'Technical Design Head, Junior Council',
    place: 'Delhi Technological University',
    period: '2026 â€“ 2027',
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
    genre: 'Generative AI Â· Full-Stack',
    logline: 'A conversational portfolio assistant that answers recruiter questions about skills, projects, and experience.',
    stack: ['Python', 'FastAPI', 'Groq', 'JavaScript', 'Render', 'Vercel'],
    build: [
      'Built a conversational AI portfolio integrating more than 10 LLM concepts to answer questions about skills, projects, and experience.',
      'Developed PDF and DOCX job matching with multi-turn memory, then deployed the full-stack application using FastAPI, Render, and Vercel.',
    ],
    features: ['Recruiter Q&A about portfolio content', 'PDF and DOCX job matching', 'Multi-turn conversation memory', 'FastAPI backend and JavaScript frontend'],
    metrics: [{ value: '10+', label: 'LLM concepts integrated' }, { value: 'PDF + DOCX', label: 'job-match formats' }],
    github: 'https://github.com/govindkh04/AI-Portfolio',
    palette: graphitePalette,
    motif: 'shield',
  },
  {
    id: 'shrinkr',
    title: 'Shrinkr â€” Browser-Based Media Compressor',
    year: '',
    genre: 'Chrome Extension Â· Media Compression',
    logline: 'A browser-based media compressor for audio and other formats, built with a six-member team.',
    stack: ['JavaScript ES6', 'Chrome Extension API', 'Web Audio API', 'LameJS', 'FFmpeg WASM', 'HTML5', 'CSS3'],
    build: [
      'Developed the lossy audio compression pipeline for MP3 and WAV files using Web Audio API and LameJS, including PCM decoding, 16-bit conversion, and chunk-based MP3 encoding.',
      'Implemented live compression metrics and collaborated with a six-member team on a multi-format media compression extension.',
    ],
    features: ['MP3 and WAV audio compression', 'PCM decoding and 16-bit conversion', 'Chunk-based MP3 encoding', 'Real-time compression metrics', 'Multi-format media compression extension'],
    metrics: [{ value: 'Up to 70%', label: 'file size reduction' }, { value: '10.87 â†’ 3.25 MB', label: 'example compressed file' }, { value: '6', label: 'team members' }],
    github: 'https://github.com/KartikSisodia217/MACS_Compression_Project',
    palette: graphitePalette,
    motif: 'flow',
  },
  {
    id: 'talentalign',
    title: 'TalentAlign â€” AI Resume Matcher',
    year: '',
    genre: 'Generative AI Â· Recruiting',
    logline: 'An AI resume-matching system that extracts candidate details and scores them against HR requirements.',
    stack: ['Python', 'Groq API', 'Llama 3.3', 'Pydantic', 'Prompt Engineering', 'JSON'],
    build: [
      'Built a resume matching system that parses PDF and DOCX resumes, uses Llama 3.3 through the Groq API to extract structured candidate information, and validates it with Pydantic and JSON.',
      'Developed case-insensitive matching and weighted scoring across skills, experience, projects, and education to produce a match percentage and hiring recommendation.',
    ],
    features: ['PDF and DOCX resume parsing', 'Structured candidate information extraction', 'Pydantic and JSON validation', 'Weighted, case-insensitive matching', 'Hiring recommendation generation'],
    metrics: [{ value: '4', label: 'matching categories' }, { value: 'PDF + DOCX', label: 'resume input formats' }],
    github: 'https://github.com/govindkh04/TalentAlign',
    palette: graphitePalette,
    motif: 'tenants',
  },
  {
    id: 'vidsage',
    title: 'VidSage â€” AI-Powered YouTube Search & Revision Assistant',
    year: '',
    genre: 'Generative AI Â· Full-Stack',
    logline: 'A timestamp-aware RAG assistant that makes long DSA YouTube playlists searchable and easier to revise.',
    stack: ['Python', 'FastAPI', 'React', 'RAG', 'Qdrant', 'Groq', 'faster-whisper', 'BGE-M3'],
    build: [
      'Built a timestamp-aware RAG pipeline for a 128-video DSA playlist, using faster-whisper transcription, 1024-dimensional BGE-M3 embeddings, and Qdrant for semantic retrieval.',
      'Developed a full-stack AI assistant with FastAPI and React, integrating Groq LLMs, grounded citations, relevance-based refusal, and direct YouTube timestamp navigation.',
    ],
    features: ['Semantic search across a 128-video playlist', 'Timestamp-aware citations and YouTube navigation', 'Relevance-based refusal', 'Speech transcription with faster-whisper'],
    metrics: [{ value: '128', label: 'DSA videos indexed' }, { value: '1024', label: 'embedding dimensions' }, { value: 'Qdrant', label: 'semantic retrieval' }],
    github: 'https://github.com/govindkhandelwal04102006-ai',
    palette: graphitePalette,
    motif: 'flow',
  },
  {
    id: 'autism-screening-classification',
    title: 'Autism Screening Classification',
    year: '',
    genre: 'Machine Learning Â· Classification',
    logline: 'A comparative machine learning study for autism screening with a focus on minority-class performance.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SMOTE', 'XGBoost'],
    build: [
      'Performed EDA and preprocessing on 800 records across 22 features, including categorical encoding, IQR-based outlier treatment, and SMOTE-based class balancing.',
      'Trained and compared Decision Tree, Random Forest, and XGBoost classifiers, applying 5-fold cross-validation and RandomizedSearchCV for hyperparameter optimization.',
      'Selected an optimized Random Forest model achieving 83.75% test accuracy, 92.23% best cross-validation accuracy, and 0.66 F1-score for the minority class.',
    ],
    features: ['Exploratory analysis across 22 features', 'IQR-based outlier treatment', 'SMOTE class balancing', '5-fold cross-validation and randomized hyperparameter search'],
    metrics: [{ value: '83.75%', label: 'test accuracy' }, { value: '92.23%', label: 'best cross-validation accuracy' }, { value: '0.66', label: 'minority-class F1-score' }],
    github: 'https://github.com/govindkhandelwal04102006-ai',
    palette: graphitePalette,
    motif: 'shield',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  {
    id: 'dell-aspire', title: 'Dell Aspire Scholar', org: 'Merit-based scholarship',
    detail: 'Awarded the MSDF-backed scholarship focused on professional leadership and technical excellence.', laurel: 'Scholarship',
  },
  {
    id: 'vijay-shekhar-sharma-scholarship', title: 'Vijay Shekhar Sharma Scholarship (AY 2026â€“27)', org: 'Delhi Technological University',
    detail: 'Awarded the Vijay Shekhar Sharma Scholarship at Delhi Technological University during the Golden Pride Function 2026 in recognition of academic performance up to the second semester of B.Tech.', laurel: 'Scholarship',
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
    link: 'https://drive.google.com/file/d/1Qi19iFKM_pEJ9yvyZuILzf_v9WGslGZ1/view?usp=drive_link',
    detail: 'Training covered ML, deep learning, neural networks, CNNs, transformers, LLMs, generative AI, prompt engineering, RAG, and reinforcement learning.',
  },
  {
    issuer: 'Data Analysis', name: 'Introduction to Data Analysis using Excel',
    link: 'https://drive.google.com/file/d/1ScXMWtMVbHSfEq2Z89xFADM84U5LFtjw/view?usp=drive_link',
    detail: 'Data analysis and manipulation, Excel formulas, logical functions, text processing, visualizations, delimited files, and workflow optimization.',
  },
  {
    issuer: 'Cloudinary', name: 'Cloud to Crowd: Introduction to Media IQ for Developers',
    link: 'https://drive.google.com/file/d/1oeLtpWg9zC5Eafs3xSJdKEyqi-YuFzFK/view?usp=drive_link',
    detail: 'Covered intelligent media optimization, dynamic image/media transformations, and scalable delivery strategies for fast, responsive web applications.',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages', title: 'Programming Languages & Web', subtitle: 'Languages and web technologies',
    skills: [
      { name: 'Python', mono: 'Py' }, { name: 'C/C++', mono: 'C+' }, { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' }, { name: 'SQL', mono: 'SQL' },
    ],
  },
  {
    id: 'ai', title: 'AI / Generative AI', subtitle: 'Models, prompts, and LLM applications',
    skills: [
      { name: 'Generative AI', mono: 'AI' }, { name: 'LLMs', mono: 'LL' }, { name: 'Prompt Engineering', mono: 'PE' },
      { name: 'Groq API', mono: 'Gq' }, { name: 'Llama 3.3', mono: 'L3' }, { name: 'Vector Databases', mono: 'VDB' },
    ],
  },
  {
    id: 'frameworks', title: 'Frameworks & Libraries', subtitle: 'Application development and data science',
    skills: [
      { name: 'React.js', mono: 'Re' }, { name: 'FastAPI', mono: 'Fa' }, { name: 'LangGraph', mono: 'LG' },
      { name: 'LightGBM', mono: 'LGBM' }, { name: 'CatBoost', mono: 'CB' },
      { name: 'Scikit-learn', mono: 'Sk' }, { name: 'Pandas', mono: 'Pd' }, { name: 'NumPy', mono: 'Np' },
      { name: 'Pydantic', mono: 'Py' }, { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'tools', title: 'Tools', subtitle: 'Development environments and platforms',
    skills: [
      { name: 'VS Code', mono: 'VS' }, { name: 'Git', mono: 'Gt' }, { name: 'GitHub', mono: 'GH' },
      { name: 'Jupyter Notebook', mono: 'Jn' }, { name: 'Google Colab', mono: 'Co' }, { name: 'Qdrant Cloud', mono: 'Qd' },
    ],
  },
  {
    id: 'fundamentals', title: 'Core Concepts', subtitle: 'Problem solving and system structure',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'DSA' }, { name: 'OOP', mono: 'OOP' },
      { name: 'DBMS', mono: 'DB' }, { name: 'Operating Systems', mono: 'OS' },
    ],
  },
];
export const skillEvidence: Record<string, string[]> = {
  LightGBM: ['GCI World fellowship: Home Credit default prediction'],
  CatBoost: ['GCI World fellowship: Home Credit default prediction'],
  Python: ['AI Portfolio Chatbot', 'TalentAlign'],
  'C/C++': ['Technical skills'],
  JavaScript: ['AI Portfolio Chatbot', 'Shrinkr'],
  HTML: ['Shrinkr'],
  CSS: ['Shrinkr'],
  SQL: ['Technical skills'],
  'Generative AI': ['AI Portfolio Chatbot', 'TalentAlign', 'JuniorMBA in Artificial Intelligence'],
  LLMs: ['AI Portfolio Chatbot', 'TalentAlign'],
  'Prompt Engineering': ['TalentAlign', 'JuniorMBA in Artificial Intelligence'],
  'Groq API': ['AI Portfolio Chatbot', 'TalentAlign'],
  'Llama 3.3': ['TalentAlign'],
  'Vector Databases': ['VidSage'],
  'React.js': ['VidSage'],
  FastAPI: ['AI Portfolio Chatbot'],
  LangGraph: ['AI and application development'],
  'Scikit-learn': ['Autism Screening Classification'],
  Pandas: ['Autism Screening Classification'],
  NumPy: ['Autism Screening Classification'],
  'Tailwind CSS': ['Portfolio'],
  'Qdrant Cloud': ['VidSage'],
  PyPDF: ['AI Portfolio Chatbot', 'TalentAlign'],
  'python-docx': ['AI Portfolio Chatbot', 'TalentAlign'],
  Figma: ['Design & Data'],
  Canva: ['Design & Data'],
  'Microsoft Excel': ['Introduction to Data Analysis using Excel'],
  'Data Structures & Algorithms': ['Core concepts'],
  OOP: ['Core concepts'],
  DBMS: ['Core concepts'],
  'Operating Systems': ['Core concepts'],
  'Modular System Design': ['Core concepts'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
const crimson = graphitePalette;
const amber = graphitePalette;
const ocean = graphitePalette;
const violet = graphitePalette;
const jade = graphitePalette;
const cream = graphitePalette;

export const seasons: Season[] = [
  {
    number: 1, title: 'Academic Foundations', period: 'Class X â€“ Class XII',
    synopsis: 'Schooling at Royal Academy School and Children Academy Convent School in Alwar, Rajasthan.',
    episodes: [
      { code: 'S01 E01', title: 'Class X', description: 'Completed CBSE Class X with 96.0%. The Pratibha Samman Patra recognized this result.', tags: ['CBSE', '96.0%', 'Pratibha Samman Patra'], runtime: 'Royal Academy School', palette: amber },
      { code: 'S01 E02', title: 'Class XII', description: 'Completed Class XII under the CBSE board with 83.6%.', tags: ['CBSE', '83.6%'], runtime: 'Children Academy Convent School', palette: cream },
      { code: 'S01 E03', title: 'Pratibha Samman Patra 2022', description: 'Awarded by Alwar District Vaishya Mahasammelan Samiti for securing 96.00% in Class 10.', tags: ['Talent Honour Award', 'Academic Excellence'], runtime: '2022', palette: amber },
    ],
  },
  {
    number: 2, title: 'JEE', period: '2025',
    synopsis: 'The entrance examination milestones that opened the way to the next academic chapter.',
    episodes: [
      { code: 'S02 E01', title: 'JEE Main 2025', description: 'Scored 98.9 percentile and CRL 16,788 among 15.39 lakh candidates.', tags: ['98.9 percentile', 'Top 1.1%', 'CRL 16,788'], runtime: '2025', palette: jade },
      { code: 'S02 E02', title: 'JEE Advanced 2025', description: 'Qualified the JEE Advanced examination from the pool of JEE Main selected candidates.', tags: ['JEE Advanced', 'Qualified'], runtime: '2025', palette: cream },
    ],
  },
  {
    number: 3, title: 'Mathematics & Computing', period: '2025 â€“ Present',
    synopsis: 'Pursuing a Bachelor of Technology at Delhi Technological University in New Delhi.',
    episodes: [
      { code: 'S03 E01', title: 'The DTU Chapter', description: 'B.Tech in Mathematics & Computing at Delhi Technological University, with a CGPA of 9.0 / 10.', tags: ['B.Tech', 'Mathematics & Computing', 'CGPA 9.0 / 10'], runtime: '2025 â€“ Present', palette: violet },
    ],
  },
  {
    number: 4, title: 'Core Technical Stack & Learnings', period: 'Technical Skills',
    synopsis: 'A snapshot of the tools, methods, and academic foundations developed through coursework and projects.',
    episodes: [
      { code: 'S04 E01', title: 'Machine Learning & Deep Learning', description: 'Built machine learning and deep learning solutions across structured data, predictive modeling, and neural architectures, from feature design to generative workflows.', tags: ['Feature Engineering', 'Neural Networks', 'Predictive Modeling', 'Generative AI'], runtime: 'Machine Learning', palette: crimson },
      { code: 'S04 E02', title: 'Full-Stack Web Development', description: 'Engineered full-stack applications and client-side tools focused on clean user flows, reliable APIs, and maintainable architecture.', tags: ['Full-Stack Development', 'APIs & Databases', 'System Architecture', 'User Experience'], runtime: 'Web Development', palette: amber },
      { code: 'S04 E03', title: 'Data Structures & Algorithms', description: 'Solved algorithmic challenges using foundational data structures and optimization patterns, emphasizing efficiency, scalability, and clean implementation.', tags: ['Patterns', 'Optimization', 'Scalability', 'C++'], runtime: 'Problem Solving', palette: ocean },
      { code: 'S04 E04', title: 'Core Academic Subjects', description: 'Grounded engineering work in foundational mathematics and computing principles, spanning abstract algebra, real analysis, probability, and system design.', tags: ['Abstract Algebra', 'Real Analysis', 'Probability', 'System Design'], runtime: 'Academic Foundations', palette: violet },
    ],
  },
  {
    number: 5, title: 'Leadership & Recognition', period: '2022 â€“ 2027',
    synopsis: 'Technical leadership with the SSE Junior Council and recognition for academics, leadership, and technical promise.',
    episodes: [
      { code: 'S05 E01', title: 'Technical Design Head', description: 'Technical Design Head, Junior Council, Society of Software Engineering at DTU.', tags: ['SSE', 'Junior Council', 'Leadership'], runtime: '2026 â€“ 2027', palette: ocean },
      ...achievements.filter(award => !['pratibha-samman', 'jee-main'].includes(award.id)).map((award, i) => ({ code: `S05 E0${i + 2}`, title: award.title, description: award.detail, tags: [award.org], runtime: 'Scholarship', palette: [amber, cream][i] })),
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'University', title: 'DTU', detail: 'B.Tech Â· Mathematics & Computing', palette: violet },
  { label: 'Current CGPA', title: '9.0 / 10', detail: 'Delhi Technological University', palette: cream },
  { label: 'JEE Main 2025', title: '98.9', detail: 'Percentile Â· Top 1.1%', palette: jade },
  { label: 'Academic Excellence', title: 'Pratibha Samman Patra 2022', detail: 'Talent Honour Award', palette: amber },
  { label: 'Leadership', title: 'Technical Design Head', detail: 'SSE Junior Council Â· 2026â€“2027', palette: jade },
  { label: 'Fellowship', title: 'Machine Learning Analytics Fellow', detail: 'GCI World Â· Matsuoâ€“Iwasawa Lab, UTokyo', palette: ocean },
  { label: 'Scholarship', title: 'Dell Aspire', detail: 'MSDF-backed merit scholarship', palette: amber },
  { label: 'Scholarship', title: 'Vijay Shekhar Sharma', detail: 'AY 2026â€“27 Â· DTU Golden Pride Function 2026', palette: cream },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education', title: 'Mathematics & Computing',
    lines: [
      `${education[0].school} | ${education[0].place}`,
      `${education[0].degree} | ${education[0].period}`,
      `${education[1].school} | Class XII | ${education[1].score}`,
      `${education[2].school} | Class X | ${education[2].score}`,
    ], chips: [education[0].score],
  },
  {
    kicker: 'Fellowship', title: experience[0].role,
    lines: [experience[0].company, ...experience[0].points],
  },
  {
    kicker: 'Projects', title: 'Selected Builds',
    lines: projects.map((project) => `${project.title} | ${project.logline}`),
    chips: [`${projects.length} projects`],
  },
  {
    kicker: 'Technical Skills', title: 'Tools & Foundations',
    lines: skillCategories.map((category) => `${category.title}: ${category.skills.map((skill) => skill.name).join(' | ')}`),
  },
  {
    kicker: 'Technical Chapter', title: seasons.find((season) => season.number === 4)?.title ?? 'Technical Skills',
    lines: seasons.find((season) => season.number === 4)?.episodes.map((episode) => `${episode.title}: ${episode.description} Tags: ${episode.tags.join(' | ')}`) ?? [],
  },
  {
    kicker: 'Leadership', title: experience[1].role,
    lines: [experience[1].company, ...experience[1].points],
  },
  {
    kicker: 'Recognition', title: 'Achievements & Awards',
    lines: achievements.map((award) => `${award.title} | ${award.detail}`),
  },
  {
    kicker: 'Certifications', title: 'Learning & Credentials',
    lines: certifications.map((certification) => `${certification.name} | ${certification.issuer}${certification.detail ? `: ${certification.detail}` : ''}`),
  },
  { kicker: 'Contact', title: "Let's build", lines: [profile.email, profile.phone, profile.location] },
];
export type ProfileId = 'govind' | 'recruiter' | 'creative';
export type SectionId = 'journey' | 'originals' | 'skills' | 'certifications' | 'picks';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'govind', name: 'Govind', blurb: 'The full series, in order', color: '#FFC928', order: ['picks', 'journey', 'originals', 'skills', 'certifications'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, awards & skills first', color: '#1C1D20', order: ['picks', 'journey', 'originals', 'skills', 'certifications'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#F2F4F1', order: ['picks', 'journey', 'originals', 'skills', 'certifications'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} chapters Â· DTU, projects & leadership`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} AI and web projects`, palette: crimson },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} skill areas`, palette: ocean },
  certifications: { nav: 'Certifications', card: 'Certifications', meta: `${certifications.length} credentials`, palette: amber },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Selected resume highlights', palette: jade },
};

