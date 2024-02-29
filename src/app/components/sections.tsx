import Cards from "./cards"
export default function Sections(){
    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className=" font-semibold text-xl">NUESTRAS TIPOLOGÍAS</h1>
                <p className="text-slate-600 md:text-xl text-md text-center my-4 max-[385px]:text-sm max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-4">
                    Construimos tu proyecto con materiales de construcción tradicional y pagás por avance de obra. Trabajamos con las mejores marcas: Palmar, Holcim, FV, Ferrum, Roca, Acindar y más.
                </p>
                <Cards/>
            </div>
        </>
    )
}