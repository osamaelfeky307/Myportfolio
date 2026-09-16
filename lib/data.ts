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
  github: "https://github.com/osamaelfeky307",
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
  photos?: string[];
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
        period: "Oct 2023",
        role: "Egypt Section Lead — IEEEXtreme 17.0",
        org: "IEEE Egypt Section",
        logo: "/logos/IEEEXtreme.jpg",
        bullets: [
          "Led a 51-person organizing team — 28 ambassadors and 23 volunteers — supporting 123 participating teams nationwide.",
          "Organized the full competition lifecycle: logistics, communications, and day-of execution across the Egypt Section.",
          "Headed the organizing committee, coordinating all moving parts and ensuring smooth collaboration between team members.",
          "Ensured strict compliance with IEEE regulations and upheld competition integrity throughout.",
          "Showcased the talent of Egyptian programmers on a global stage and promoted the IEEE brand through a successful, high-engagement event.",
        ],
        photos: [
          "/photos/IEEE/IEEEXtreme%202023/10.jpg",
          "/photos/IEEE/IEEEXtreme%202023/35.jpg",
          "/photos/IEEE/IEEEXtreme%202023/36.jpg",
          "/photos/IEEE/IEEEXtreme%202023/45.jpg",
          "/photos/IEEE/IEEEXtreme%202023/472712532_904548375171010_4124694494272602560_n.jpg",
          "/photos/IEEE/IEEEXtreme%202023/472744308_904548108504370_1044602280217114647_n.jpg",
          "/photos/IEEE/IEEEXtreme%202023/8.png",
          "/photos/IEEE/IEEEXtreme%202023/image.png",
        ],
      },
      {
        period: "Oct 2024",
        role: "Egypt Section Lead — IEEEXtreme 18.0",
        org: "IEEE Egypt Section",
        logo: "/logos/IEEEXtreme.jpg",
        bullets: [
          "Selected for a second consecutive year as Egypt Section Lead — a recognition of the success of the previous edition.",
          "Led an expanded 55-person team — 35 ambassadors and 20 volunteers — across 126 participating teams from 80+ Egyptian universities and student branches.",
          "Organized the competition end-to-end: planning, inter-branch communications, and full operational management.",
          "Led the organizing committee and ensured full compliance with IEEE regulations across an even larger, more complex nationwide event.",
        ],
        photos: [
          "/photos/IEEE/IEEEXtreme%202024/4F0A0365.JPG",
          "/photos/IEEE/IEEEXtreme%202024/4F0A0433.JPG",
          "/photos/IEEE/IEEEXtreme%202024/4F0A0440.JPG",
          "/photos/IEEE/IEEEXtreme%202024/4F0A0458.JPG",
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
        photos: [
          "/photos/IEEE/IEEE%20BUB%202023%20opening/488645434_29647435468176921_901130112258781550_n.jpg",
          "/photos/IEEE/IEEE%20BUB%202023%20opening/488685509_29647435208176947_2590513308802882330_n.jpg",
          "/photos/IEEE/IEEE%20BUB%202023%20opening/488964602_29647435281510273_762860772581035193_n.jpg",
          "/photos/IEEE/IEEE%20BUB%20closing%202022/487980808_29625551367031998_4690002575883972712_n.jpg",
          "/photos/IEEE/IEEE%20BUB%20closing%202022/488260891_29625551273698674_3238729052651223605_n.jpg",
          "/photos/IEEE/IEEE%20BUB%20closing%202022/488524440_29625551373698664_466540010010591764_n.jpg",
          "/photos/IEEE/IEEE%20BUB%20closing%202022/488603631_29625551543698647_5577413905148143063_n.jpg",
          "/photos/IEEE/IEEE%20BUB%20closing%202022/488861283_29625551343698667_1587244615956320684_n.jpg",
          "/photos/IEEE/Ghostech/481258163_1085489040271829_5100716681277175155_n.jpg",
          "/photos/IEEE/Ghostech/481266763_1085219690298764_6717328087499865185_n.jpg",
          "/photos/IEEE/Ghostech/481302019_1085219630298770_2326087848327977302_n.jpg",
          "/photos/IEEE/Ghostech/481337527_1085225996964800_2274634445877971079_n.jpg",
          "/photos/IEEE/Ghostech/481512221_1085219676965432_8144787901119538878_n.jpg",
          "/photos/IEEE/Ghostech/481571674_1085219720298761_1200232532292325693_n.jpg",
          "/photos/IEEE/Ghostech/482241079_1085219416965458_8685004060344909979_n.jpg",
          "/photos/IEEE/Mind%20game%20-%202022/487944717_29607095308877604_9128346046789501882_n.jpg",
          "/photos/IEEE/Mind%20game%20-%202022/488035464_29607104642210004_2250542987783792997_n.jpg",
          "/photos/IEEE/Mind%20game%20-%202022/488261628_29607095325544269_3249869337189868220_n.jpg",
          "/photos/IEEE/Mind%20game%20-%202022/488459932_29610846328502502_3060237644078627842_n.jpg",
          "/photos/IEEE/Mind%20game%20-%202022/488673450_29607108665542935_3976378299794905792_n.jpg",
          "/photos/IEEE/Portal%20-%20beyond%20now/474760956_1058840406270026_8363974067718228005_n.jpg",
          "/photos/IEEE/Portal%20-%20beyond%20now/474810162_1058840669603333_5093622283940698607_n.jpg",
          "/photos/IEEE/Portal%20out%20of%20time%202022/481296738_29396458666607937_4281056310916687077_n.jpg",
          "/photos/IEEE/Portal%20out%20of%20time%202022/483511226_29396461203274350_3686005266575893585_n.jpg",
          "/photos/IEEE/Portal%20out%20of%20time%202022/483523875_29396456346608169_2033905929613795799_n.jpg",
          "/photos/IEEE/Portal%20out%20of%20time%202022/483525513_29396458776607926_7886567094356779951_n.jpg",
        ],
      },
      {
        period: "2020 – 2024",
        role: "Different Roles & Highlights",
        org: "IEEE Benha Student Branch",
        logo: "/logos/IEEE bub sb.png",
        bullets: [
          "Took on various leadership and operational roles across multiple IEEE events and initiatives.",
        ],
        photos: [
          "/photos/IEEE/different%20roles/472738256_908052024820645_5929518522484023623_n.jpg",
          "/photos/IEEE/different%20roles/480976048_8872308406225564_3210987777397410489_n.jpg",
          "/photos/IEEE/different%20roles/481223138_3113052045502677_7254621139956986820_n.jpg",
          "/photos/IEEE/different%20roles/488926726_29645021861751615_5278344752591858771_n.jpg",
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
  proficiency: "Advanced" | "Comfortable" | "Practicing" | "Methodology" | "Leadership";
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

];
