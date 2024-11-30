'use client'
import { ICONS } from './data/IconsTecnologies';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  imageSrc, 
  title, 
  description, 
  technologies = [], 
  githubLink, 
  liveLink 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="overflow-hidden bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:border-violet-800 dark:hover:border-violet-800 transition-colors duration-300 max-w-sm mx-auto w-full flex flex-col mt-5 mb-6"
    >
      <div className="p-0">
        <div className="relative overflow-hidden h-48">
          <img 
            src={imageSrc} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-8 mb-4">
          {technologies.map((tech, index) => {
            const icon = ICONS.find(icon => icon.name.toLowerCase() === tech.toLowerCase());
            return (
              <span key={index} className="">
                {icon && (
                  <span className="w-6 h-6" dangerouslySetInnerHTML={{ __html: icon.svgPath }} />
                )}
              </span>
            );
          })}
        </div>
      </div>
      <div className="mt-auto flex justify-between p-6 pt-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-200 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-800 hover:bg-violet-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      imageSrc: "/hotele.webp",
      title: "Hotel Esmeralda",
      description: "Proyecto final de Henry, desarrollé una aplicación integral de gestión hotelera tanto para el cliente como para administrador.",
      technologies: ["JavaScript", "React", "Socket.io","PostreSQL"],
      githubLink: "https://github.com/tomy1375/Cliente-Hotel-Esmeralda.git",
      liveLink: "https://hotelesmeralda.netlify.app/"
    },
    {
      imageSrc: "/spotify3.webp",
      title: "Spotify Clone",
      description: "Clon de Spotify, recrea la experiencia de usuario de la plataforma de música de streaming.",
      technologies: ["React", "CSS", "TypeScript", "Astro"],
      githubLink: "https://github.com/tomy1375/Spotify-Clone",
      liveLink: "https://spotifyclonev2.netlify.app/"
    },
    {
      imageSrc: "/dot2.webp",
      title: "Dot Dager Portafolio",
      description: "Diseñé un portafolio para el artista DotDager como parte de un concurso, basado en la creación a partir de un prompt.",
      technologies: ["Astro","React", "CSS", "TypeScript"],
      githubLink: "https://github.com/tomy1375/Dot-Dager-Portafolio",
      liveLink: "https://dot-dager.netlify.app/"
    },
    {
      imageSrc: "https://cdna.artstation.com/p/assets/images/images/005/201/884/large/trippy-sun-pokedex-avec-pika.jpg?1489267325",
      title: "Pokemon - Pokedex",
      description: "Una Pokedex interactiva que muestra información detallada sobre diferentes Pokémon.",
      technologies: ["HTML", "CSS", "JavaScript","React"],
      githubLink: "https://github.com/tomy1375/PI_Pokemon",
      liveLink: ""
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="" className="container mx-auto px-4 py-16 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-2  text-white">Proyectos</h2>
        <div className="w-24 h-2 bg-violet-800 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300">
          <span>Todo lo que puedas </span>
          <span className="text-violet-800 font-semibold">imaginar</span>
          <span>, lo podrás </span>
          <span className="text-violet-800 font-semibold">programar</span>
        </p>
      </motion.div>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div className="">
          <motion.div 
            className="flex transition-all duration-300 ease-in-out"
            animate={{ x: `${-currentIndex * 100}%` }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 px-4 md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-violet-800 text-white p-2 rounded-full shadow-lg hover:bg-violet-900 transition-colors z-10"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-violet-800 text-white p-2 rounded-full shadow-lg hover:bg-violet-900 transition-colors z-10"
          aria-label="Siguiente proyecto"
        >
          <ChevronRight size={24} />
        </button>
        <div className="flex justify-center mt-4 md:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentIndex ? 'bg-violet-800' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

