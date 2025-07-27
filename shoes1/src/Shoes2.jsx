import { useState } from "react";
import { Product } from "./Product"
import Productcart from "./Productcart"
import S1 from "./S1.png"
function Shoes2(){

    return(
        <>
        <div className=" max-w-[97vw] m-auto mt-10 mb-10 ml-10 text-3xl font-bold">POPULAR RIGHT NOW</div>
       { <div className=" max-w-[97vw] m-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
       {
            Product.map((product,key) =>
                <Productcart key={key} data={product}/>
            )
        }
       </div>}
      
 {/* <div className="w-100% h-4 bg-black mt-0 ">
       </div> */}
       
        </>
    )
}

export default Shoes2;