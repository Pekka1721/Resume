import React from "react";

const Portfolio =()=>{
    return(
    <>
        <div className="bg-cover bg-center min-h-screen  items-center grid grid-row-2 bg-gradient-to-tr from-indigo-400 from-10% via-sky-500 via-30% to-emerald-400 to-90%">
            <div>
            <div className="flex w-full items-center "> <span className="mx-auto py-5 font-mono text-4xl text-white">Projects</span></div>
            </div>
        
        <div className="mx-auto md:my-5 grid grid-cols-1 w-[80%] md:w-[60%]  gap-4">
            <div className="bg-gray-100 w-[100%] grid grid-cols-2 py-4 font-mono shadow-2xl rounded mix-blend-lighten">
                <div className="space-y-4 p-[10%] ">
                        <span className="font-bold">Sept 2023 - Present</span>
                        <p>Agile One</p>
                        <p>Frontend Developer</p>
                        <p>Unified IT Services</p>
                </div>
                <div className="py-[20%] px-4">
                    <div className="flex">
                    <p> <p>Worked as Frontend/UI Developer</p> 
    <p>•Enhanced the application features by effectively fixing the bugs and optimized the performance</p> 
<p>•Leveraged Next.JS features for routing</p> 
<p>•Implemented Currencies module and performed CRUD functionality on currency</p> 
<p>•Implemented Custom Themes module for the application</p> 
<p>•Used AzureGit for version Control</p></p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 w-[100%] grid grid-cols-2 py-4 font-mono shadow-2xl rounded mix-blend-lighten">
                <div className="space-y-4 p-[10%] ">
                        <span className="font-bold">Aug 2023 – Aug 2023</span>
                        <p>Ticketing System</p>
                        <p>Frontend/UI Intern</p>
                        <p>Unified IT Services</p>
                </div>
                <div className="py-[20%] px-4">
                    <div className="flex">
                        <p>
                            <p>Worked as UI/Intern </p>
                            <p>•Fixed UI Bugs</p>
                            <p>•Worked in support team to resolve issues with clients and users</p>
                        </p>
                    </div>
                    </div>
            </div>
         
        </div>
        </div>
        </>
    )
}
export default Portfolio;