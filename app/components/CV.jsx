"use client";
import { motion } from "framer-motion";

export default function CV() {
  return (
    <section id="cv" className="py-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-white">Mon CV</h2>
      <p className="text-gray-400 mt-4">Vous pouvez consulter mon CV ci-dessous ou le télécharger.</p>
      
      {/* Aperçu du CV */}
      <div className="flex justify-center mt-6">
        <iframe
          src="/cv.pdf"
          width="80%"
          height="500px"
          className="border border-gray-700 rounded-lg"
        ></iframe>
      </div>

      {/* Bouton de téléchargement */}
      <div className="mt-6">
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
        >
          Télécharger le CV
        </a>
      </div>
    </section>
  );
}