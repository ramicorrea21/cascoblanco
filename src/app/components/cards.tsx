import {tipologias} from '../utils/tipologias.js'
import Slider from './slider'

export default function Cards(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
        {tipologias.map((tipologia, index) => (
          <div key={index} className="flex flex-col items-center">
            <Slider images={tipologia.img} />
            <h2 className="text-md font-semibold mt-2">{tipologia.title}</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
              Ver más
            </button>
          </div>
        ))}
      </div>
    )
}