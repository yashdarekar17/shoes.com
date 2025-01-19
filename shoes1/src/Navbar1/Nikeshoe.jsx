
import { Outlet } from "react-router-dom"
import { Product1 } from "../productcarts/Product1"
import Productcart2 from "../Productcart2"
import { useDispatch, useSelector } from "react-redux"
import { store } from "../Store"
import Shoes from "../Shoes"
import { Link } from "react-router-dom";
import jorden from "../jorden.png";

const Nikeshoes= (props) => {
    
    return(<>
      <div className="  relative mt-0">
        <div className="mt-0 ">
          <div className=" mt-0">
             <div className="flex justify-between bg-white mt-0 shadow-lg white-500/40  ">
             <div className="flex justify-center items-center ">
             <img src={jorden} className="mt-2 ml-6 w-20 flex" />
              <h2 className=" justify-center items-center ml-2 text-4xl mt-0  ">
                Shoes.com
              </h2>
            </div>

            <ul className="flex justify-center item-center mt-1 gap-7 text-xl ">
            <li className="hover:text-gray-500">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/Shopping">Shopping</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/Brands">Brands</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/Cart1">Add to card</Link>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Your delivery</a>
              </li>
            </ul>
            <div>
              <button className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded mt-1 mx-2.5 flex justify-center items-center ">
                Get Started
              </button>
            </div>
             </div>
            
          </div>
        </div>

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