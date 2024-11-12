import Link from "next/link";
import React from "react";
import Image from "next/image";
const About = () => {
    return (
        <div id="about">
            <>
  <section className="text-gray-600 body-font bg-cover bg-center custom-image">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded mx-auto w-[500] h-[500]"
          alt="hero"
          src={require('../../../public/assets/pofilepic.png')}
          width={500}
          height={500}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          About Me
        </h1>
        <p className="mb-5 leading-relaxed">
        I am a motivated and driven individual who has completed my Matriculation and FSC Pre-Medical 
        studies. Currently, I am pursuing a Cloud Applied Generative AI Engineering program under 
        the Governor Sindh Initiative, which allows me to explore cutting-edge technology and innovation.
        </p>
        <p className="mb-5 leading-relaxed">
        Additionally, I have earned certification as an Amazon Virtual Assistant from JDC IT City, 
         further enhancing my skills in the tech and digital assistant fields. 
         I am passionate about learning and growing in the ever-evolving tech landscape,
          eager to contribute and apply my knowledge in real-world scenarios.
         
        </p>
        <div className="flex justify-center">
            <Link target="_blank" href="/assets/resume/Eiman-Cv.pdf">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            View CV
          </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  v
</>
        </div>
    )
}
export default About