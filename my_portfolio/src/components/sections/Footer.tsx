import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; 2025 Mohamed Mansour. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Software Engineer & Architecture Student
        </p>

        {/* Scroll to top button */}
        <motion.a
          href="#"
          whileHover={{ y: -4 }}
          className="inline-block mt-4 p-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
}
