import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "./Store/Cart";
import { Product4 } from "./productcarts/Product4";
function Cartitems5(props){
    const {productId,quantity} = props.data;
    const[detail,setdetail]= useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        const findDetail = Product4.filter(product=> product.id === productId)[0];
        
       setdetail(findDetail)
      
    },[productId])
   
    console.log(detail)
    const handleminusQuantity =()=>{
        dispatch(changeQuantity({
            productId: productId,
            quantity:quantity-1

        }))
    }
    const handleplusQuantity =()=>{
        dispatch(changeQuantity({
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
export default Cartitems5