import React,{FC} from "react"
import Page from "../app/page"
import Link from "next/link"
import { IoPersonOutline } from "react-icons/io5";
import {PiStudentBold } from "react-icons/pi"
import { MdAlternateEmail,MdOutlineWorkOutline  } from "react-icons/md";
import { FaCode } from "react-icons/fa6";



interface MainLayout{
    children:any
}

const NavBar:FC<any> = ()=>{
    return(
       <>  
        <nav className="bg-green-100">
            <div className="mx-auto w-auto px-2 sm:px-6  lg:px-8">
            <div className="flex flex-row h-16 items-center justify-around">
        <Link href={'/'}>< IoPersonOutline/></Link>
        <Link href={'/education'}><PiStudentBold  /> </Link>
        <Link href={'/skills'}><FaCode /></Link>
        <Link href={'/portfolio'}><MdOutlineWorkOutline /> </Link>
        <Link href={'/contact'}> <MdAlternateEmail /></Link>
            </div>
                </div>
            
            
            
        
        </nav>
       </>
    )
}
export default NavBar