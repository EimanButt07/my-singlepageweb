import Image from "next/image";
import Link from "next/link";
import React from "react";
const Project = () => {
    return (
        <div id="project">
            <section className="text-gray-600 body-font bg-cover bg-center  custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      I'm constantly exploring new ideas and tools to enhance my development process. 
      Keep an eye on this space for more TypeScript-based CLI projects and other full-stack 
      applications as I continue to grow as a developer.

</p>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/* Project 1 */}
      <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require('../../../public/assets/Projects/SimpleCalculator.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              SIMPLE CALCULATOR WITH TYPESCRIPT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Welcome to CalcBot!

            </h1>
            <p className="leading-relaxed">
            Fast math, right in your terminal. 
            Type, hit Enter, get results!
             </p>
             <Link target="_blank" href={"https://github.com/EimanButt07/TS-CLI-Simple-Calculator"}>
            <p className="leading-relaxed text-blue-500 hover:underline">View Project...</p>
            </Link>
         </div>
        </div>
      </div>
       {/* Project 2 */}
       <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require('../../../public/assets/Projects/To-DoApp.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              TO-DO APP WITH TYPESCRIPT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Welcome to TaskMaster!

            </h1>
            <p className="leading-relaxed">
            Your to-do list, simplified. Add, check off, 
            and stay organized—all from the terminal!
             </p>
             <Link target="_blank" href={"https://github.com/EimanButt07/TypeScriptTodo"}>
            <p className="leading-relaxed text-blue-500 hover:underline">View Project...</p>
            </Link>
         </div>
        </div>
      </div>
      {/* Project 3 */}
      <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require('../../../public/assets/Projects/ATMMachine.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              ATM MACHINE WITH TYPESCRIPT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Welcome to CashFlow!

            </h1>
            <p className="leading-relaxed">
            Instant access to your money—balance,
             withdraw, and transfer in a snap!

</p>
             <Link target="_blank" href={"https://github.com/EimanButt07/TS-CLI-ATM-MACHINE"}>
            <p className="leading-relaxed text-blue-500 hover:underline">View Project...</p>
            </Link>
         </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src= {require('../../../public/assets/Projects/NodeAssign.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            NODE_PROJECTS-getting-started-exercises.45-assignments

            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Welcome to NodeStarter!

            </h1>
            <p className="leading-relaxed line-clamp-2">
            Explore the fundamentals of Node.js with this collection of getting-started exercises. 
            Perfect for beginners and seasoned developers alike, dive into 45 hands-on assignments 
            to master essential Node.js 
            concepts and elevate your skills. Let's embark on this journey together
</p>
             <Link target="_blank" 
             href={"https://github.com/EimanButt07/NODE_PROJECTS-getting-started-exercises.45-assignments"}>
            <p className="leading-relaxed text-blue-500 hover:underline">View Project...</p>
            </Link>
         </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default Project
