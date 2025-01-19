import { Link } from "react-router-dom";
import jorden from "./jorden.png";
import Nike2 from "./Nike2.jpg";
import Nike3 from "./Nike3.jpg";
import Nike4 from "./Nike4.jpg";
import P4 from "./crocs4.webp";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function Header() {
  const [Totalquantity ,setTotalquantity]= useState(0)
  const carts = useSelector(store=> store.cart.items);
  useEffect(()=>{
    let total=0;
    carts.forEach(item =>  total += item.quantity );
    setTotalquantity(total);
  }, [carts])
  return (
    <>
      <div className=" h-3/5 relative mt-0">
        <div className=" w-full relative ">
          <img src={P4} alt="" className=" w-screen max-h-svh mt-0" />
        </div>
        <div className="mt-0 ">
          <div className="absolute top-0 right-0 left-0 mt-0">
             <div className="flex justify-between bg-white mt-0 absolute top-0 right-0 left-0  shadow-lg white-500/40  ">
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
              <button className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded mt-6 mx-2.5 flex justify-center items-center ">
                Get Started
              </button>
            </div>
             </div>
            
          </div>
        </div>
        <div className="w-100% h-4 bg-black">

        </div>
      </div>
    </>
  );
}
export default Header;
