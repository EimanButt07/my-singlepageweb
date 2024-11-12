import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCloudDownloadAlt } from 'react-icons/fa'; 

const Navbar = () => {
    return (
        <div className="bg-gray-100 z-50 sticky top-0">
            <header className="text-black-500 body-font">
                <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> 
                        <Image 
                            src={require("../../../public/assets/logo.ct.png")} 
                            alt="CodeTech" 
                            width={100} 
                            height={100} 
                            className="w-12" 
                        />
                        <span className="ml-3 text-xl">CodeTech</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="mr-5 hover:text-yellow-500">Home</Link>
                        <Link href={"#about"} className="mr-5 hover:text-yellow-500">About</Link>
                        <Link href={"#skills"} className="mr-5 hover:text-yellow-500">Skills</Link>
                        <Link href={"#project"} className="mr-5 hover:text-yellow-500">Projects</Link>
                        <Link href={"#Contact"} className="mr-5 hover:text-yellow-500">Contact</Link>
                    </nav>
                    <a href="/assets/Resume/EimanButt_Resume..pdf" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> 
                        Download CV
                        <FaCloudDownloadAlt className="text-xl ml-2" />
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
