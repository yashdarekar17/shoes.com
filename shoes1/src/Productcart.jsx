import { useDispatch, useSelector } from "react-redux"
import { Product } from "./Product";
import { addtocart } from "./Store/Cart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductCart = ({ data }) => {
    const { id, name, price, image } = data;
    const dispatch = useDispatch();
    const carts = useSelector((store) => store.cart.items);
    
    console.log(carts);
  
    const handleAddToCart = () => {
        console.log("handleAddToCart function executed!"); // Debugging log
      
        dispatch(
          addtocart({
            productId: id,
            quantity: 1,
          })
        );
      
        toast.success("Your cart has been added!", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      };
      
      
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script); // Cleanup on unmount
        };
      }, []);
  
      async function initiatePayment() {
        try {
          console.log("Initiating Payment...");
      
          // Fetch Razorpay key from backend
          const response = await fetch("/razorpay-key");
          const { key } = await response.json();
          console.log("Received Razorpay Key:", key);
      
          // Create an order in the backend
          console.log("Creating order with amount:", price * 100);
          const orderResponse = await fetch("http://localhost:8000/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: price * 100, // Convert ₹ to paise
              currency: "INR",
              receipt: `receipt#${id}`,
            }),
          });
          
          const order = await orderResponse.json();
          console.log("Order response:", order);
          
      
          
          // Razorpay options
          const options = {
            key: RAZORPAY_KEY_ID, // Use the key from API response
            amount: order.amount, 
            currency: order.currency,
            name: "Shoes.com",
            description: "Shoes.com collection",
            image: image,
            order_id: order.id, 
            handler: async function (response) {
              console.log("Payment successful. Verifying...");
      
              const verificationResponse = await fetch("/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });
      
              const verificationResult = await verificationResponse.json();
              console.log("Payment verification result:", verificationResult);
      
              if (verificationResult.status === "success") {
                alert("Payment successful and verified!");
              } else {
                alert("Payment verification failed!");
                console.error("Payment verification failed:", verificationResult);
              }
            },
            prefill: {
              name: "Your Name",
              email: "youremail@example.com",
              contact: "9999999999",
            },
            theme: {
              color: "#F37254",
            },
          };
      
          // Open Razorpay payment modal
          const rzp1 = new Razorpay(options);
          rzp1.open();
        } catch (error) {
          console.error("Error in payment initiation:", error);
          alert("Something went wrong. Please try again.");
        }
      }
      
  
    return (
      <>
        <div className="flex flex-row gap-6">
          <div className="w-80 border-2 rounded-xl m-5 pb-1">
            <img
              src={image}
              alt={name}
              className="w-80 rounded-xl hover:scale-110"
            />
            <h2 className="ml-2">{name}</h2>
            <h2 className="ml-2">₹{price}</h2>
            <div className="flex">
              <span>
                <button
                  onClick={initiatePayment} // Now handled inside React
                  className="bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-6"
                >
                  BUY NOW
                </button>
              </span>
              <span>
                <button
                   onClick={handleAddToCart} 
                // onClick={() => alert("Button clicked!")}
                  className="bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-2"
                >
                  ADD TO CART
                </button>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ProductCart;