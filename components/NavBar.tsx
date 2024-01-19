import React,{FC} from "react"
import Page from "../app/page"
import Link from "next/link"


interface MainLayout{
    children:any
}

const NavBar:FC<any> = ()=>{
    return(
       <>  
        <nav className="bg-green-100">
            <div className="mx-auto w-auto px-2 sm:px-6  lg:px-8">
            <div className="relative flex h-16 items-center justify-around">
        <Link href={'/'} className="hover:font-bold  active:">Home</Link>
        <Link href={'/education'}>Education</Link>
        <Link href={'/skills'}>Skills</Link>
        <Link href={'/portfolio'}>Portfolio</Link>
        <Link href={'/contact'}>Contact</Link>

                </div>
            
            </div>
            
        
        </nav>
       </>
    )
}
export default NavBar