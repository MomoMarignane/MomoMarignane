import { motion } from "framer-motion";
import { useState, useCallback, memo } from "react";
import { Project, projectsData } from "@/data/projectsData";
import SectionTransition from "@/components/ui/SectionTransition";
import InteractiveParticles from "@/components/ui/InteractiveParticles";

// Optimized Project Card Component
const ProjectCard = memo(({ project, index, hoveredProject, setHoveredProject }: {
  project: Project;
  index: number;
  hoveredProject: number | null;
  setHoveredProject: (index: number | null) => void;
}) => {
  const handleMouseEnter = useCallback(() => setHoveredProject(index), [index, setHoveredProject]);
  const handleMouseLeave = useCallback(() => setHoveredProject(null), [setHoveredProject]);

  return (
    <SectionTransition delay={index * 0.1}>
      <motion.div
        className="group relative project-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        style={{ willChange: 'transform' }}
      >
        <div className="relative glass-card rounded-3xl p-6 overflow-hidden h-full flex flex-col">
          {/* Optimized Header */}
          <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
            <div 
              className={`absolute inset-0 transition-all duration-300 ${
                hoveredProject === index 
                  ? 'bg-gradient-to-br from-cyan-500/30 to-purple-500/30'
                  : 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
              }`}
              style={{ willChange: 'background' }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.h3
                className="text-2xl font-bold text-white text-center px-4 py-2 glass rounded-lg border border-white/20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                {project.title}
              </motion.h3>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow flex flex-col">
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Optimized Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full glass border border-cyan-400/30 text-cyan-300 tech-badge"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Optimized Action Button */}
            <motion.button
              className="group flex items-center gap-2 text-cyan-400 hover:text-white transition-colors duration-300 self-start font-medium"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span>View Project</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </SectionTransition>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 relative overflow-hidden">
      <InteractiveParticles count={6} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionTransition>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-20 text-center"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project: Project, index: number) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
