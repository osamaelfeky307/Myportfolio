// ============================================================
// lib/data.ts — Single source of truth for all portfolio content
// ============================================================

export const PERSONAL = {
  name: "Osama Elfeky",
  initials: "OE",
  title: "Software Engineer & Medical Informatics",
  tagline:
    "Building intelligent software solutions, from AI-powered healthcare diagnostics to scalable web and cross-platform apps.",
  location: "Beheira, Egypt",
  email: "osamaelfeky@ieee.org",
  phone: "+20 106 233 7475",
  linkedin: "https://www.linkedin.com/in/osama-elfeky-952ab7202/",
  github: "https://github.com/osama-elfeky", // placeholder — update if different
  whatsapp: "https://wa.me/qr/J2SRPUH2VRODH1",
  cvLink:
    "https://drive.google.com/file/d/1vSvs5rYiuK1UXwfMfd2WynQ0-4iDoZ0l/view?usp=drive_link",
};

export type ProjectTag =
  | "All"
  | "AI & ML"
  | "Web Apps"
  | "Mobile"
  | "Systems";

export type StatusVariant =
  | "award"
  | "deployed"
  | "research"
  | "completed"
  | "published";

export interface Project {
  id: string;
  title: string;
  description: string;
  categoryLabel: string;
  tags: ProjectTag[];
  status: string;
  statusVariant: StatusVariant;
  techStack: string[];
  evidenceLabel: string;
  evidenceUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "brain-stroke",
    title: "AI Brain Stroke Detection",
    description:
      "An integrated web system connecting patients, doctors, radiology centres, and radiologists. Uses AI-powered analysis of medical images to improve diagnostic speed, reduce medical errors, and enhance healthcare service quality.",
    categoryLabel: "AI & Web",
    tags: ["AI & ML", "Web Apps"],
    status: "🥇 1st Place — 10,000 EGP",
    statusVariant: "award",
    techStack: ["Python", "Medical Imaging", "AI/ML", "Web"],
    evidenceLabel: "Google Drive",
    evidenceUrl:
      "https://drive.google.com/drive/folders/1Ce2XdTLHaSnNDQXwzuyeldnWMRXPkE_V",
  },
  {
    id: "asd-detection",
    title: "Autism Spectrum Disorder ML Detection",
    description:
      "A diagnostic method using Machine Learning to identify Autism Spectrum Disorder, achieving high accuracy across multiple age groups. Authored a technical paper following IEEE Transaction standards.",
    categoryLabel: "ML & Research",
    tags: ["AI & ML"],
    status: "IEEE ESPC — 4th Place",
    statusVariant: "research",
    techStack: ["Python", "Machine Learning", "Data Analysis", "IEEE"],
    evidenceLabel: "IEEE Paper",
    evidenceUrl: "#", // placeholder — add DOI once available
  },
  {
    id: "schools-project",
    title: "The Schools Project",
    description:
      "A web-based application that presents all military educational content for multiple schools through a single unified interface. Pulls real-time data directly from the unit's servers for accuracy.",
    categoryLabel: "Web & Military",
    tags: ["Web Apps"],
    status: "✅ Deployed",
    statusVariant: "deployed",
    techStack: ["Next.js", "React", "PostgreSQL"],
    evidenceLabel: "GitHub",
    evidenceUrl: "#", // placeholder — add repo URL
  },
  {
    id: "commander-gate",
    title: "CommanderGate",
    description:
      "A real-time desktop system for visitor access management between the commander and his secretary. Streamlines check-in workflows and maintains a live log of access events.",
    categoryLabel: "Desktop / Systems",
    tags: ["Systems"],
    status: "✅ Deployed",
    statusVariant: "deployed",
    techStack: ["Python", "Desktop", "Real-time", "Access Control"],
    evidenceLabel: "GitHub",
    evidenceUrl: "#", // placeholder — add repo URL
  },
  {
    id: "nike-eco",
    title: "Nike Eco Shoe Store",
    description:
      "A polished e-commerce mobile application built during a 120-hour intensive ITI Flutter programme. Features product browsing, cart management, and checkout flow.",
    categoryLabel: "Mobile",
    tags: ["Mobile"],
    status: "🎓 ITI Project — 92%",
    statusVariant: "completed",
    techStack: ["Flutter", "Dart", "Firebase"],
    evidenceLabel: "GitHub",
    evidenceUrl: "#", // placeholder — add repo URL
  },
];

