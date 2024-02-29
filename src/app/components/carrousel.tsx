'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Image from 'next/image';
import { useState } from 'react';


type SliderProps = {
    images: string[]; 
};

const Carrousel: React.FC<SliderProps> = ({ images }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative mb-8 rounded-md">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                dynamicHeight={false}
                emulateTouch={true}
                useKeyboardArrows={true}
                swipeable={true}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <Image                         
                        src={image} 
                        width={1174} 
                        height={659} 
                        alt={`Slide ${index + 1}`}
                        className="rounded-md"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Carrousel;