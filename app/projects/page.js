"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "VOTIFY", description: "Plateforme de vote démocratique", link: "#" },
    { title: "MathJack", description: "Jeu éducatif de Blackjack", link: "#" },
    { title: "Traitement d'images", description: "Modification d’images en C++", link: "#" }
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-white">Mes Projets</h2>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => (
          <motion.div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}