export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  link?: string;
  logo?: string;
  secondaryLogo?: string;
  bullets: string[];
}

export interface ExperienceCard {
  id: string;
  heading: string;
  icon: string;
  entries: ExperienceEntry[];
}

export const EXPERIENCE: ExperienceCard[] = [
  {
    id: "leadership",
    heading: "Tech Leadership & Education",
    icon: "users",
    entries: [
      {
        period: "Jun 2026 – Present",
        role: "Field Supervisor",
        org: "eyouth / MCIT — Digital Egypt Cubs Initiative",
        link: "https://drive.google.com/file/d/1C8hZ2altp7jeciJreN7FG7tZTkYXlW/view?usp=sharing",
        logo: "/logos/eyouth.png",
        secondaryLogo: "/logos/mcit.png",
        bullets: [
          "Supervised operations for the Digital Egypt Cubs Initiative, managing and following up with area coordinators.",
          "Maintained strong field presence to monitor workflows and ensure full compliance with quality standards.",
          "Reviewed and approved student attendance records and monitored lecture execution.",
          "Oversaw backup coordinators, dynamically distributing tasks to guarantee operational continuity.",
          "Resolved escalated operational issues and reported workflow progress directly to the Operations Supervisor.",
        ],
      },
      {
        period: "Apr 2026 – May 2026",
        role: "Operations Coordinator",
        org: "eyouth / MCIT — Digital Egypt Cubs Initiative",
        logo: "/logos/eyouth.png",
        secondaryLogo: "/logos/mcit.png",
        bullets: [
          "Coordinated online educational sessions and managed remote student distribution for the Digital Egypt Cubs Initiative.",
          "Tracked online attendance, addressed technical queries, and ensured the successful completion of digital exams and surveys.",
        ],
      },
      {
        period: "Feb 2024 – Jan 2025",
        role: "Supervisor",
        org: "Almentor / MCIT — Digital Egypt Cubs Initiative",
        link: "https://drive.google.com/file/d/1C8hZ2altp7jeciJreN7FG7tZTkYXlW/view?usp=sharing",
        logo: "/logos/Almentor.png",
        secondaryLogo: "/logos/mcit.png",
        bullets: [
          "Supervised on-site coordinators to ensure smooth operations during training.",
          "Managed student attendance, addressed queries, and ensured the completion of exams and surveys.",
          "Coordinated with trainers and managed educational resources efficiently.",
          "Ensured safety and cleanliness standards within training centers.",
        ],
      },
      {
        period: "Jul 2024 – Aug 2024",
        role: "Online Instructor — DEMI Summer Project",
        org: "iSchool Egypt / MCIT — Digital Egypt Cubs Initiative",
        link: "https://drive.google.com/drive/folders/1j-ti3xuTkXdmr1JbyWr4dYD29KWYfaBA?usp=sharing",
        logo: "/logos/ischool.jpg",
        secondaryLogo: "/logos/mcit.png",
        bullets: [
          "Conducted 59 online educational sessions on gaming development.",
          "Engaged students through interactive, Socratic teaching methods.",
          "Provided personalized support and tracked student progress.",
        ],
      },
    ],
  },
  {
    id: "swe-it",
    heading: "Software Engineering & IT Operations",
    icon: "terminal",
    entries: [
      {
        period: "Jan 2025 – Mar 2026",
        role: "IT Soldier — Systems & Information Technology Branch",
        org: "Egyptian Navy (Joint Training Unit)",
        logo: "/logos/egyptian navy.png",
        bullets: [
          "Maintained and troubleshot computers, devices, and the internal network.",
          "Developed The Schools Project — a unified web interface for military educational content pulling real-time data from unit servers.",
          "Built CommanderGate — a real-time desktop access-management system for the commander's office.",
          "Improved internal digital workflow and created smart solutions for the educational process.",
        ],
      },
      {
        period: "Ongoing",
        role: "Freelance Software Developer",
        org: "Independent",
        bullets: [
          "Python automation scripts and data processing pipelines.",
          "PostgreSQL database design and optimisation.",
          "Next.js web applications for local clients.",
        ],
      },
    ],
  },
  {
    id: "volunteering",
    heading: "Volunteering & Community",
    icon: "heart",
    entries: [
      {
        period: "2023 – 2024",
        role: "Section Lead — IEEEXtreme 17.0 & 18.0",
        org: "IEEE Egypt Section",
        logo: "/logos/IEEEXtreme.jpg",
        bullets: [
          "Organized the competition, managed communications, and led the organizing committee.",
          "Ensured compliance with IEEE regulations and promoted the IEEE brand across the section.",
        ],
      },
      {
        period: "2020 – 2023",
        role: "Secretary & PR Member",
        org: "IEEE Benha Student Branch",
        logo: "/logos/IEEE bub sb.png",
        bullets: [
          "Secretary (2021-2023): managed records, organized events, and established partnerships with industry associations.",
          "PR Member (2020): managed social media, wrote newsletters, and promoted the student branch.",
        ],
      },
      {
        period: "Active Member",
        role: "Volunteer",
        org: "Life Makers, Egypt",
        link: "https://drive.google.com/drive/folders/1WLsJgJ3Bg70qfPeciWG1starF-NdHGce?usp=sharing",
        bullets: [
          "Contributed to fundraising efforts and outreach programs, raising funds and awareness for various social causes.",
        ],
      },
    ],
  },
];

