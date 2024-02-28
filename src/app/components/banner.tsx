'use client'
import React, { useState, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';// Asegúrate de importar el componente del esqueleto

export default function Banner() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => window.innerWidth < 950;
        setIsMobile(checkIfMobile());
        const handleResize = () => {
            setIsMobile(checkIfMobile());
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile === null) return <LoadingSkeleton />; // Muestra el esqueleto mientras isMobile es null

    const videoSrc = isMobile ? "/videos/Banner-Mobile.mp4" : "/videos/Banner.mp4";

    return (
        <div className="banner-container mt-2 mx-4 md:mx-6 lg:mx-8 rounded-lg overflow-hidden">
            {!videoLoaded && <LoadingSkeleton />}
            <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className={`banner-video ${videoLoaded ? 'block' : 'hidden'}`}
                onLoadedData={() => setVideoLoaded(true)}
            />
        </div>
    );
}
