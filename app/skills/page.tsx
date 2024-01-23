import React from "react";
import Image from "next/image";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { LiaNode } from "react-icons/lia";
import { FaJava } from "react-icons/fa6";

const Skills =()=>{
    return(
        
        <div className="bg-cover  bg-center min-h-screen items-center bg-gradient-to-l from-indigo-400 from-10% via-sky-500 via-30% to-emerald-400 to-90%">
            <div className="flex w-full items-center "> <span className="mx-auto py-5 font-mono text-4xl text-white">Skills</span></div>
            <div className="mx-auto md:my-16 grid grid-cols-2 w-[80%] md:grid-cols-3 gap-4 md:w-[60%]">
                <div className=" mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-orange-500 hover:scale-110 hover:bg-white">
                    <SiHtml5 className="   text-[7rem]"></SiHtml5></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-500 hover:scale-110 hover:bg-white">
                
                    <FaCss3Alt className="  text-[7rem]"></FaCss3Alt></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-sky-400 hover:scale-110 hover:bg-white">
                
                    <SiTailwindcss className="  text-[7rem]"></SiTailwindcss></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:scale-110 hover:bg-yellow-300 hover:text-black">
              
                    <IoLogoJavascript className="   text-[7rem]"></IoLogoJavascript></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-blue-400 hover:scale-110 hover:bg-white">
              
                    <FaReact className="    text-[7rem]"></FaReact></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-black hover:scale-110 hover:bg-white ">
              
                    <TbBrandNextjs className="  text-[7rem]"></TbBrandNextjs></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-green-700 hover:scale-110 hover:bg-white">
                <LiaNode className="  text-[7rem]"/>
                    </div>   
                    <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-red-600 hover:scale-110 hover:bg-white">
                <FaJava className="  text-[7rem]"/>
                    </div>
            </div>
        </div>
       
    )
}
export default Skills;