
import { Outlet } from "react-router-dom"
import { Product1 } from "../productcarts/Product1"
import Productcart2 from "../Productcart2"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../Store"
import Shoes from "../Shoes"
import { Link } from "react-router-dom";
import jorden from "../jorden.png";
import Header2 from "../Header2"

const Nikeshoes= (props) => {
    
    return(<>
      <div className="  relative mt-0">
      <Header2/>

      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
        
        {
            Product1.map((Product,key) =>
                <Productcart2 key={key} data={Product}/>
            )
        }
        
      </div>
      <div className="">
              <Outlet/>
          </div>
     
    </>)
}

export default Nikeshoes;