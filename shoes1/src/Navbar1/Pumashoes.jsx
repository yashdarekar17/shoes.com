import { Outlet } from "react-router-dom"
import { Product3 } from "../productcarts/Product3"
import Productcart from "../Productcart"
import { Link } from "react-router-dom";
import jorden from "../jorden.png";
import Productcart3 from "../Productcart3";
import Productcart4 from "../Productcart4";
import Header2 from "../Header2";


function Pumashoes(){

    return(<>
      <div className=" h-3/5 relative mt-0">
      <Header2/>

      </div>
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {
            Product3.map((Product,key) =>
                <Productcart4 key={key} data={Product}/>
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

export default Pumashoes