import Nikep from "./Nikep.png"
import Puma2 from "./Puma2.png"
import Addidas2 from "./addidas3.png"
import crocs from "./Crocs.png"
import S1 from "./S1.png"
import { Link } from "react-router-dom"
import Crocs from "./Navbar1/Crocs"

function Shoes(){
    return(
        <>
          <div id="Brands" className=" max-w-7xl m-auto mt-7 border-2 rounded-xl">
            <h2 className="text-center text-4xl font-bold py-0.5">Brands</h2>
            <ul className="flex justify-between">
                <li className="w-20"><Link to="/Nikeshoes"><img src={Nikep} alt="" /></Link></li>
                <li className="w-20"><Link to="/Addias"><img src={Addidas2} alt="" /></Link></li>
                <li className="w-20"><Link to="/puma"><img src={Puma2} alt="" /></Link></li>
                <li className="w-20"><Link to="/Crocs"><img src={crocs} alt="" /></Link></li>
            </ul>
          </div>
          <div className="w-100% h-4 bg-black mt-5"></div>
        </>
    )
}

export default Shoes;