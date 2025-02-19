"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaJs, FaReact, FaPython, FaPhp, FaFigma, FaDocker, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

function ImageEditor() {
    const [image, setImage] = useState(null);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [invert, setInvert] = useState(0);
    const [opacity, setOpacity] = useState(100);
    const [rotate, setRotate] = useState(0);
    const [grayscale, setGrayscale] = useState(0);
    const canvasRef = useRef(null);
    const imgRef = useRef(null);
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => setImage(reader.result);
        reader.readAsDataURL(file);
      }
    };
  
    const downloadImage = () => {
      if (!image) return;
  
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = imgRef.current;
  
      if (!canvas || !ctx || !img) return;
  
      // Définir la taille du canvas selon l'image
      canvas.width = img.width;
      canvas.height = img.height;
  
      // Appliquer les filtres sur le contexte du canvas
      ctx.filter = `
        brightness(${brightness}%)
        contrast(${contrast}%)
        invert(${invert}%)
        opacity(${opacity}%)
        grayscale(${grayscale}%)
      `;
  
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotate * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2, img.width, img.height);
  
      // Créer un lien de téléchargement
      const link = document.createElement("a");
      link.download = "edited-image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  
    return (
      <div className="text-center p-6 bg-gray-900 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-white">Éditeur d'Images</h3>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer" />
  
        {image && (
          <>
            {/* Aperçu de l'image avec filtres */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-[500px] h-[350px] border-4 border-blue-500 rounded-lg overflow-hidden">
                <img
                  ref={imgRef}
                  src={image}
                  alt="Uploaded"
                  className="object-cover w-full h-full"
                  style={{
                    filter: `brightness(${brightness}%) contrast(${contrast}%) invert(${invert}%) opacity(${opacity}%) grayscale(${grayscale}%)`,
                    transform: `rotate(${rotate}deg)`,
                  }}
                />
              </div>
            </div>
  
            {/* Canvas caché pour le rendu */}
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
  
            {/* Contrôles */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-white text-sm">
              <div>
                <label>Luminosité</label>
                <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(e.target.value)} className="w-full" />
              </div>
              <div>
                <label>Contraste</label>
                <input type="range" min="0" max="200" value={contrast} onChange={(e) => setContrast(e.target.value)} className="w-full" />
              </div>
              <div>
                <label>Inverser</label>
                <input type="range" min="0" max="100" value={invert} onChange={(e) => setInvert(e.target.value)} className="w-full" />
              </div>
              <div>
                <label>Opacité</label>
                <input type="range" min="0" max="100" value={opacity} onChange={(e) => setOpacity(e.target.value)} className="w-full" />
              </div>
              <div>
                <label>Rotation</label>
                <input type="range" min="-180" max="180" value={rotate} onChange={(e) => setRotate(e.target.value)} className="w-full" />
              </div>
              <div>
                <label>Niveaux de Gris</label>
                <input type="range" min="0" max="100" value={grayscale} onChange={(e) => setGrayscale(e.target.value)} className="w-full" />
              </div>
            </div>
  
            {/* Boutons */}
            <div className="mt-6 flex justify-center space-x-4">
              <button onClick={downloadImage} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Télécharger</button>
            </div>
          </>
        )}
      </div>
    );
  }
  
  
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

const projects = [
    {
        title: "VOTIFY",
        description: "Plateforme de vote démocratique en ligne.",
        image: "/votify.png",
        link: "https://projets.iut-orsay.fr/saes3-nboulad/VOTFY/views/login.php",
        technologies: [<FaJs key="js" size={40} />, <FaReact key="react" size={40} />],
        extra: (
            <a href="https://projets.iut-orsay.fr/saes3-nboulad/VOTFY/views/login.php" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Accéder au site
            </a>
        ),
    },
    {
        title: "MathJack",
        description: "Jeu éducatif de Blackjack avec des équations mathématiques.",
        image: "/jack.jpg",
        technologies: [<FaJs key="js" size={40} />, <FaReact key="react" size={40} />],
        extra: <p className="text-yellow-400 text-lg font-semibold">🚧 Coming Soon...</p>,
    },
    {
        title: "Traitement d'images",
        description: "Modifiez vos images en ligne avec différents outils !",
        image: "/image.jpg",
        technologies: [<FaPython key="python" size={40} />, <SiCplusplus key="cpp" size={40} />, <FaDocker key="docker" size={40} />],
        extra: <ImageEditor />,
    },
    {
        title: "JO Companion",
        description: "Application de suivi des Jeux Olympiques.",
        image: "/projects/jo.jpg",
        technologies: [<FaPhp key="php" size={40} />, <FaJs key="js" size={40} />, <FaFigma key="figma" size={40} />],
        extra: <p className="text-red-400 text-lg font-semibold">❌ Démo non disponible</p>,
    },
];

  return (
    <section className="py-20 text-center space-y-16">
      <motion.h2 className="text-5xl font-bold text-white" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Mes Projets
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:ring-2 hover:ring-blue-500"
            onClick={() => setSelectedProject(project)}
          >
            <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-64 object-cover" />
            <div className="p-5 text-left">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex space-x-3 mt-4">{project.technologies}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 p-10 rounded-lg shadow-2xl max-w-3xl w-full text-white relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-3 right-3 text-2xl" onClick={() => setSelectedProject(null)}>❌</button>
              <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
              <p className="mt-4 text-gray-300">{selectedProject.description}</p>
              <div className="mt-4 flex space-x-3">{selectedProject.technologies}</div>
              {selectedProject.extra}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}