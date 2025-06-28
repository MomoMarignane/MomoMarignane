import { motion } from "framer-motion";
import { timelineData, TimelineEntry } from "@/data/timelineData";

export default function EducationSection() {
  return (
    <section
      id="education"
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
          <span className="text-cyan-400">Education</span> & Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line - visible on tablet and up */}
          <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 hidden sm:block"></div>

          <div className="space-y-12 sm:space-y-16">
            {timelineData.map((item: TimelineEntry, index: number) => (
              <TimelineItem 
                key={item.title}
                item={item} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const isEducation = item.type === "education";
  const gradientColors = isEducation
    ? "from-blue-600/20 to-cyan-600/20"
    : "from-purple-600/20 to-pink-600/20";
  
  const dotColors = isEducation
    ? "from-cyan-500 to-blue-500"
    : "from-purple-500 to-pink-500";
  
  const textColor = isEducation ? "text-cyan-400" : "text-purple-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`
        relative pl-8 
        ${isEven 
          ? "sm:pl-0 sm:ml-0 sm:mr-auto sm:w-1/2 sm:pr-8" 
          : "sm:pl-8 sm:ml-auto sm:mr-0 sm:w-1/2"}
      `}
    >
      {/* Timeline dot */}
      <div 
        className={`
          absolute top-0 
          ${isEven
            ? "left-0 sm:left-auto sm:right-0 transform translate-x(-50%) sm:translate-x(50%)"
            : "left-0 sm:left-0 transform translate-x(-50%) sm:translate-x(-50%)"}
          w-8 h-8 rounded-full 
          bg-gradient-to-r ${dotColors} 
          flex items-center justify-center
        `}
      >
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>

      <div className={`bg-gradient-to-br ${gradientColors} p-1 rounded-xl`}>
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            {item.title}
          </h3>
          <p className={`${textColor} mb-2`}>{item.period}</p>
          <p className="text-gray-300">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
