"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import des icônes pour les compétences
import { FaJs, FaPython, FaJava, FaPhp, FaDatabase, FaDocker, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiMysql, SiOracle, SiCplusplus, SiC, SiSelenium, SiFigma, SiAdobephotoshop, SiBootstrap, SiJquery } from "react-icons/si";

export default function About() {
  return (
    <section className="py-20 text-center space-y-16">
      
      {/* ✅ Titre principal */}
      <motion.h2
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        À Propos de Moi
      </motion.h2>

      {/* ✅ Section Expériences */}
      <div className="max-w-5xl mx-auto">
  <h3 className="text-3xl font-semibold text-blue-400">Expériences</h3>
  <div className="flex justify-center space-x-8 mt-6">
    {[
      { src: "/logos/macdonald.png", alt: "McDonald's" },
      { src: "/logos/novelty.png", alt: "Novelty" },
      { src: "/logos/logo-rgbm.png", alt: "RGBM Développement" }
    ].map((logo, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="p-4 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center"
      >
        <Image src={logo.src} alt={logo.alt} width={100} height={100} className="object-contain" />
      </motion.div>
    ))}
  </div>
</div>

      {/* ✅ Section Compétences */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-6 text-white text-5xl">
  {/* Langages de programmation */}
  {[ 
    { icon: <SiC />, title: "C" }, 
    { icon: <SiCplusplus />, title: "C++" }, 
    { icon: <FaJava />, title: "Java" }, 
    { icon: <FaPython />, title: "Python" }, 
    { icon: <FaJs />, title: "JavaScript" }, 
    { icon: <FaPhp />, title: "PHP" }, 
    { icon: <SiMysql />, title: "MySQL" }, 
    { icon: <SiOracle />, title: "Oracle" }, 
    { icon: <FaDatabase />, title: "JDBC" }, 
    { icon: <FaDocker />, title: "Docker" }, 
    { icon: <FaGitAlt />, title: "GitHub" }, 
    { icon: <FaLinux />, title: "Linux" }, 
    { icon: <SiSelenium />, title: "Selenium" }, 
    { icon: <SiFigma />, title: "Figma" }, 
    { icon: <SiAdobephotoshop />, title: "Photoshop" }, 
    { icon: <SiBootstrap />, title: "Bootstrap" }, 
    { icon: <SiJquery />, title: "jQuery" } 
  ].map(({ icon, title }, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="hover:text-blue-400 transition-all flex flex-col items-center"
    >
      {icon}
      <span className="text-sm mt-2">{title}</span>
    </motion.div>
  ))}
</div>

      {/* ✅ Section Centres d'Intérêt avec Carrousel d'Images */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-blue-400">Centres d'intérêt</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          loop={true}
          modules={[Autoplay]}
          className="mt-6 w-full rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <Image src="/centres-interet/sport.jpg" alt="Sport" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image src="/centres-interet/voyage.jpg" alt="Voyage" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image src="/centres-interet/cinema.jpg" alt="Cinéma" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <Image src="/centres-interet/livre.jpg" alt="Lecture" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </section>
  );
}