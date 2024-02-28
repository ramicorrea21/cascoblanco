'use client'
import { useState } from "react";
import Image from "next/image";

type SliderProps = {
    images: string[]; // Un arreglo de strings para las URLs de las imágenes
};

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % images.length);
    };

    // Puedes definir un ancho máximo y utilizar tailwind para hacerlo responsive
    const imageWidth = 1174; // ancho de la imagen
    const imageHeight = 659; // alto de la imagen

    return (
        <div className="relative w-full overflow-hidden">
            {/* Ajustar la altura del contenedor basado en la relación de aspecto de las imágenes */}
            <div style={{ paddingTop: `${(imageHeight / imageWidth) * 100}%` }}></div>
            {images.map((image, index) => (
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                    key={index}
                >
                    <Image 
                        src={image} 
                        width={imageWidth} 
                        height={imageHeight} 
                        alt={`Slide ${index + 1}`}
                        className="rounded-md"
                    />
                </div>
            ))}
            <button className="absolute top-1/2 left-2 text-white z-10" onClick={nextSlide}>
                {'<'}
            </button>
            <button className="absolute top-1/2 right-2 text-white z-10" onClick={nextSlide}>
                {'>'}
            </button>
        </div>
    );
};

export default Slider;
