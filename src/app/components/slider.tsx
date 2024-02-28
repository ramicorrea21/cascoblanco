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

    // Se debe especificar la propiedad sizes para indicar cómo deben cargarse las imágenes.
    const imageSize = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

    return (
        <div className="relative w-full h-64">
            {images.map((image, index) => (
                <div
                    className={`absolute inset-0 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                    key={index}
                >
                    {/* Se actualiza el componente Image de acuerdo a la última API de Next.js */}
                    <Image 
                        src={image} 
                        layout="fill" // Utilizamos fill para que la imagen cubra el contenedor.
                        objectFit="cover" // Este es el comportamiento que queremos para el fill.
                        sizes={imageSize}
                        alt={`Slide ${index + 1}`}
                    />
                </div>
            ))}
            <button className="absolute top-1/2 left-2 text-white" onClick={nextSlide}>
                {'<'}
            </button>
            <button className="absolute top-1/2 right-2 text-white" onClick={nextSlide}>
                {'>'}
            </button>
        </div>
    );
};

export default Slider;
