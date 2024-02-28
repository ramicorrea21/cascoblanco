import BulletList from '../components/bulletlist';
import { tipologias, ficha_amazing } from "../utils/tipologias.js"

export default function Amazing() {
  const amazingData = tipologias.find(t => t.title === "Vivienda Amazing");

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-3">
          <h1 className="text-2xl text-center">Viviendas Amazing</h1>
          <div className='mt-5 max-w-[1400px]  w-full m-auto pt-8 pb-4 px-4'>
          <BulletList items={ficha_amazing} />
          </div>
        </div>
      </div>
    </>
  );
}
