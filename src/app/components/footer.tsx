import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import WspButton from './whatsapp';

export default function Footer(){
    return (
      <>
      <WspButton/>
      <footer className="bg-white  text-gray-700 border-t mt-10">
          <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center">
            {/* Primera columna */}
            <div className='py-2'>
              <h3 className="text-xl font-semibold">CASCO BLANCO CONSTRUCTORA</h3>
              <div className="flex items-center mt-3">
                <FaMapMarkerAlt className="mr-2" />
                <span>Raúl Hugo Espoile 3021, Barrio Los Naranjos</span>
              </div>
              <div className="flex items-center mt-3">
                <FaPhone className="mr-2" />
                <span>Teléfono: +54 9 3513006426 </span>
              </div>
              <div className="flex items-center mt-3">
                <FaEnvelope className="mr-2" />
                <span>mail. cascoblancomateriales@gmail.com</span>
              </div>
            </div>
    
            {/* Segunda Colomuna */}
            <div className='py-2'>
              <h3 className="text-xl font-semibold">Redes Sociales</h3>
              <div className="flex items-center mt-3">
                <FaFacebook className="mr-2" />
                <Link href='https://www.facebook.com/cascoblancomateriales/' className='hover:text-slate-500'>cascoblanco.m</Link>
              </div>
              <div className="flex items-center mt-3">
                <FaInstagram className="mr-2" />
                <Link href='https://www.instagram.com/cascoblancoconstructora/' className='hover:text-slate-500'>cascoblancoconstructora</Link>
              </div>
            </div>
    
            {/* Tercera colomuna */}
            <div className='py-3'>
              <h3 className="text-xl font-semibold">Créditos</h3>
              <div className="flex items-center mt-3">
                <span>Sitio web hecho por </span>
                <FaHeart className="mx-2 text-red-500" />
                <Link href='https://vitality-smoky.vercel.app/'>Vitality</Link>
              </div>
            </div>
          </div>
        </footer>
      </>
        
        )
}