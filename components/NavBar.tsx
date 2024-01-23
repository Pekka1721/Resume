import React, { FC } from "react";
import Page from "../app/page";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { MdAlternateEmail, MdOutlineWorkOutline } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

interface MainLayout {
  children: any;
}

const NavBar: FC<any> = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-400 to-90% border-b-2 shadow-xl shadow-sky-100 text-white items-center flex h-16 justify-between px-2 md:px-6">
        <div className="w-50">
          <span className="flex p-4 font-bold font-mono">Rajender Reddy</span>
        </div>
        <div className="flex flex-row gap-5 justify-evenly">
          <Link
            className=" flex items-center gap-2  font-mono hover:font-bold"
            href={"/"}
          >
            <IoPersonOutline />
            <span className="hidden md:inline ">Home</span>
          </Link>
          <Link
            className="flex items-center gap-2 font-mono hover:font-bold"
            href={"/education"}
          >
            <PiStudentBold />
            <span className="hidden md:inline ">Education</span>
          </Link>
          <Link
            className="flex items-center gap-2 font-mono hover:font-bold"
            href={"/skills"}
          >
            <FaCode />
            <span className="hidden md:inline ">Skills</span>
          </Link>
          <Link
            className="flex items-center gap-2 font-mono hover:font-bold"
            href={"/portfolio"}
          >
            <MdOutlineWorkOutline />
            <span className="hidden md:inline ">Portfolio</span>
          </Link>
          <Link
            className="flex items-center gap-2 font-mono hover:font-bold"
            href={"/contact"}
          >
            <MdAlternateEmail />
            <span className="hidden md:inline ">Contact</span>
          </Link>
          
          <Link
          className="flex items-center gap-2 font-mono hover:font-bold"
           href={"https://flowcv.com/resume/2a2sm3af5b"} target="_blank">< FiDownload />
          <span className="hidden md:inline ">Resume</span>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
