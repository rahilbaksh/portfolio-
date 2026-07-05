import {
  type Project,
  type Experience,
  type Certification,
  type Achievement,
  type SkillCategory,
  type NavItem,
  type SocialLink,
} from "@/types/portfolio";

// ─── Navigation ──────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/rahilbaksh", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rahilbaksh",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:rahilbaksh@gmail.com", icon: "mail" },
];

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  name: "Rahil Baksh",
  role: "AI Engineer • Machine Learning Engineer • Full Stack Developer",
  headline:
    "Building Intelligent AI Systems &\nScalable Full Stack Products.",
  subtext:
    "AI Engineer specializing in LLMs, RAG Systems, Computer Vision, NLP and Full Stack Development.",
  resumeUrl: "/resume.pdf",
};

// ─── About ───────────────────────────────────────────────────
export const about = {
  intro:
    "I'm a B.Tech Computer Science (Data Science) student passionate about Artificial Intelligence, LLMs, Computer Vision, NLP and Full Stack Engineering. I enjoy building production-ready AI systems that solve real-world problems with scalable architectures.",
  education: {
    degree: "B.Tech Computer Science (Data Science)",
    cgpa: "8.0",
  },
  location: "India",
  specializations: [
    "Large Language Models",
    "RAG Systems",
    "Computer Vision",
    "NLP",
    "Full Stack Development",
    "Production AI Systems",
  ],
};

