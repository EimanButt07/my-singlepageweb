import React from "react"
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";



const Skill = () =>{
return (
    <div id="skills">
<section className="text-gray-600 body-font bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        MY SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 hover:text-yellow-500">
      Technical Proficiencies & Expertise
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
     {/* Skills */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <ImHtmlFive className="text-lg font-bold" />

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[70%]"></div>
          </div>
          <p className="font-bold text-blue-500 text-right">70%</p>
          </div>
        </div>
      </div>
     {/* Skill 2 */}
     <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoLogoCss3 className="text-xl font-bold" />
           </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[65%]"></div>
          </div>
          <p className="font-bold text-blue-500 text-right">65%</p>
          </div>
        </div>
      </div>
      {/* Skill 3 */}
     <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <BiLogoTypescript className="text-xl font-bold" />
           </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]"></div>
          </div>
          <p className="font-bold text-blue-500 text-right">90%</p>
          </div>
        </div>
      </div>
      {/* Skill 4 */}
     <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <RiNextjsFill className="text-xl font-bold" />
           </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            NextJs
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[50%]"></div>
          </div>
          <p className="font-bold text-blue-500 text-right">50%</p>
          </div>
        </div>
      </div>
      {/* Skill 5 */}
     <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <RiTailwindCssFill className="text-xl font-bold" />
           </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Tailwind Css 
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[75%]"></div>
          </div>
          <p className="font-bold text-blue-500 text-right">75%</p>
          </div>
        </div>
      </div>
      {/* Skill 6 */}
     <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <TbBrandJavascript className="text-xl font-bold" />
           </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            JavaScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                <div className="absolute bg-blue-500 h-1 rounded-xl w-[70%]"></div>
          </div>
          <p className="font-bold text-blue-500 text-right">70%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
) 
}
export default Skill ;