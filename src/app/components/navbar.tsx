'use client'
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className=" px-6 py-6 lg:py-6 bg-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className='flex'>
                    <Link href="/" className='flex items-center'>
                    <Image src="/logo/logo.jpg" alt='logo' priority width={300} height={51} />
                    </Link>
                    <div className="border-r border-gray-300 h-8 ml-5 mr-10 mt-1 "></div>
                    <div className='lg:hidden  ' onClick={toggleMenu}>
                        {openMenu ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
                    </div>
                </div>
                <div className="hidden lg:flex items-center">
                    <ul className="flex space-x-8 xl:space-x-20 ">
                        <li>
                            <Link href="/" className="font-semibold text-lg hover:text-violet-500">
                                Tipologias
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="font-semibold text-lg hover:text-violet-500">
                                Informacion Legal
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="font-semibold text-lg hover:text-violet-500">
                                Contactanos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {openMenu && (
                <div className="absolute top-0 left-0 h-screen w-full bg-white z-50 lg:hidden overflow:hidden">
                    <div className='flex px-6 py-6 '>
                        <div className='container mx-auto flex items-center'>
                            <div className="flex">
                                <div className='flex'>
                                    <Link href="/" className='flex items-center'>
                                        <Image src="/logo/logo.jpg" alt='logo' width={300} height={51} />
                                    </Link>
                                    <div className="border-r border-gray-300 h-8 ml-5 mr-10  "></div>
                                    <div className='lg:hidden  ' onClick={toggleMenu}>
                                        {openMenu ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-5/6">
                        <Link href="/" className="font-semibold pb-2 text-lg hover:text-violet-500">
                            Tipologias
                        </Link>
                        <Link href="/" className="font-semibold py-2 text-lg hover:text-violet-500">
                            Informacion Legal
                        </Link>
                        <Link href="/" className="font-semibold py-2 text-lg hover:text-violet-500">
                            Contactanos
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}