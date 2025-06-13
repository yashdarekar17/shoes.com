import { Link } from "react-router-dom"
import jorden from "./jorden.png";
function Header2(){
    return(
        <>
        <div className="mt-0 ">
          <div className=" mt-0 mb-6">
             <div className="flex justify-between bg-white mt-0  shadow-lg white-500/40  ">
             <div className="flex justify-center items-center ">
              <img src={jorden} className="mt-2 ml-6 w-20 flex" />
              <h2 className=" justify-center items-center ml-2 text-4xl mt-0  ">
                Shoes.com
              </h2>
            </div>

            <ul className="flex justify-center item-center mt-6 gap-7 text-xl ">
            <li className="hover:text-gray-500">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/shop">Shopping</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/Brands">Brands</Link>
              </li>
              <li className="hover:text-gray-500">
                <Link to="/Cart1">Cart</Link>
              </li>
              {/* <li className="hover:text-gray-500">
                <a href="/delivery">Your delivery</a>
              </li> */}
            </ul>
            <div>
              <Link to="/Layout"><button className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded mt-6 mx-2.5 flex justify-center items-center ">
                Get started
              </button></Link>
            </div>
             </div>
            
          </div>
        </div>
        </>
    )
}

export default Header2
