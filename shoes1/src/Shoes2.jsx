import { useState } from "react";
import { Product } from "./Product"
import Productcart from "./Productcart"
import S1 from "./S1.png"
function Shoes2(){

    return(
        <>
       { <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
       {
            Product.map((product,key) =>
                <Productcart key={key} data={product}/>
            )
        }
       </div>}
       <div className="w-100% h-4 bg-black mt-0 ">

       </div>
       
        </>
    )
}

export default Shoes2;