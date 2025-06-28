import { motion } from "framer-motion";
import SectionTransition from "@/components/ui/SectionTransition";
import InteractiveParticles from "@/components/ui/InteractiveParticles";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 relative overflow-hidden">
      <InteractiveParticles count={6} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTransition>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-20 text-center"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </SectionTransition>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <SectionTransition delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></span>
                  Who I Am
                </motion.h3>
                
                <motion.div 
                  className="space-y-4 text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, staggerChildren: 0.1 }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    5th-year software engineering student at <span className="text-cyan-400 font-medium">Epitech Marseille</span>. 
                    Recently completed a year of international studies at <span className="text-purple-400 font-medium">Beijing Jiaotong University</span> in China, 
                    enhancing both my technical knowledge and global perspective.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    I&apos;m pursuing a master&apos;s degree in <span className="text-cyan-400 font-medium">software engineering</span> and a
                    double degree in <span className="text-purple-400 font-medium">software architecture</span>, combining
                    theoretical knowledge with practical experience.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    My recent internship at <span className="text-cyan-400 font-medium">Ciril Group</span> allowed me to develop
                    advanced web scraping solutions and automate data extraction
                    processes, significantly enhancing my Python and web
                    development skills.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </SectionTransition>

          <SectionTransition delay={0.4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div 
                className="glass-card rounded-2xl p-6 group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h4 className="text-xl font-bold text-cyan-300">Looking For</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>Part-time internship: <span className="text-cyan-400 font-medium">09/15/2025 - 02/28/2026</span></p>
                  <p>Followed by a full-time final year internship until the end of the academic year.</p>
                </div>
              </motion.div>

              <motion.div 
                className="glass-card rounded-2xl p-6 group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <h4 className="text-xl font-bold text-purple-300">Education</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-purple-400 font-medium">Epitech Marseille</span> - Software Engineering</p>
                  <p><span className="text-purple-400 font-medium">Beijing Jiaotong University</span> - Exchange Program</p>
                </div>
              </motion.div>

              <motion.div 
                className="glass-card rounded-2xl p-6 group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <h4 className="text-xl font-bold text-blue-300">Passion</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  With a strong interest in <span className="text-blue-400 font-medium">strategy and problem-solving</span>, from chess to software architecture, 
                  I enjoy building personal projects that explore <span className="text-cyan-400 font-medium">game development</span>, <span className="text-purple-400 font-medium">artificial intelligence</span>, 
                  and innovative digital tools.
                </p>
              </motion.div>
            </motion.div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
}
