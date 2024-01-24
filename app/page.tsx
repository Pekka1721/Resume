'use client';
import { url } from "inspector"
import Image from "next/image"
export default function Page() {
  return (
    <>
      <div className="bg-cover  bg-center min-h-screen flex items-center bg-gradient-to-tr from-indigo-400 from-10% via-sky-500 via-30% to-emerald-400 to-90% opacity-90">
        <div className="grid gap-y-6 my-2 place-items-start w-min md:w-max h-min  mx-auto border-2 border-white p-5">
            <p className=" text-white text-6xl font-mono  hover:-translate-y-2">Hi</p>
            <p className=" text-white text-6xl font-mono text-start hover:-translate-y-2">I'm Rajender</p> 
          <p className="text-white font-mono text-xl mx-3 text-start"> Currently working as Frontend/UI Developer and looking for opportunities to build amazing products. <br/> Looking forward to meet amazing people
          </p></div>

      </div>
    </>
  )
}