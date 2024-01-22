"use client"
import React,{FC, useEffect, useState} from "react";

interface IFooter{
    children:any;
}




const Footer:FC<any>=()=>{
    const [slok,setSlok] = useState("");
    useEffect(()=>{
        const getQuote =async () => {
         const query = await fetch(`https://bhagavadgitaapi.in/slok/4/8`)
         const res = await query.json();
         setSlok(res.slok)   
        }
        getQuote();
    },[])

    return(
        <>
        <footer className="fixed bottom-0 w-full   justify-center text-center ">
            <div className=" bg-white text-gray-500 px-3 items-center">
                <p className="text-orange-500">|| {slok}</p>
                <span className="">Rajender Reddy {String.fromCodePoint(0x00A9)} {new Date().getFullYear()}</span>
            </div>
        </footer>
        </>
    )
}
export default Footer;