"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import des icônes pour les compétences
import { FaJs, FaPython, FaJava, FaPhp, FaDatabase, FaDocker, FaGitAlt, FaLinux, FaHtml5, FaCss3Alt } from "react-icons/fa";
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
          {[ { src: "/logos/macdonald.png", alt: "McDonald's" },
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
      <h3 className="text-3xl font-semibold text-blue-400">Compétences</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-6 text-white text-5xl">
        {[ { icon: <SiC />, title: "C" }, { icon: <SiCplusplus />, title: "C++" }, { icon: <FaJava />, title: "Java" }, { icon: <FaPython />, title: "Python" }, { icon: <FaJs />, title: "JavaScript" }, { icon: <FaPhp />, title: "PHP" }, { icon: <FaHtml5 />, title: "HTML" }, { icon: <FaCss3Alt />, title: "CSS" }, { icon: <SiMysql />, title: "MySQL" }, { icon: <SiOracle />, title: "Oracle" }, { icon: <FaDatabase />, title: "JDBC" }, { icon: <FaDocker />, title: "Docker" }, { icon: <FaGitAlt />, title: "GitHub" }, { icon: <FaLinux />, title: "Linux" }, { icon: <SiSelenium />, title: "Selenium" }, { icon: <SiFigma />, title: "Figma" }, { icon: <SiAdobephotoshop />, title: "Photoshop" }, { icon: <SiBootstrap />, title: "Bootstrap" }, { icon: <SiJquery />, title: "jQuery" }
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

      {/* ✅ Section Centres d'Intérêt avec Carrousel d'Images et Texte Amélioré */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-blue-400">Centres d'intérêt</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2100, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mt-6 w-full rounded-lg shadow-lg"
        >
          {[
            { src: "/centres-interet/natation.jpg", title: "Natation" },
            { src: "/centres-interet/Boxe.jpg", title: "Boxe" },
            { src: "/centres-interet/1984.jpg", title: "Lecture" },
            { src: "/centres-interet/usual.jpg", title: "Cinéma" },
            { src: "/centres-interet/ny.jpg", title: "Voyage" }
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col items-center text-white">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden shadow-xl border-4 border-blue-500"
                >
                  <Image src={item.src} alt={item.title} width={500} height={300} className="rounded-xl object-cover w-[500px] h-[300px]" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-6 text-4xl font-extrabold tracking-wide text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {item.title}
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}