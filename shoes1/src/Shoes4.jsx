import { Link } from "react-router-dom"
import Virat1 from "./Virat1.jpg"
function Shoes4(){
    return(
        <>
        <div className="mt-20 mb-20 text-center">
            <p className="text-4xl font-bold">ICONS, REINVENTED</p>
            <p className="text-4xl font-bold">SHOP THE LATEST & GREATEST</p>
            </div>
        <div className="relative flex justify-center ">
            <img src={Virat1} alt="" className=" h-full" />
            <div className="absolute top-1/3 left-5 ml-5  leading-10 text-white">
            <p className="mx-2.5 text-5xl font-medium ">FANTY x PVMA</p>
             <p className="mx-2.5 text-xl leading-10">THE AVANTI DROPS OCT 17</p>
             <div className="flex">
             <span><button className="bg-white hover:bg-gray-400 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center">SIGN UP NOW</button></span>
            <Link to={"/puma"}><span><button className="bg-white hover:bg-gray-400 text-black font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-cente">EXPLORE COLLECTION</button></span></Link> 
             </div>
            </div>
             
             
        </div>
        {/* <div className="w-100% h-4 bg-black mt-0 ">

             </div> */}
        
        </>
    )
}

export default Shoes4