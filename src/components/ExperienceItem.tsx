import React from 'react';

interface ExperienceItemProps {
  title: string;
  role: string;
  date: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, role, date, description }) => {
  return (
    <div className='experience-item mt-12 flex flex-1 ml-6'>
      <div className="flex flex-col items-start self-start mt-4 pr-12 pb-7 pl-8 ml-20 max-w-full text-2xl font-medium leading-none text-white rounded-2xl opacity-80">
        <div className="flex flex-wrap gap-6 max-w-full">
          <div className="flex-auto text-center max-md:max-w-full">{title}</div>
        </div>
        <div className="mt-1 max-md:ml-2 text-lg">{role}</div>
        <div className="mt-1 font-light text-zinc-400 max-md:ml-2 text-base">{date}</div>
        <div className="self-end mt-4 text-lg font-light leading-7 max-md:max-w-full">{description}</div>
        <div className="mt-4 ml-16 text-red-600 max-md:ml-2">Link</div>
      </div>
    </div>
  );
};


const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Freelancer - Colaboracion en sitio Tower Cem",
      role: "Diseñador y Frontend Developer",
      date: "Junio 2024",
      description: "Diseñé en Figma las secciones de Contacto e Historia de la Empresa, enfocándome en una experiencia de usuario intuitiva y visualmente coherente con la identidad de la marca. Para el desarrollo front-end, utilicé Next.js y React, logrando una interfaz rápida y optimizada mediante renderizado del lado del servidor y rutas dinámicas que mejoran el SEO y la velocidad de carga."
    },
    {
      title: "Trabajo Final - Creación página de Hotel",
      role: "Diseñador y Fullstack Developer",
      date: "Enero 2024",
      description: "Desarrollé Hotel Esmeralda, una aplicación de gestión hotelera como proyecto final del bootcamp de Henry. Creé la interfaz en Figma y la desarrollé con Tailwind CSS. El frontend en React ofrece una experiencia rápida y reactiva, e integré un chat en vivo con Socket.IO para comunicación instantánea entre huéspedes y personal. Añadí un chatbot inteligente con Watson AI para soporte automatizado y usé Clerk para autenticación segura y sencilla."
    }
  ];

  return (
    <section id="experiencia" className="flex flex-col items-center self-center max-w-full  max-md:mt-10">
      <h2 data-layername="experiencia" className="self-start ml-20 text-6xl font-semibold leading-none text-center text-white max-md:ml-2.5 max-md:text-4xl opacity-90">
        Experiencia
      </h2>
      <div className="shrink-0 self-start mt-2 ml-20 border-violet-800 border-solid border-[5px] h-[9px] w-[78px] max-md:ml-2.5" />
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
};

export default Experience;