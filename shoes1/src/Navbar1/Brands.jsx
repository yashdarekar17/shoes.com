import { Link } from "react-router-dom"
import Productcart from "../Productcart"
import Nikep from "../Nikep.png"
import Puma2 from "../Puma2.png"
import ad from"../ad.png";
import crocs from "../Crocs.png"
import { Product } from "../Product"
import Footer from "../Footer"
import Header2 from "../Header2"
function Brands(){
    return(
       <>
        
       <div id="Brands" className=" max-w-7xl m-auto mt-7 border-2 rounded-xl">
            <h2 className="text-center text-4xl font-bold py-0.5">Brands</h2>
            <ul className="flex justify-between">
                <li className="w-20"><Link to="/Nikeshoes"><img src={Nikep} alt="" /></Link></li>
                <li className="w-20"><Link to="/Addias"><img src={ad} alt="" /></Link></li>
                <li className="w-20"><Link to="/puma"><img src={Puma2} alt="" /></Link></li>
                <li className="w-20"><Link to="/Crocs"><img src={crocs} alt="" /></Link></li>
            </ul>
          </div>
          <div className="w-100% h-4 bg-black mt-5"></div>
          { <div className=" mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
       {
            Product.map((product,key) =>
                <Productcart key={key} data={product}/>
            )
        }
       </div>}
       <div className="w-100% h-4 bg-black mt-0 ">

       </div>
       <Footer/>
       </>

    )

}
export default Brands
