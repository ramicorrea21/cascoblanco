// import BulletList from '../components/bulletlist';
// import { tipologias, ficha_obra_gris } from "../utils/tipologias.js"
// import Carrousel from '../components/carrousel';

// export default function Premium(){
//     const obragrisData = tipologias.find(t => t.title === "Obra Gris - Sin termiaciones");
//     return(
//         <>
//         <div className="flex justify-center">
//           <div className="mt-3">
//             <h1 className="text-2xl text-center">{obragrisData?.title}</h1>
//             <div className='mt-5 max-w-[1400px]  w-full m-auto my-4 px-4'>
//             {obragrisData && <Carrousel images={obragrisData.img} />}
//             <h1 className="text-2xl text-center my-4">Ficha Tecnica</h1>
//             <BulletList items={ficha_obra_gris} />
//             </div>
//           </div>
//         </div>
//       </>
//     )
// }