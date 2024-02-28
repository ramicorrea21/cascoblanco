'use client'
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface DropdownItemProps {
  href: string;
  label: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, label }) => (
  <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    {label}
  </Link>
);

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="px-6 py-6 bg-white  sticky top-0 z-50  shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className='flex'>
          <Link href="/" className='flex items-center'>
            <Image src="/logo/logo.jpg" alt='logo' priority width={300} height={51} />
          </Link>
          <div className="border-r border-gray-300 h-8 ml-5 mr-10 mt-1 "></div>
          <div className='lg:hidden mt-1' onClick={toggleMenu}>
            {openMenu ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-8 xl:space-x-20">
            <li className="relative">
              <button
                className="font-semibold text-lg flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                Tipologías
                {dropdownOpen ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
              </button> 
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md z-10">
                  <DropdownItem href="/" label="Vivienda Amazing" />
                  <DropdownItem href="/" label="Vivienda Premium" />
                  <DropdownItem href="/" label="Vivienda Estándar" />
                  <DropdownItem href="/" label="Obra gris - Sin terminaciones" />
                </div>
              )}
            </li>
            <li>
              <Link href="/" className="font-semibold text-lg cursor-pointer">
                Informacion Legal
              </Link>
            </li>
            <li>
              <Link href="/" className="font-semibold text-lg cursor-pointer">
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
                  <div className="border-r border-gray-300 h-8 ml-5 mr-10 mt-1  "></div>
                  <div className='lg:hidden mt-1' onClick={toggleMenu}>
                    {openMenu ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-5/6">
            {/* Dropdown para móviles */}
            <div className='flex  flex-col items-center'>
              <button
                className="font-semibold text-lg flex items-center cursor-pointer py-2"
                onClick={toggleDropdown}
              >
                Tipologías
                {dropdownOpen ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
              </button>
              {dropdownOpen && (
                <div className="flex flex-col items-center bg-gray-50">
                  <DropdownItem href="/" label="Vivienda Amazing" />
                  <DropdownItem href="/" label="Vivienda Premium" />
                  <DropdownItem href="/" label="Vivienda Estándar" />
                  <DropdownItem href="/" label="Obra gris - Sin terminaciones" />
                </div>
              )}
            </div>
            <Link href="/" className="font-semibold py-2 text-lg cursor-pointer">
              Informacion Legal
            </Link>
            <Link href="/" className="font-semibold py-2 text-lg cursor-pointer">
              Contactanos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
