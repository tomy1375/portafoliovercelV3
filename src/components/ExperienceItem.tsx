import React from 'react';

interface ExperienceItemProps {
  title: string;
  role: string;
  date: string;
  description: string;
  link: string;
  isFirst: boolean;
  isLast: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, role, date, description, link, isFirst, isLast }) => {
  return (
    <div className="relative flex items-start pb-12">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-violet-800 opacity-80">
        <div className={`absolute mt-14 w-6 h-6 bg-pink-500 rounded-full box-shadow-custom glow-effect -left-[11px] ${isFirst ? 'top-0' : '-top-3'}`}></div>
        {isLast && <div className=""></div>}
      </div>
      <div className="ml-12 experience-item flex-1">
        <div className="flex flex-col items-start self-start p-8 text-white rounded-2xl opacity-80">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="mt-1 text-lg">{role}</p>
          <p className="mt-1 font-light text-zinc-400 text-base">{date}</p>
          <p className="mt-4 text-lg font-light leading-7">{description}</p>
          <a href={link} className="mt-4 text-pink-500 hover:text-pink-400 transition-colors">Ver más</a>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Freelancer - Colaboración en sitio Tower Cem",
      role: "Diseñador y Frontend Developer",
      date: "Junio 2024",
      description: "Diseñé en Figma las secciones de Contacto e Historia de la Empresa, enfocándome en una experiencia de usuario intuitiva y visualmente coherente con la identidad de la marca. Para el desarrollo front-end, utilicé Next.js y React, logrando una interfaz rápida y optimizada mediante renderizado del lado del servidor y rutas dinámicas que mejoran el SEO y la velocidad de carga.",
      link: "https://www.towerscem.com/"
    },
    {
      title: "Trabajo Final - Creación página de Hotel",
      role: "Diseñador y Fullstack Developer",
      date: "Enero 2024",
      description: "Desarrollé Hotel Esmeralda, una aplicación de gestión hotelera como proyecto final del bootcamp de Henry. Creé la interfaz en Figma y la desarrollé con Tailwind CSS. El frontend en React ofrece una experiencia rápida y reactiva, e integré un chat en vivo con Socket.IO para comunicación instantánea entre huéspedes y personal. Añadí un chatbot inteligente con Watson AI para soporte automatizado y usé Clerk para autenticación segura y sencilla.",
      link: "https://www.youtube.com/watch?v=Kch4Ezm3G5A"
    }
  ];

  return (
    <section id="experiencia" className="flex flex-col items-center self-center max-w-full px-4 md:mt-36">
      <h2 data-layername="experiencia" className="text-5xl md:text-6xl font-semibold leading-none text-center text-white opacity-90 mb-4">
        Experiencia
        <div className="w-20 h-2 bg-violet-800 mb-12 mt-2"></div>
      </h2>
      <div className="w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index} 
            {...exp} 
            isFirst={index === 0}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;