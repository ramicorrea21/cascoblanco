import {tipologias} from '../utils/tipologias.js'
import Slider from './slider'
import Link from 'next/link'

export default function Cards(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4 mt-4">
        {tipologias.map((tipologia, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg">
            <Slider images={tipologia.img} />
            <div className="p-4 w-full">
              <h2 className="text-md font-semibold">{tipologia.title}</h2>
              <p>{tipologia.descripcion}</p>
              <Link href={tipologia.link} className="border border-black bg-white text-black hover:text-white hover:bg-black font-semibold py-1 px-4 rounded-xl mt-2 text-sm ">
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
}