export interface EducationItem {
  id: string;
  type: "degree" | "certificate";
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  note?: string;
  link?: string;
  linkLabel?: string;
  highlight?: string;
  logo?: string;
}

export const EDUCATION: EducationItem[] = [
  {
    id: "pisa",
    type: "degree",
    institution: "University of Pisa",
    degree: "MSc — Informatics for Digital Health",
    field: "Medical Informatics",
    period: "Admitted March 2026",
    highlight: "Upcoming",
    note: "Italy",
    logo: "/logos/University_of_Pisa.svg",
  },
  {
    id: "benha",
    type: "degree",
    institution: "Benha University",
    degree: "BSc — Computers & Artificial Intelligence",
    field: "Scientific Computing / Medical Informatics",
    period: "2020 – 2024",
    grade: "GPA 3.11 · 132 Credits",
    link: "https://drive.google.com/file/d/1vSvs5rYiuK1UXwfMfd2WynQ0-4iDoZ0l/view?usp=drive_link",
    linkLabel: "View Transcript",
    note: "Benha, Egypt",
    logo: "/logos/Benha University.png",
  },
  {
    id: "iti",
    type: "certificate",
    institution: "ITI — Information Technology Institute (Menofia)",
    degree: "Flutter Developer Certificate",
    field: "Mobile App Development",
    period: "Jul 2023 – Sep 2023",
    grade: "Final Grade: 92% · 120 hours",
    link: "https://drive.google.com/file/d/1JwHR4z3_T2RnQ6n7Hq31pZbHPVD4s2pp/view?usp=sharing",
    linkLabel: "Verify Certificate",
    note: "Developed Nike Eco Shoe Store app",
    logo: "/logos/ITI Logo.png",
  },
];

export interface SkillCategory {
  number: string;
  heading: string;
  proficiency: "Advanced" | "Comfortable" | "Practicing" | "Methodology";
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    number: "01",
    heading: "Programming",
    proficiency: "Advanced",
    skills: ["Python", "Java", "Dart", "Flutter", "HTML/CSS", "PHP (Basic)", ".NET (Beginner)", "Vite"],
  },
  {
    number: "02",
    heading: "Methodologies",
    proficiency: "Methodology",
    skills: ["SDLC", "Agile", "Project Planning", "System Analysis", "Documentation"],
  },
  {
    number: "03",
    heading: "Mobile & Web",
    proficiency: "Comfortable",
    skills: ["Flutter", "Android Studio", "React", "Next.js"],
  },
  {
    number: "04",
    heading: "Management",
    proficiency: "Leadership",
    skills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Time Management",
      "Project Coordination",
    ],
  },
];

export const STATS = [
  { value: "1st Place", label: "AI Innovations Marathon", sub: "Benha University · 10k EGP" },
  { value: "IEEE", label: "Research Author", sub: "ESPC 2024 · 4th of 27" },
  { value: "Next.js & Flutter", label: "Primary Stack", sub: "Web + Cross-platform" },
  { value: "MSc", label: "Candidate — Univ. of Pisa", sub: "Informatics for Digital Health" },
];
