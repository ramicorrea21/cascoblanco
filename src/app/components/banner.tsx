'use client'
import React, { useState, useEffect } from 'react';

export default function Banner() {
    // Especifica que el estado puede ser un booleano o null
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        // Define una función que comprueba si estamos en un móvil
        const checkIfMobile = () => window.innerWidth < 950;
        setIsMobile(checkIfMobile()); // Establece el estado inicial

        // Define una función para manejar el cambio de tamaño de la ventana
        const handleResize = () => {
            setIsMobile(checkIfMobile());
        };

        // Agrega un listener para el evento resize
        window.addEventListener('resize', handleResize);

        // Limpia el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Si isMobile es null, no renderiza nada aún
    if (isMobile === null) return null;

    return (
        <div className="banner-container banner-container mx-4 md:mx-6 lg:mx-8 rounded-lg overflow-hidden">
            {isMobile ? (
                <video
                    src="/videos/Banner-Mobile.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="banner-video"
                />
            ) : (
                <video
                    src="/videos/Banner.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="banner-video"
                />
            )}
        </div>
    );
}
