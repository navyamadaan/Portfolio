export const stack = [
  'PYTHON', 'JAVASCRIPT', 'TYPESCRIPT', 'SQL', 'TENSORFLOW', 'PYTORCH',
  'LANGCHAIN', 'STREAMLIT', 'FIREBASE', 'MERN STACK', 'DOCKER', 'FASTAPI',
  'TAILWIND CSS', 'MACHINE LEARNING'
];

export const experience = [
  {
    role: 'VP of Academics & Equity',
    company: 'Sheridan Student Union',
    meta: null,
    logo: '/logos/ssu.png',
    bullets: [
      'Represent student academic interests and equity initiatives across campus',
      'Collaborate with faculty and administration on academic policy',
      'Lead equity-focused programming for the student body'
    ],
    tags: ['Leadership', 'Advocacy', 'Student Government']
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Sheridan TechBiz Society',
    meta: null,
    logo: '/logos/sheridan.jpeg',
    bullets: [
      'Built and maintained full-stack features using React and Next.js',
      'Collaborated with a team through Git version control',
      'Shipped JavaScript-driven UI and functionality end to end'
    ],
    tags: ['React', 'Next.js', 'JavaScript', 'Git']
  },
  {
    role: 'Guest Services Supervisor',
    company: 'Pilot Flying J',
    meta: 'Full-time · Promoted from Cash Department Head',
    logo: '/logos/pilot.jpeg',
    bullets: [
      'Supervise guest services operations and lead a team on shift',
      'Promoted from Cash Department Head after demonstrating strong leadership',
      'Balance full-time supervisory work with a full course load'
    ],
    tags: ['Leadership', 'Operations', 'Team Management']
  }
];

export const involvement = [
  {
    role: 'Member',
    company: 'GDSC — Google Developer Student Club',
    meta: null,
    bullets: [
      "Engaging with Google's developer community and cutting-edge tech",
      'Collaborated in hackathon to build innovative solutions',
      'Workshops on Google Cloud, Firebase, and Android'
    ],
    tags: ['Google Cloud', 'Firebase', 'Android']
  },
  {
    role: 'Student Advisor',
    company: 'Career Integrated Learning Student Advisory Group, Sheridan College',
    meta: 'Sep 2024 - Apr 2025 · 8 mos',
    bullets: [
      "Attended weekly meetings and provided Sheridan's Career Integrated Learning Services department with constructive feedback on current and future programming from the student lens",
      'Engaged in virtual meetings over MS Teams, demonstrating active listening, communication, and critical thinking with fellow advisory group members'
    ],
    tags: ['Advisory', 'Communication', 'Critical Thinking']
  },
  {
    role: 'Team Member',
    company: 'Sheridan Comp Sci. in Business Society',
    meta: 'Sep 2024 - Present · 2 yrs',
    bullets: [
      'Active member contributing to society initiatives and events',
      'Competed in the SCSBS Case Study Cycle: Data & Cloud Challenge'
    ],
    tags: ['Community', 'Case Studies']
  },
  {
    role: 'Winner — SCSBS Case Study Cycle: Data & Cloud Challenge',
    company: 'Sheridan Computer Science in Business Society (SCSBS)',
    meta: 'Mar 2025',
    bullets: [
      'Awarded first place for delivering an innovative solution to a real-world business case involving data analytics and cloud computing',
      'Demonstrated strong analytical thinking, problem-solving, teamwork, and data-driven decision-making in a competitive case study environment'
    ],
    tags: ['Data Analytics', 'Cloud Computing', 'Teamwork']
  }
];

