"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-8 py-5 z-50 backdrop-blur-lg transition-all duration-300 font-sans tracking-wide ${
        scrolling ? "bg-gray-900/80 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400">
            Accueil
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 text-white text-lg">
          <Link href="/about" className="hover:text-blue-400 transition-all duration-300">À propos</Link>
          <Link href="/projects" className="hover:text-blue-400 transition-all duration-300">Projets</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-all duration-300">Contact</Link>
        </div>

        {/* Menu Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-3xl">
          ☰
        </button>
      </div>

      {/* Menu Mobile (Affichage conditionnel) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900/90 p-6 flex flex-col items-center md:hidden space-y-4">
          <Link href="/" className="py-2 text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/about" className="py-2 text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>À propos</Link>
          <Link href="/projects" className="py-2 text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Projets</Link>
          <Link href="/contact" className="py-2 text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </motion.nav>
  );
}
