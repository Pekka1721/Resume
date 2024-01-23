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
        
        <div className="bg-cover  bg-center min-h-screen items-center" style={{ backgroundImage: 'url("assets/background.jpg")' }}>
            <div className="flex w-full items-center "> <span className="mx-auto py-5 font-mono text-4xl text-white">Skills</span></div>
            <div className="mx-auto md:my-16 grid grid-cols-2 w-[80%] md:grid-cols-3 gap-4 md:w-[60%]">
                <div className=" mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-400 hover:scale-110">
                    <SiHtml5 className="   text-[7rem]"></SiHtml5></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-400 hover:scale-110">
                
                    <FaCss3Alt className="  text-[7rem]"></FaCss3Alt></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-400 hover:scale-110">
                
                    <SiTailwindcss className="  text-[7rem]"></SiTailwindcss></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-400 hover:scale-110">
              
                    <IoLogoJavascript className="   text-[7rem]"></IoLogoJavascript></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-400 hover:scale-110">
              
                    <FaReact className="    text-[7rem]"></FaReact></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-400 hover:scale-110">
              
                    <TbBrandNextjs className="  text-[7rem]"></TbBrandNextjs></div>
                <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-400 hover:scale-110">
                <LiaNode className="  text-[7rem]"/>
                    </div>   
                    <div className="mx-auto p-3 mix-blend-multiply border-2 border-indigo-400 rounded-md  bg-red-200 hover:cursor-pointer hover:mix-blend-normal hover:text-indigo-400 hover:scale-110">
                <FaJava className="  text-[7rem]"/>
                    </div>
            </div>
        </div>
       
    )
}
export default Skills;