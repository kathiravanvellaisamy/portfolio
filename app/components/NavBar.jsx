"use client"

import { GoDotFill } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { TbMenu3 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { useRef } from "react";

const NavLinks = [
    {
        title:"home",
        link:"#top"
    },
    {
        title:"about",
        link:"#about"
    },
    {
        title:"works",
        link:"#works"
    },
    {
        title:"skills",
        link:"#skills"
    },
    {
        title:"contact",
        link:"#contact"
    },
]


const NavBar = () => {

    const sideMenuRef = useRef()

    const openMenu = () =>{
        sideMenuRef.current.style.transform = 'translate(-16rem)'
    }
    const closeMenu = () =>{
        sideMenuRef.current.style.transform = 'translate(16rem)'
    }


  return (
    <>
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
            <a href="#top" className="flex font-bold  text-2xl">Kathir<span  className="text-orange-400">avan</span></a>

            <ul className="hidden md:flex items-center gap-6 md:gap-10 rounded-full px-12 py-3 shadow-sm bg-opacity-50 bg-white">
                {NavLinks.map((nav)=>(
                    <li key={nav.title} className="font-ovo font-medium"><a href={nav.link} className="hover:text-orange-400">{nav.title}</a></li>
                ))}
            </ul>

            <div className="flex gap-5 items-center">
               <button  className="cursor-pointer">
                 <LuSunMoon size={28} />
               </button>
                <a href="#" className="hidden md:flex gap-0.5">
                    <span>
                        <MdOutlineFileDownload size={22} />
                    </span>Resume</a>
                <button  className="cursor-pointer md:hidden"  onClick={openMenu}>
                 <TbMenu3 size={28} />
               </button>
            </div>

            {/* mobile menu */}
            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-900 transition duration-500">
                  <div className="absolute right-6 top-6">
                    <CgClose size={26} className="text-white cursor-pointer"  onClick={closeMenu} />
                  </div>
                  {NavLinks.map((nav)=>(
                    <li key={nav.title} className="font-ovo font-medium"><a href={nav.link} className="text-white hover:text-orange-400"  onClick={closeMenu}>{nav.title}</a></li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default NavBar