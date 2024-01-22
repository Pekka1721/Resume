'use client';
import { url } from "inspector"
import Image from "next/image"
export default function Page() {
  return (
    <>
      <div className="bg-cover  bg-center min-h-screen flex items-center" style={{ backgroundImage: 'url("assets/background.jpg")' }}>
        <div className="grid gap-y-6 place-items-center w-screen">
        
            <span className=" text-white text-6xl font-mono  hover:-translate-y-2">Hi</span>
            <span className=" text-white text-6xl font-mono text-center hover:-translate-y-2">I'm Rajender</span> 
          
          <p className="text-white font-mono text-xl mx-3 text-center"> Currently working as Frontend/UI Developer and looking for opportunities to build amazing products. <br/> Looking forward to meet amazing people
          </p></div>

      </div>
    </>
  )
}