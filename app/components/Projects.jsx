"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Projet 1", description: "Description du projet 1", link: "#" },
    { title: "Projet 2", description: "Description du projet 2", link: "#" },
    { title: "Projet 3", description: "Description du projet 3", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-white">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <a href={project.link} className="text-blue-400 mt-4 block">Voir plus →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}