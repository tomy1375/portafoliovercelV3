import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, technologies }) => {
  return (
    <div className="flex flex-col items-center pb-12 w-full rounded-2xl border border-violet-800 border-solid max-md:mt-10">
      <div className="flex flex-col justify-center items-center self-stretch px-20 py-12 rounded-2xl bg-neutral-800 max-md:px-5">
        <img loading="lazy" src={imageSrc} alt={title} className="object-cover ml-3 max-w-full aspect-square w-[100px]" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold leading-none text-white">{title}</h3>
      <p className="mt-5 text-base font-light leading-7 text-white ml-3 ga">{description}</p>
      <div className="flex flex-wrap gap-4 mt-8 max-w-full w-[383px] max-md:mt-6">
        {technologies.map((tech, index) => (
          <img key={index} loading="lazy" src={tech} alt="Technology icon" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[40px]" />
        ))}
      </div>
    </div>
  );
};

  

const Projects: React.FC = () => {
  const projects = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9691749d6cb5ab464a0e2426f72aad639528da016a112d1be4d95f9a8a5f554e?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac",
      title: "Hotel Esmeralda",
      description: "Proyecto final de Henry, desarrollé una aplicación integral de gestión hotelera.",
      technologies: ["https://cdn.builder.io/api/v1/image/assets/TEMP/54530499fc7a36fd4bb6a70e7a7fee00ab373d0a391df07c707ac199c4f7ccb5?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/808d0808186f83645023e6717b1fbb48bcc236d15cbc749a4bfed4edd2a75e23?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/5b584f91c68f8b21a1b7dcef9e485b54bf537ee05b5c2573c9a5d09e86a2aa40?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/97bbf0293197b4dd7794a995b8bf1ea7ac86bfcd03fadd2f276274f96d6a4c1e?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/4999dec32e740df53649cdf5146b93b1717f7f65fcd8a22fa525b3e4941a8714?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac"]
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c75f588836b50a6236e844a3004d1b9d36299b5862c55fc98a6dbb78f07c3fd4?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac",
      title: "Spotify Clone",
      description: "Clon de Spotify, recrea la experiencia de usuario de la plataforma de música de streaming.",
      technologies: ["https://cdn.builder.io/api/v1/image/assets/TEMP/a7628548eb8a655f42a8d4accca843d163ab1cfe79ebb30927a6f16caa5d2727?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/54530499fc7a36fd4bb6a70e7a7fee00ab373d0a391df07c707ac199c4f7ccb5?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/d2f231e759a88b4c1d36ceb6f1f0f4391cf2c932a57693654ec9a3f2ff25b8e0?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac", "https://cdn.builder.io/api/v1/image/assets/TEMP/15ba18250e88c710e2919453f0eaee1211111d2a1a86bee9de6f9d1592ecb005?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac"]
    }
  ];

  return (
    <section id="proyectos" className="self-center mt-32 mr-20 max-w-full w-[608px] max-md:mt-10 max-md:mr-2.5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[91%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-20 text-6xl text-center font-semibold leading-none text-white whitespace-nowrap max-md:mt-10 max-md:text-3xl">
            <h2 data-layername="proyectos" className="max-md:text-4xl text-center">Proyectos</h2>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/85da52505e5471625febb8751ad1b2414ad7010fe1e9c39e952b6573862b41f1?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac" alt="" className="object-contain mt-4 aspect-[9.35] w-[84px] ml-7" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c451e1e1e4b4ddec7ec70eca0b7a9721df744bdaee3a18c1081cac8608696e7?placeholderIfAbsent=true&apiKey=9fe8dc76776646f4a6bc648caa0a3bac" alt="" className="object-contain shrink-0 max-w-full aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[168px] max-md:mt-10" />
        </div>
      </div>
      <p data-layername="todoLoQuePuedasImaginarLoPodrasProgramar" className="mt-10 text-xl font-semibold leading-none text-center text-white max-md:max-w-full">
        <span className="font-medium">Todo lo que puedas </span>
        <span className="font-medium text-violet-800">imaginar</span>
        <span className="font-medium">, lo podrás </span>
        <span className="font-medium text-violet-800">programar</span>
      </p>
      <div className="mt-24 max-w-full w-[880px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full px-2">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;