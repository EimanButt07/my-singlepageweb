import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <div>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image    
       src={require("../../../public/assets/logo.ct.png")} 
      alt="CodeTech" 
      width={100} 
      height={100} 
     className="w-13" 
     />
    <span className="ml-3 text-xl">CodeTech</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 CodeTech
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target="_blank"
       href = {'https://www.facebook.com/profile.php?id=61565117135339'} className="text-gray-500">
      <MdOutlineFacebook className="text-2xl hover:text-[#3b5998]"/>
      </Link>
      
      <Link 
      target="_blank"
      href = {'https://www.linkedin.com/in/eiman-butt-aa144a280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className="ml-3 text-gray-500">
      <BiLogoLinkedinSquare className="text-2xl hover:text-[#0e76a8]"/>
      </Link>
      <Link
      target="_blank"
       href = {'https://github.com/EimanButt07'} className="text-gray-500 px-3">
      <BiLogoGithub className="text-2xl hover:text-[#24292F]"/>
      </Link>
      <a className="ml-3 text-gray-500">
      </a>
      <a className="ml-3 text-gray-500">
      </a>
    </span>
  </div>
</footer>
        </div>
    )
}
export default Footer