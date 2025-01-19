import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity2 } from "./Store/Cart";
import { Product3 } from "./productcarts/Product3";
function Cartitems4(props){
    const {productId,quantity} = props.data;
    const[detail,setdetail]= useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        const findDetail = Product3.filter(product=> product.id === productId)[0];
        
       setdetail(findDetail)
      
    },[productId])
   
    console.log(detail)
    const handleminusQuantity =()=>{
        dispatch(changeQuantity2({
            productId: productId,
            quantity:quantity-1

        }))
    }
    const handleplusQuantity =()=>{
        dispatch(changeQuantity2({
            productId: productId,
            quantity:quantity+1

        }))
    }
    
    return(
         <>
         <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
         <div className=" w-80  border-2 rounded-xl m-5 max-w-screen pb-1">
            <img src={detail.image} alt="" srcset=""  className="w-96 rounded-xl hover:scale-110"/>
            <h2 className="ml-2">{detail.name}</h2>
            <h2 className="ml-2">{detail.price}</h2>
            <div className="flex">
           < span><button onClick={()=>handleplusQuantity(quantity-1)} className="  bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center ">+</button></span>
           <span>{quantity}</span>
            <span><button onClick={()=>handleminusQuantity(quantity+1)} className=" bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-2">-</button></span>
            < span><button className="  bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-6 ">BUY NOW</button></span>
            </div>

            
        </div>
         </div>
        
         </>
    )
}
export default Cartitems4