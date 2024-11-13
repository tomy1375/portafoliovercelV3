import React, { useEffect, useRef, useState } from 'react';
import Js from './icons/js.astro';

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollStep = 2; // Velocidad de desplazamiento
    let maxOffset = 0;

    if (carouselRef.current) {
      maxOffset = -carouselRef.current.scrollWidth / 2;
    }

    const scroll = () => {
      setOffset((prevOffset) => (prevOffset <= maxOffset ? 0 : prevOffset - scrollStep));
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, [items]);

  return (
    <div className="overflow-hidden whitespace-nowrap max-w-5xl mx-auto">
      <div
        ref={carouselRef}
        className="flex gap-6"
        style={{
          transform: `translateX(${offset}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {/* Duplicamos el array para crear el efecto de bucle */}
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gray-200 rounded-lg px-4 py-2 text-center min-w-[120px] max-w-4xl mx-auto"
          >
            
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
