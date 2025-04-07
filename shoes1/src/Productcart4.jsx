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

    const amount = Math.round(price * 100);
      const currency = "INR";
      const receiptID="quer";
      const PaymentHandler = async (e) => {
        e.preventDefault();
        console.log("💥 PaymentHandler clicked!");
      
        try {
          const response = await fetch("http://localhost:8000/create-order", {
            method: "POST",
            body: JSON.stringify({
              amount: amount,
              currency: currency,
              receipt: receiptID,
            }),
            headers: {
              "content-type": "application/json",
            },
          });
      
          if (!response.ok) {
            throw new Error("Failed to create order");
          }
      
          const order = await response.json();
          console.log("✅ Received order:", order);
      
          if (!order.id) {
            throw new Error("Order ID missing from response");
          }
      
          var options = {
            key: "rzp_live_6LpDZfFVVBQ2RS",
            amount: amount,
            currency: currency,
            name: "SHOES.COM",
            description: "no.1 quality shoes",
            image: "https://example.com/your_logo",
            order_id: order.id, // ✅ Now safe
            handler: async function (response) {
              const body = { ...response };
      
              const validateres = await fetch("http://localhost:8000/create-order/validate", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                  "content-type": "application/json",
                },
              });
              const jsonres = await validateres.json();
              console.log(jsonres);
            },
            prefill: {
              name: "Gaurav Kumar",
              email: "gaurav.kumar@example.com",
              contact: "9000090000",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
      
          var rzp1 = new window.Razorpay(options);
          rzp1.open();
      
        } catch (error) {
          console.error("💥 Payment error:", error.message);
          toast.error(error.message || "Something went wrong");
        }
      };
    
    

    return(
       <>
       <div className="flex flex-row gap-6">
       <div className=" w-80 border-2 rounded-xl m-5 pb-1">
            <img src={image} alt="" srcset=""  className="w-80 rounded-xl hover:scale-110"/>
            <h2 className="ml-2">{name}</h2>
            <h2 className="ml-2">MRP:₹{price}</h2>
            <div className="flex">
           < span><button onClick={PaymentHandler} className="  bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-6 ">BUY NOW</button></span>
            <span><button onClick={handleaddtocart} className=" bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-2">ADD TO CARD</button></span>
            </div>
            
        </div>

       </div>

       </>
        
    )
}

export default Productcart4