import { ficha_tecnica } from "../utils/tipologias"
import { info_legal } from "../utils/tipologias"
import BulletList from "../components/bulletlist"
import Image from "next/image"

export default function Info(){
    return(
        <div className="flex justify-center">
            <div className="my-2 mt-5 max-w-[1400px]  w-full m-auto  px-4">
            <h1 className="text-center text-2xl my-2">Información Legal</h1>
            <BulletList items={info_legal}/>
            <BulletList items={ficha_tecnica}/>
            <Image
            src='/info.webp'
            width={1600}
            height={900}
            alt="info"
            className="rounded-lg mt-6 hidden md:block"
            priority

            />
            </div>
        </div>
    )
}