import { motion } from "framer-motion";
import { useState } from "react";
import { Project, projectsData } from "@/data/projectsData";
import SectionTransition from "@/components/ui/SectionTransition";
import InteractiveParticles from "@/components/ui/InteractiveParticles";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 relative overflow-hidden">
      <InteractiveParticles count={20} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionTransition>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-20 text-center"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project: Project, index: number) => (
            <SectionTransition key={project.title} delay={index * 0.1}>
              <motion.div
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
                  animate={{
                    rotate: hoveredProject === index ? 360 : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredProject === index ? Infinity : 0,
                    ease: "linear"
                  }}
                />

                <div className="relative glass-card rounded-3xl p-6 overflow-hidden h-full flex flex-col">
                  {/* Header */}
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                      animate={{
                        background: hoveredProject === index 
                          ? "linear-gradient(135deg, rgba(0,255,255,0.3), rgba(168,85,247,0.3))"
                          : "linear-gradient(135deg, rgba(0,255,255,0.1), rgba(168,85,247,0.1))"
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <motion.h3
                        className="text-2xl font-bold text-white text-center px-4 py-2 glass rounded-lg border border-white/20"
                        whileHover={{ scale: 1.05 }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {project.title}
                      </motion.h3>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <motion.p 
                      className="text-gray-300 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full glass border border-cyan-400/30 text-cyan-300"
                          whileHover={{
                            scale: 1.1,
                            borderColor: "rgba(0, 255, 255, 0.8)",
                            boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)"
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      className="group flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 self-start font-medium"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Project</span>
                      <motion.svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
