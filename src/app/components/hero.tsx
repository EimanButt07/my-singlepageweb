"use client"
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const Hero = () => {
    return (
            <section className="text-gray-600 body-font bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am <span className="text-yellow-400">Eiman Butt</span>
        <br className="hidden lg:inline-block" />
        <Typewriter

        
  options={{
    strings: ['Code is My Craft', 
        'AI is My Passion',
        'and the Future is My Playground.'],
    autoStart: true,
    loop: true,
  }}
  />
      </h1>
      <div className="w-[100px] h-[2px] bg-blue-700"> </div>
      <p className="mb-8 leading-relaxed">

I'm a passionate software developer with a strong foundation in TypeScript, HTML, and CSS. Currently, I'm diving deeper into Next.js and Tailwind CSS to build modern, scalable web applications. My focus is on Cloud Applied Generative AI Engineering, where I combine cutting-edge cloud technologies with AI-driven solutions to create innovative, high-performance applications.
I am constantly learning and exploring new ways to leverage technology to solve real-world problems. Welcome to my portfolio, where I showcase my work and projects!

      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[25rem]"
        alt="hero"
        width={300}
        height={100}
        src={require('../../../public/assets/Eiman.pfp.jpg')}
      />
    </div>
  </div>
</section>

    )
}
export default Hero