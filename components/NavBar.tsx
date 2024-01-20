import React, { FC } from "react";
import Page from "../app/page";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { MdAlternateEmail, MdOutlineWorkOutline } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

interface MainLayout {
  children: any;
}

const NavBar: FC<any> = () => {
  return (
    <>
      <nav className="bg-white items-center flex h-16 justify-between px-2 md:px-6">
        <div className="w-50">
          <span className="flex p-4 font-serif font-bold">Rajender Reddy</span>
        </div>
        <div className="flex flex-row gap-5 justify-evenly">
          <Link className=" flex items-center gap-2  hover:text-green-600" href={"/"}>
            <IoPersonOutline /><span className="hidden md:inline ">Home</span>
          </Link>
          <Link className="flex items-center gap-2 hover:text-green-600" href={"/education"}>
            <PiStudentBold /><span className="hidden md:inline ">Education</span>
          </Link>
          <Link className="flex items-center gap-2 hover:text-green-600" href={"/skills"}>
            <FaCode /><span className="hidden md:inline ">Skills</span>
          </Link>
          <Link className="flex items-center gap-2 hover:text-green-600" href={"/portfolio"}>
            <MdOutlineWorkOutline /><span className="hidden md:inline ">Portfolio</span>
          </Link>
          <Link className="flex items-center gap-2 hover:text-green-600" href={"/contact"}>
            <MdAlternateEmail /><span className="hidden md:inline ">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
