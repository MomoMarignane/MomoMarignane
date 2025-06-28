import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Mohamed Mansour";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pb-16 pt-24 relative overflow-hidden">
      {/* Static background elements for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-2 relative">
            <span className="gradient-text glow-text">
              {text}
              <motion.span
                className="inline-block w-1 h-full bg-cyan-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="glass-card rounded-2xl p-6 mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
            <span className="text-cyan-400">Software Engineer</span> & 
            <span className="text-purple-400"> Architecture Student</span>
          </h2>
          <motion.div
            className="w-full h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mt-4 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 2 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex gap-6 flex-wrap justify-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium overflow-hidden"
            href="#contact"
          >
            <span className="relative z-10">Contact Me</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>
          
          <motion.a
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass border border-white/20 text-white font-medium backdrop-blur-lg hover:border-cyan-400/50 transition-all duration-300"
            href="#projects"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