// ─── Experience ──────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "AI/ML Engineer Intern",
    company: "HiLearn Technology",
    period: "2024 — Present",
    highlights: [
      "Built production RAG systems for enterprise document processing",
      "Developed LLM-powered applications with prompt chaining and evaluation",
      "Engineered FastAPI microservices for AI inference pipelines",
      "Implemented face recognition and multimodal mood detection systems",
      "Automated WhatsApp workflows with real-time AI integrations",
    ],
    tags: [
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
      "Groq API",
      "FastAPI",
      "Prompt Engineering",
      "CI/CD",
      "GitHub Actions",
      "Wikipedia Commons API",
      "YouTube API",
      "REST APIs",
    ],
  },
  {
    id: "exp-2",
    role: "Software Developer Intern (Full Stack)",
    company: "HiLearn Technology",
    period: "2024",
    highlights: [
      "Built 16+ page RBAC dashboard with real-time data visualization",
      "Developed full-stack applications with React, Node.js and MongoDB",
      "Implemented RESTful APIs with Express and FastAPI backends",
      "Containerized services with Docker for consistent deployment",
      "Followed Agile/SDLC methodologies with CI/CD pipelines",
    ],
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "Docker",
      "Tailwind CSS",
      "SendGrid",
      "GitHub",
      "REST APIs",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Enterprise Multimodal RAG Chatbot",
    subtitle: "Featured Project",
    description:
      "A production-grade retrieval-augmented generation system that processes enterprise documents with multimodal understanding and delivers precise, context-aware responses.",
    problem:
      "Enterprise teams waste hours searching through hundreds of documents spread across formats — PDFs, images, tables — with no unified intelligent search.",
    solution:
      "Built an end-to-end RAG pipeline with semantic chunking, vector search, prompt chaining, and a React interface — enabling instant, accurate answers from 250+ documents.",
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "HuggingFace",
      "ChromaDB",
      "SentenceTransformers",
      "MongoDB",
      "React",
      "Node.js",
    ],
    features: [
      "Processed 250+ enterprise documents with multimodal parsing",
      "94% semantic search precision with optimized embeddings",
      "Sub-3 second end-to-end query latency",
      "Prompt chaining for complex multi-step reasoning",
      "Containerized deployment with CI/CD pipeline",
      "Reduced document retrieval time by 70%",
    ],
    metrics: [
      { label: "Documents Processed", value: "250+" },
      { label: "Search Precision", value: "94%" },
      { label: "Query Latency", value: "<3s" },
      { label: "Retrieval Improvement", value: "70%" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Multimodal Sentiment Analysis Engine",
    subtitle: "AI/ML",
    description:
      "A production sentiment analysis system combining text, audio, and visual modalities for comprehensive emotion detection with real-time inference.",
    problem:
      "Single-modality sentiment tools miss nuance — sarcasm in text, tone in audio, expressions in video — leading to inaccurate emotion classification.",
    solution:
      "Engineered a multimodal pipeline fusing BERT for text, CNN for images, and audio feature extraction — achieving 89% accuracy with a real-time Streamlit dashboard.",
    techStack: [
      "PyTorch",
      "BERT",
      "CNN",
      "HuggingFace",
      "Streamlit",
      "Python",
    ],
    features: [
      "89% emotion detection accuracy across modalities",
      "Real-time audio emotion recognition pipeline",
      "Live multimodal inference dashboard",
      "BERT-based text sentiment with contextual understanding",
      "CNN-powered facial expression analysis",
    ],
    metrics: [
      { label: "Accuracy", value: "89%" },
      { label: "Modalities", value: "3" },
      { label: "Inference", value: "Real-time" },
    ],
    githubUrl: "#",
    featured: false,
  },
  {
    id: "proj-3",
    title: "SkillBridge Marketplace",
    subtitle: "Full Stack",
    description:
      "A real-time freelance marketplace with live bidding, integrated payments, and instant messaging — built for seamless skill-based transactions.",
    problem:
      "Existing freelance platforms lack real-time interaction — delayed bidding, no live chat, and clunky payment flows create friction for both clients and freelancers.",
    solution:
      "Built a full-stack marketplace with Socket.io for real-time bidding and chat, Razorpay for seamless payments, and JWT-based authentication for security.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Razorpay",
    ],
    features: [
      "Real-time bidding system with live updates",
      "Instant messaging between clients and freelancers",
      "Integrated Razorpay payment processing",
      "JWT-based authentication and authorization",
      "Fully responsive cross-device interface",
    ],
    metrics: [
      { label: "Real-time", value: "Yes" },
      { label: "Payments", value: "Integrated" },
      { label: "Auth", value: "JWT" },
    ],
    githubUrl: "#",
    featured: false,
  },
  {
    id: "proj-4",
    title: "Alexi AI Learning System",
    subtitle: "AI Product",
    description:
      "An intelligent tutoring system combining GPT-4o, face recognition, mood detection, and WhatsApp automation for personalized, adaptive learning.",
    problem:
      "Traditional e-learning is one-size-fits-all — no attendance tracking, no emotional awareness, and no personalized intervention when students disengage.",
    solution:
      "Created an AI tutor powered by GPT-4o-mini with face recognition attendance, Whisper-based voice interaction, mood detection for adaptive responses, and Twilio WhatsApp alerts.",
    techStack: [
      "GPT-4o-mini",
      "Flask",
      "Face Recognition",
      "Whisper",
      "Twilio",
      "Python",
    ],
    features: [
      "AI Tutor with personalized, context-aware responses",
      "Real-time mood detection for adaptive teaching",
      "Face recognition-based automatic attendance",
      "WhatsApp alerts for engagement and notifications",
      "Voice interaction via OpenAI Whisper",
    ],
    metrics: [
      { label: "AI Model", value: "GPT-4o" },
      { label: "Modalities", value: "4" },
      { label: "Automation", value: "WhatsApp" },
    ],
    githubUrl: "#",
    featured: false,
  },
];

// ─── Skills ──────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code-2",
    skills: ["Python", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    skills: [
      "PyTorch",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "LLMs",
      "MCP",
      "Groq API",
      "Whisper",
      "BERT",
      "CNN",
      "FastAPI",
      "Flask",
      "Scikit-learn",
      "Computer Vision",
      "OpenCV",
      "NLP",
      "Embeddings",
      "Semantic Search",
      "ChromaDB",
      "Sentence Transformers",
    ],
  },
  {
    title: "Full Stack",
    icon: "layers",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: "container",
    skills: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Railway",
      "Git",
      "Linux",
    ],
  },
];

// ─── Certifications ─────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Deep Learning Fundamentals",
    issuer: "IBM",
  },
  {
    id: "cert-2",
    title: "Generative AI",
    issuer: "Google Cloud",
  },
  {
    id: "cert-3",
    title: "Python Certification",
    issuer: "Infosys Springboard",
  },
];

// ─── Achievements ────────────────────────────────────────────
export const achievements: Achievement[] = [
  { value: 250, suffix: "+", label: "Documents Indexed" },
  { value: 94, suffix: "%", label: "Search Precision" },
  { value: 89, suffix: "%", label: "Emotion Detection Accuracy" },
  { value: 70, suffix: "%", label: "Faster Retrieval" },
  { value: 16, suffix: "+", label: "Dashboard Pages" },
];
