import { useEffect, useState } from "react";
import { Product2 } from "./productcarts/Product2";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity3 } from "./Store/Cart"; 
import jorden from "./jorden.png";

function Cartitems3(props) {
    const { productId } = props.data;
    const [detail, setDetail] = useState({});
    const dispatch = useDispatch();

    
    const cartItem = useSelector(state =>
        state.cart.items3.find(item => item.productId === productId)
    );
    const quantity = cartItem?.quantity || 1; 

    useEffect(() => {
        const findDetail = Product2.find(product => product.id === productId);
        setDetail(findDetail || {}); 
    }, [productId]);

    const handlePlusQuantity = () => {
        dispatch(changeQuantity3({
            productId: productId,
            quantity: quantity + 1 
        }));
    };

    const handleMinusQuantity = () => {
        if (quantity > 1) {
            dispatch(changeQuantity3({
                productId: productId,
                quantity: quantity - 1
            }));
        }
    };

    const amount = Math.round(detail.price * quantity * 100);
      const currency = "INR";
      const receiptID="quer";
      const PaymentHandler = async (e) => {
        e.preventDefault();
        console.log("💥 PaymentHandler clicked!");
      
        try {
          const response = await fetch("https://shoes-com-npq0.onrender.com/create-order", {
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
            image: jorden,
            order_id: order.id, // ✅ Now safe
            handler: async function (response) {
              const body = { ...response };
      
              const validateres = await fetch("https://shoes-com-npq0.onrender.com/create-order/validate", {
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

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            <div className="w-80 border-2 rounded-xl m-5 max-w-screen pb-1">
                <img src={detail.image} alt={detail.name} className="w-96 rounded-xl hover:scale-110"/>
                <h2 className="ml-2">{detail.name}</h2>
                <h2 className="ml-2">{detail.price}</h2>
                <div className="flex">
                    <button onClick={handleMinusQuantity} className="bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5">-</button>
                    <span>{quantity}</span>
                    <button onClick={handlePlusQuantity} className="bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5">+</button>
                    <button onClick={PaymentHandler}className="bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5">BUY NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Cartitems3;
