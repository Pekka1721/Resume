import React,{FC} from "react"
import Page from "../app/page"

interface MainLayout{
    children:any
}

const NavBar:FC<MainLayout> = ()=>{
    return(
       <>
       <div>
        NavBar
        <Page></Page>
       </div>
       
       </>
    )
}
export default NavBar