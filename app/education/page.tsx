import React from "react";
import Image from "next/image";
const Education =()=>{
    return(
        <>
        <div className="bg-cover bg-center min-h-screen " style={{ backgroundImage: 'url("assets/background.jpg")' }}>
            <div>
            <h2 className=" text-white text-4xl font-mono flex justify-center items-center ">Education</h2>
            </div>
        
        <div className="flex max-w-full  gap-2 md:flex-row ">
            <div className="basis-1/3 mx-4">
                Education -1 <Image src={'/assets/background.jpg'} alt="image" width={400} height={400}></Image>
            </div>
            <div className="basis-1/3 mx-4">
                Education -2 <Image src={'/assets/background.jpg'} alt="image" width={400} height={400}></Image>
            </div>
            <div className="basis-1/3 mx-4">
                Education -3<Image src={'/assets/background.jpg'} alt="image" width={400} height={400}></Image>
            </div>
         
        </div>
        </div>
        </>
    )
}
export default Education;