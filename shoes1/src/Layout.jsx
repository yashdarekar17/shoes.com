import Header from "./Header"
import Shoes2 from "./Shoes2"
import Shoes from "./Shoes"
import Shoes3 from "./Shoes3"
import Shoes4 from "./Shoes4"
import Shoes5 from "./Shoes5"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Layout(){
    return(
        <>
       
       
         <div>
            <Header/>
         </div>
        <div>
         < Shoes/>
        </div>
        <div>
            <Shoes2/>
        </div>
        <div>
        <Shoes3/>
        </div>
        <div>
        <Shoes4/>
        </div>
        <div>
         <Shoes5/>
        </div>
        <div className="">
            <Footer/>
        </div>
        </>
        
    )
}

export default Layout;