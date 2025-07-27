import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Product";
import { addToCart } from "./Store/Cart"; // ✅ updated action
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import jorden from "./jorden.png";

const Productcart5 = (props) => {
  const { id, name, price, image } = props.data;
 
    

    return (
    <>
      <div className="flex flex-row gap-6">
        <div className="w-80 border-2 rounded-xl m-5 relative group overflow-hidden">
          <Link to={`/viewdetails/${id}`} >
            <img
              src={image}
              alt={name}
              className="w-80 rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm">MRP: ₹{price}</p>
              <p className="text-xs mt-2 underline">View Details</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Productcart5
