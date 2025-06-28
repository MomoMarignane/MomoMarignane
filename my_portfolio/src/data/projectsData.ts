export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export const projectsData: Project[] = [
  {
    title: "AI-Powered Code Generation Platform",
    description:
      "During my internship at Ciril Group, I developed a system to automate the scraping and generation of clean, structured datasets from various websites. Leveraging these datasets, I fine-tuned a language model using Hugging Face, capable of translating natural language instructions into Python code. This end-to-end project combined data engineering, AI training, and real-world application, resulting in a functional prototype that learned from curated examples to generate accurate code outputs.",
    tech: ["Python", "HuggingFace", "Pytorch", "Data Processing"],
    image: "/project1.jpg",
  },
  {
    title: "EZ Project",
    description:
      "A full-stack web application that translates natural language into executable Python code. Built entirely by me, the project integrates a Vue.js frontend, a Python backend, and a fine-tuned language model for code generation. Deployed with Docker, it features a PostgreSQL database and showcases my end-to-end skills in DevOps, backend/API design, frontend development, and AI integration. The goal is to offer a seamless experience that feels like coding by simply speaking or writing in plain English.",
    tech: ["Python", "Vue.js", "Typescript", "Postgres", "HuggingFace"],
    image: "/project2.jpg",
  },
  {
    title: "Survival Horror Game (Unity)",
    description:
      "A 3D survival game developed with Unity and C#, featuring hostile AI enemies in a dynamic and immersive environment. The gameplay challenges players to avoid intelligent threats, supported by atmospheric sound design and tension-building visuals. This project highlights my skills in game development, AI behavior scripting, and interactive environment design.",
    tech: ["Unity", "C#", "NavMesh AI"],
    image: "/project_game.jpg",
  },
  {
    title: "Architecture Project",
    description:
      "Developed during my studies at Beijing Jiaotong University, this project focused on designing and implementing a scalable software system using a microservices architecture. It involved defining clear service boundaries, handling inter-service communication via REST APIs, and managing deployment strategies. The project also covered fault tolerance, load distribution, and system evolution, highlighting key principles of modern distributed systems and clean architectural design.",
    tech: ["Java", "Spring Boot", "Microservices", "Docker", "REST APIs", "PostgreSQL"],
    image: "/project4.jpg",
  },
];
