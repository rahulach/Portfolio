export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "mental-health-simulator",
    title: "Mental Health Simulator",
    description: "A console-based mental health assistant in Java that allows users to track moods and receive personalized motivational support.",
    longDescription: "Built a console-based mental health assistant in Java that allows users to track moods and receive personalized motivational support. Implemented features including mood input, motivational quotes, calming activity suggestions, and an integrated countdown timer.",
    technologies: ["Java", "OOP", "Console-based UI", "File Handling", "Thread/Timer"],
    achievements: [
      "Built a console-based mental health assistant in Java",
      "Implemented features including mood input, motivational quotes, and calming activity suggestions",
      "Enabled persistent user history storage using file handling",
      "Integrated a countdown timer for activities"
    ],
    image: "/images/mental.png",
    github: "https://github.com/rahulach/Mental-Health-Simulator",
    featured: true,
  },
  {
    id: "astrology-astronomy-app",
    title: "Astrology and Astronomy Application",
    description: "An interactive astronomy chatbot using Python to answer astronomy-related queries and simplify complex concepts.",
    longDescription: "Built an interactive astronomy chatbot using Python to answer astronomy-related queries, simplify complex concepts, and enhance user learning. Implemented keyword-based intent detection with a structured conversation flow for accurate responses.",
    technologies: ["Python", "NLP", "Tkinter", "JSON"],
    achievements: [
      "Built an interactive astronomy chatbot using Python",
      "Implemented keyword-based intent detection with a structured conversation flow",
      "Designed a user-friendly interaction system for smooth communication",
      "Provided engaging educational content to simplify complex concepts"
    ],
    image: "/images/astro.png",
    github: "https://github.com/rahulach/Astrology-and-Astronomy-Chatbot",
    featured: true,
  },
  {
    id: "secure-file-management",
    title: "Secure File Management System",
    description: "A secure desktop-based file management system developed using Python that ensures safe storage, access, and sharing of files.",
    longDescription: "A secure desktop-based file management system developed using Python that ensures safe storage, access, and sharing of files through multi-layered security mechanisms. The system integrates authentication, encryption, and threat detection to prevent unauthorized access and malicious file handling.",
    technologies: ["Python", "Tkinter", "hashlib", "json", "os", "Fernet"],
    achievements: [
      "Implemented real-time threat detection before file upload",
      "Designed a secure storage system with encryption-first approach",
      "Built a user-friendly GUI for seamless navigation",
      "Simulated malware and buffer overflow detection"
    ],
    image: "/images/SFM_IMG.png",
    github: "https://github.com/vikas5172/Secure-File-Management-System",
    featured: true,
  },
  {
    id: "road-accident-dashboard",
    title: "Road Accident Data Analysis Dashboard",
    description: "An interactive data analysis dashboard built entirely in Microsoft Excel to analyze road accident data and extract meaningful insights.",
    longDescription: "An interactive data analysis dashboard built entirely in Microsoft Excel to analyze road accident data and extract meaningful insights such as accident trends, severity distribution, and location-based patterns. The project focuses on leveraging Excel’s built-in capabilities for data cleaning, analysis, and visualization.",
    technologies: ["Microsoft Excel", "Pivot Tables", "Slicers", "Excel Formulas", "Data Cleaning"],
    achievements: [
      "Built a fully dynamic dashboard without any external tools",
      "Used advanced Excel formulas for data transformation and insights",
      "Enabled user-driven filtering for better decision-making",
      "Demonstrates strong skills in data analysis using spreadsheets"
    ],
    image: "/images/road.png",
    liveUrl: "https://www.linkedin.com/posts/rahul-acharya-028779298_dataanalytics-exceldashboard-datavisualization-activity-7318370915539394560-90kj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgER-AB9L3EoI3T6lJP1rFN3PivUQUB8tI",
    featured: true,
  },
  {
    id: "airline-data-dashboard",
    title: "Airline Data Dashboard",
    description: "A business intelligence dashboard built using Power BI to analyze airline operations, including passenger trends, revenue insights, and flight performance.",
    longDescription: "A business intelligence dashboard built using Power BI to analyze airline operations, including passenger trends, revenue insights, and flight performance. The dashboard provides a clear and interactive way to explore airline data using Power BI’s native capabilities.",
    technologies: ["Power BI", "DAX", "Data Modeling", "Dashboard Design"],
    achievements: [
      "Designed a fully interactive BI dashboard using only Power BI features",
      "Implemented DAX for custom calculations and KPIs",
      "Created user-friendly visualizations for business insights",
      "Focused on clean UI/UX for better data storytelling"
    ],
    image: "/images/airline.png",
    liveUrl: "https://www.linkedin.com/posts/rahul-acharya-028779298_powerbi-dataanalytics-dashboarddesign-activity-7406704773309067264-twYC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgER-AB9L3EoI3T6lJP1rFN3PivUQUB8tI",
    featured: true,
  }
];
