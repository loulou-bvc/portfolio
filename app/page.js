"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Contact from "./components/Contact";
import CV from "./components/CV";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-16 space-y-20">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto mt-16 space-y-10 md:space-y-0">
        
        {/* Texte de présentation */}
        <div className="text-left space-y-6">
          <motion.h1
            className="text-5xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Salut, je suis <span className="text-blue-500">Loup-Djabril</span> 👋
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-400 mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Développeur Full-Stack passionné par le Web et l’Innovation. <br />
            J’aime créer des expériences digitales modernes et performantes.
          </motion.p>
        </div>

        {/* Image de profil arrondie */}
        <motion.div
  className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  <Image
    src="/cv.jpg"
    alt="Photo de profil"
    width={400}
    height={400}
    className="w-full h-auto rounded-lg"
  />
</motion.div>
      </section>

      {/* Sections restantes */}
      <CV />
      <Contact />
    </main>
  );
}