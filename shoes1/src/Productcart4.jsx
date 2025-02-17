import { useDispatch, useSelector } from "react-redux"
import { Product } from "./Product";
import { addtofourCart } from "./Store/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Productcart4(props){
    const carts = useSelector(store => store.cart.items);
    console.log(carts);
    const {id, name ,price,image}=props.data;
    const dispatch= useDispatch();
    const handleaddtocart =()=>{
        dispatch(addtofourCart({
            productId:id,
            quality:1,
        }))
        toast.success("Your cart has been added!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
    }
    

    return(
       <>
       <div className="flex flex-row gap-6">
       <div className=" w-80 border-2 rounded-xl m-5 pb-1">
            <img src={image} alt="" srcset=""  className="w-80 rounded-xl hover:scale-110"/>
            <h2 className="ml-2">{name}</h2>
            <h2 className="ml-2">{price}</h2>
            <div className="flex">
           < span><button className="  bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-6 ">BUY NOW</button></span>
            <span><button onClick={handleaddtocart} className=" bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-2">ADD TO CARD</button></span>
            </div>
            
        </div>

       </div>

       </>
        
    )
}

export default Productcart4