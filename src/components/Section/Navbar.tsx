'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { href: "#inicio", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/50b0f04f2cf971aca25b1938e9c2d65a06e47fe934c2b3c0649517558dd80f43?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", text: "Inicio" },
  { href: "#sobreMi", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a698e2bd2e25291687727273cf6eae3fe4410c1fe764e72fbd2bf0bb7442f54e?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", text: "Sobre mi" },
  { href: "#experiencia", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27d3c7125be9da30d6e8b3360fa8aea819e105cbed21d9e7abda33b27a2d5eb2?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", text: "Experiencia" },
  { href: "#proyectos", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d30f27e24410bb23549b0eadd489026d9a52af18029d1c11f4a1c8d0d4a63ebd?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", text: "Proyectos" },
  { href: "#tecnologias", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3bd696a52521aea47e5c41deffdaf4edd7935b2b3e22d9f08da7c2767b745f3?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", text: "Tecnologías" },
  { href: "#contacto", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/50bd507349116aabac70884f9d1522fd06afe88d6ff5a5d351a4836dc7a63a00?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", text: "Contacto" },
]

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <header className="relative flex flex-col justify-center w-full">
      <img 
        src="../../public/escritorio4.jpeg" 
        alt="Fondo de escritorio" 
        className="absolute inset-0 object-cover w-full h-screen"
      />
      <div className="relative flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-20 pb-96 w-full">
        <nav className="flex flex-wrap justify-center gap-6 mb-0.5 -mt-10 items-center max-w-full text-lg text-white">
          {navItems.map((item) => (
            <div 
              key={item.href}
              className="relative inline-flex items-center group"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={item.icon} 
                alt="" 
                className="object-contain z-10 self-start aspect-square w-[30px] mr-2"
              />
              <a 
                href={item.href} 
                className="font-medium transition-colors duration-200 ease-in-out"
              >
                {item.text}
              </a>
              {hoveredItem === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar