'use client'
import { ICONS } from './data/IconsTecnologies';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react'

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
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 max-w-sm mx-auto w-full"
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
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
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
      <div className="flex justify-between p-6 pt-0">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9691749d6cb5ab464a0e2426f72aad639528da016a112d1be4d95f9a8a5f554e?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac",
      title: "Hotel Esmeralda",
      description: "Proyecto final de Henry, desarrollé una aplicación integral de gestión hotelera tanto para el cliente como para administrador.",
      technologies: ["JavaScript", "React", "Socket.io"],
      githubLink: "https://github.com/yourusername/hotel-esmeralda",
      liveLink: "https://hotelesmeralda.netlify.app/restaurant"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c75f588836b50a6236e844a3004d1b9d36299b5862c55fc98a6dbb78f07c3fd4?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac",
      title: "Spotify Clone",
      description: "Clon de Spotify, recrea la experiencia de usuario de la plataforma de música de streaming.",
      technologies: ["React", "CSS", "JavaScript", "Astro"],
      githubLink: "https://github.com/yourusername/spotify-clone",
      liveLink: "https://spotify-clone.vercel.app"
    },
    {
      imageSrc: "https://cdna.artstation.com/p/assets/images/images/005/201/884/large/trippy-sun-pokedex-avec-pika.jpg?1489267325",
      title: "Pokemon - Pokedex",
      description: "Una Pokedex interactiva que muestra información detallada sobre diferentes Pokémon.",
      technologies: ["HTML", "CSS", "JavaScript","React"],
      githubLink: "https://github.com/yourusername/pokemon-pokedex",
      liveLink: "https://pokemon-pokedex.vercel.app"
    }
  ];

  return (
    <section id="proyectos" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Proyectos</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          <span>Todo lo que puedas </span>
          <span className="text-blue-600 font-semibold">imaginar</span>
          <span>, lo podrás </span>
          <span className="text-blue-600 font-semibold">programar</span>
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;