export const projects = [
  {
    title: 'SwiftParkAI — AI-Powered Smart Parking Platform',
    category: 'development',
    period: 'Jun 2026 – Aug 2026',
    images: ['/projects/swift1.jpeg', '/projects/swift2.png', '/projects/swift3.png'],
    visual: 'React · Node.js · Gemini API',
    glow: 'var(--blue)',
    desc: 'An end-to-end smart parking system for mall operations — ESP32 sensors stream live occupancy through an Express/MongoDB pipeline to a React dashboard in under 5 seconds, with K-Means clustering, a Gemini-powered Q&A assistant, and a full Recharts analytics suite, deployed on Vercel and Render.',
    tags: ['React', 'ESP32/IoT', 'Gemini API', 'MongoDB'],
    githubUrl: 'https://github.com/navyamadaan/SwiftParkAI-FullStack-Data-Analytics'
  },
  {
    title: 'Agentic-RAG Attrition CoPilot',
    category: 'ai-ml',
    period: null,
    images: ['/projects/agentic1.jpeg', '/projects/agentic2.jpeg'],
    visual: 'LangChain · XGBoost · ChromaDB',
    glow: 'var(--purple)',
    desc: 'A decision support system for IBM HR that blends a predictive XGBoost attrition model with an Agentic-RAG layer — built with LangChain and ChromaDB — so an autonomous agent can query internal HR policy docs and generate compliant retention plans, deployed on Streamlit Cloud.',
    tags: ['XGBoost', 'LangChain', 'ChromaDB', 'Streamlit'],
    githubUrl: 'https://github.com/navyamadaan/Agentic-RAG-Attrition-Copilot'
  },
  {
    title: 'Customer Lifetime Value Analysis (CLV)',
    category: 'data-science',
    period: null,
    images: ['/projects/clv1.png', '/projects/clv2.png'],
    visual: 'Power BI · Customer Segmentation',
    glow: 'var(--teal)',
    desc: 'Analyzes retail transaction data to estimate Customer Lifetime Value, segment customers by purchasing behavior, and surface churn and retention insights through an interactive Power BI dashboard.',
    tags: ['Power BI', 'Customer Segmentation', 'Retail Analytics'],
    githubUrl: 'https://github.com/navyamadaan/Customer_Lifetime_Value_Analysis'
  },
  {
    title: 'Real-Time Fraud Analytics System',
    category: 'ai-ml',
    period: null,
    images: ['/projects/fraud1.jpeg', '/projects/fraud2.png', '/projects/fraud3.png'],
    visual: 'Isolation Forest · SHAP · FastAPI',
    glow: 'var(--teal)',
    desc: 'An end-to-end fraud detection pipeline simulating real-time transaction monitoring — an Isolation Forest model catches patterns like impossible-travel and card-testing velocity attacks with 94% recall, explained per-transaction with SHAP, and served through FastAPI + Streamlit in a one-command Docker deployment.',
    tags: ['Isolation Forest', 'SHAP', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/navyamadaan/Real-Time-Fraud-Analytics-System'
  },
  {
    title: 'Autonomous Driving Perception System',
    category: 'ai-ml',
    period: null,
    images: ['/projects/drive1.gif', '/projects/drive2.gif', '/projects/drive3.jpeg'],
    visual: 'YOLOv8 · ByteTrack · MiDaS',
    glow: 'var(--purple)',
    desc: 'A real-time perception pipeline for autonomous driving — combining YOLOv8 object detection, ByteTrack multi-object tracking, and MiDaS monocular depth estimation to detect, track, and estimate distance to objects from a single camera feed.',
    tags: ['YOLOv8', 'ByteTrack', 'MiDaS'],
    githubUrl: 'https://github.com/yourhandle/driving-perception'
  },
  {
    title: 'Snake — C# Console Game',
    category: 'development',
    period: null,
    images: ['/projects/snake1.jpeg', '/projects/snake2.jpg'],
    visual: 'C# · Console App',
    glow: 'var(--blue)',
    desc: 'A classic Snake game built as a C# console application, handling real-time input, grid-based movement, collision detection, and score tracking entirely in the terminal.',
    tags: ['C#', 'Console App', 'Game Dev'],
    githubUrl: 'https://github.com/navyamadaan/Snake-Asset-Game'
  }
];

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'development', label: 'Development' },
  { id: 'data-science', label: 'Data Science' }
];

export const navLinks = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'involvement', label: 'involvement' },
  { id: 'contact', label: 'contact' }
];
