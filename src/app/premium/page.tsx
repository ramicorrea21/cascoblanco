import BulletList from '../components/bulletlist';
import { tipologias, ficha_premium } from "../utils/tipologias.js"
import Carrousel from '../components/carrousel';

export default function Premium(){
    const premiumData = tipologias.find(t => t.title === "Vivienda Premium");
    return(
        <>
        <div className="flex justify-center">
          <div className="mt-3">
            <h1 className="text-2xl text-center">{premiumData?.title}</h1>
            <div className='mt-5 max-w-[1400px]  w-full m-auto my-4 px-4'>
            {premiumData && <Carrousel images={premiumData.img} />}
            <h1 className="text-2xl text-center my-4">Ficha Técnica</h1>
            <BulletList items={ficha_premium} />
            </div>
          </div>
        </div>
      </>
    )
}