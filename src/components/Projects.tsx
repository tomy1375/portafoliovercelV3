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
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              <img src={tech} alt="Technology icon" className="w-4 h-4 mr-1" />
              {tech.split('/').pop()?.split('.')[0]}
            </span>
          ))}
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
      description: "Proyecto final de Henry, desarrollé una aplicación integral de gestión hotelera.",
      technologies: ["https://cdn.builder.io/api/v1/image/assets/TEMP/54530499fc7a36fd4bb6a70e7a7fee00ab373d0a391df07c707ac199c4f7ccb5?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/808d0808186f83645023e6717b1fbb48bcc236d15cbc749a4bfed4edd2a75e23?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/5b584f91c68f8b21a1b7dcef9e485b54bf537ee05b5c2573c9a5d09e86a2aa40?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/97bbf0293197b4dd7794a995b8bf1ea7ac86bfcd03fadd2f276274f96d6a4c1e?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/4999dec32e740df53649cdf5146b93b1717f7f65fcd8a22fa525b3e4941a8714?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac"],
      githubLink: "https://github.com/yourusername/hotel-esmeralda",
      liveLink: "https://hotel-esmeralda.vercel.app"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c75f588836b50a6236e844a3004d1b9d36299b5862c55fc98a6dbb78f07c3fd4?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac",
      title: "Spotify Clone",
      description: "Clon de Spotify, recrea la experiencia de usuario de la plataforma de música de streaming.",
      technologies: ["https://cdn.builder.io/api/v1/image/assets/TEMP/a7628548eb8a655f42a8d4accca843d163ab1cfe79ebb30927a6f16caa5d2727?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/54530499fc7a36fd4bb6a70e7a7fee00ab373d0a391df07c707ac199c4f7ccb5?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/d2f231e759a88b4c1d36ceb6f1f0f4391cf2c932a57693654ec9a3f2ff25b8e0?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/15ba18250e88c710e2919453f0eaee1211111d2a1a86bee9de6f9d1592ecb005?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac"],
      githubLink: "https://github.com/yourusername/spotify-clone",
      liveLink: "https://spotify-clone.vercel.app"
    },
    {
      imageSrc: "https://cdna.artstation.com/p/assets/images/images/005/201/884/large/trippy-sun-pokedex-avec-pika.jpg?1489267325",
      title: "Pokemon - Pokedex",
      description: "Una Pokedex interactiva que muestra información detallada sobre diferentes Pokémon.",
      technologies: ["https://cdn.builder.io/api/v1/image/assets/TEMP/54530499fc7a36fd4bb6a70e7a7fee00ab373d0a391df07c707ac199c4f7ccb5?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/d2f231e759a88b4c1d36ceb6f1f0f4391cf2c932a57693654ec9a3f2ff25b8e0?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/15ba18250e88c710e2919453f0eaee1211111d2a1a86bee9de6f9d1592ecb005?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac"],
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