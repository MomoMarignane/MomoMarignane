import { motion } from "framer-motion";
import { Skill, skillsData } from "@/data/skillsData";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-black/0 via-blue-900/10 to-black/0"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center text-white"
        >
          Technical <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillsData.map((skill: Skill, index: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-1 rounded-lg"
            >
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-medium text-white">
                    {skill.name}
                  </h3>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
