export interface TimelineEntry {
  title: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

export const timelineData: TimelineEntry[] = [
  {
    title: "Epitech Marseille – 1st Year",
    period: "2021 - 2022",
    description: "Focused on mastering core programming fundamentals through intensive training in the C language. Developed strong problem-solving skills, algorithmic thinking, and memory management practices through low-level projects.",
    type: "education"
  },
  {
    title: "Reactis",
    period: "Internship • 2022",
    description: "6-month internship at Reactis, where I built an automation platform for Airbus to streamline email-based workflows. Using Python and PostgreSQL, I developed a backend solution that parsed and processed email data, reducing manual effort and improving task tracking efficiency.",
    type: "experience"
  },
  {
    title: "Epitech Marseille – 2nd Year",
    period: "2022 - 2023",
    description: "Transitioned to object-oriented programming with C++. Projects emphasized design patterns, modularity, and deeper software architecture concepts, laying the groundwork for scalable development practices.",
    type: "education"
  },
  {
    title: "Ciril Group",
    period: "Internship • 2024",
    description: "6-month internship at CirilGroup, where I developed sophisticated web scraping solutions for automated data collection from diverse sources. Created Python scripts that improved data processing efficiency by 70% and integrated the extracted data with the company's existing systems.",
    type: "experience"
  },
  {
    title: "Epitech Marseille – 3rd Year",
    period: "2023 - 2024",
    description: "Expanded into full-stack development with exposure to frontend, backend, database systems, cybersecurity, and introductory AI. Projects involved building complete applications, enhancing both technical breadth and team collaboration.",
    type: "education"
  },
  {
    title: "EZ Student Project",
    period: "Academic Project • 2023 - 2025",
    description: "Led the development of a comprehensive web application featuring frontend interfaces, backend services, and AI-powered recommendation engines. Used React for the frontend, Node.js for the backend, and implemented machine learning algorithms to provide personalized user experiences.",
    type: "experience"
  },
  {
    title: "Epitech Marseille – 4th Year (Beijing Jiaotong University)",
    period: "2024 - 2025",
    description: "International academic year in China focused on advanced software engineering, microservices, scalable architectures, and cloud-based systems. Strengthened global perspective and cross-cultural teamwork.",
    type: "education"
 },
  {
    title: "Beijing Jiaotong University",
    period: "2024 - 2025",
    description: "Exchange program focusing on software architecture and advanced programming concepts. Studying distributed systems, AI applications, and enterprise software design.",
    type: "experience"
  }
];
