import { Outlet } from "react-router-dom"
import { Product2 } from "../productcarts/Product2"
import Productcart from "../Productcart"
import { Link } from "react-router-dom";
import jorden from "../jorden.png";
import Productcart3 from "../Productcart3";
import Header2 from "../Header2";
// import jorden from "./store/jorden.png"

function Addiasshoe(){

    return(<>
        <div>
        <div className=" h-3/5 relative mt-0">
        <Header2/>

      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
      {
            Product2.map((Product,key) =>
                <Productcart3 key={key} data={Product}/>
            )
        }
      </div>
       
          <div className="">
              <Outlet/>
          </div>
          <div>
              
          </div>
        </div>
  
      </>
    )
}

export default Addiasshoe