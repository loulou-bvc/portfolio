"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">À propos</h2>
        <p className="text-gray-400 mt-4">
          Étudiant en BUT Informatique, passionné par le développement web et les technologies modernes.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <motion.span className="bg-blue-500 text-white px-4 py-2 rounded-lg" whileHover={{ scale: 1.1 }}>
            JavaScript
          </motion.span>
          <motion.span className="bg-blue-500 text-white px-4 py-2 rounded-lg" whileHover={{ scale: 1.1 }}>
            React
          </motion.span>
          <motion.span className="bg-blue-500 text-white px-4 py-2 rounded-lg" whileHover={{ scale: 1.1 }}>
            Next.js
          </motion.span>
          <motion.span className="bg-blue-500 text-white px-4 py-2 rounded-lg" whileHover={{ scale: 1.1 }}>
            Laravel
          </motion.span>
        </div>
      </div>
    </motion.section>
  );
}