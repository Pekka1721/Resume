import React from "react";
import Image from "next/image";
const Education =()=>{
    return(
        <>
        <div className="bg-cover bg-center min-h-screen  items-center grid grid-row-2 bg-gradient-to-tr from-indigo-400 from-10% via-sky-500 via-30% to-emerald-400 to-90%">
            <div>
            <div className="flex w-full items-center "> <span className="mx-auto py-5 font-mono text-4xl text-white">Education</span></div>
            </div>
        
        <div className="mx-auto md:my-5 grid grid-cols-1 w-[80%] md:w-[60%]  gap-4">
            <div className="bg-gray-100 w-[100%] grid grid-cols-2 py-4 font-mono shadow-2xl rounded mix-blend-lighten">
                <div className="space-y-4 p-[10%] ">
                        <span className="font-bold">2017 - 2021</span>
                        <p>Jawaharlal Nehru Technological University</p>
                        <p>B-Tech</p>
                        <p>Hyderabad, India</p>
                </div>
                <div className="py-[20%] px-4"><p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
I’m a great place for you to tell a story and let your users know a little more about you</p></div>
            </div>
            <div className="bg-gray-100 w-[100%] grid grid-cols-2 py-4 font-mono shadow-2xl rounded mix-blend-lighten">
                <div className="space-y-4 p-[10%] ">
                        <span className="font-bold">2015 - 2017</span>
                        <p>Telangana Board of Intermediate Education</p>
                        <p>High-School-12th</p>
                        <p>Hyderabad, India</p>
                </div>
                <div className="py-[20%] px-4"><p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
I’m a great place for you to tell a story and let your users know a little more about you</p></div>
            </div>
            <div className="bg-gray-100 w-[100%] grid grid-cols-2 py-4 font-mono shadow-2xl rounded mix-blend-lighten">
                <div className="space-y-4 p-[10%] ">
                        <span className="font-bold">2014 - 2015</span>
                        <p>Telangana SSC</p>
                        <p>School-10th</p>
                        <p>Hyderabad, India</p>
                </div>
                <div className="py-[20%] px-4"><p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
I’m a great place for you to tell a story and let your users know a little more about you</p></div>
            </div>
         
        </div>
        </div>
        </>
    )
}
export default Education;