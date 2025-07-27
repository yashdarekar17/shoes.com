import { Outlet } from "react-router-dom"
import { Product4 } from "../productcarts/Product4"
import Productcart from "../Productcart"
import { Link } from "react-router-dom";
import jorden from "../jorden.png";
import Productcart5 from "../Productcart5";
import Header2 from "../Header2";


function Crocs(){

    return(<>

<div className=" h-3/5 relative mt-0">
   <Header2/>

      </div>
        <div>
         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
         {
            Product4.map((Product,key) =>
                <Productcart5 key={key} data={Product}/>
            )
        }
         </div>
       
           
          <div className="">
              <Outlet/>
          </div>
          <div>
              
          </div>
        </div>
  
      </>)
}

export default Crocs