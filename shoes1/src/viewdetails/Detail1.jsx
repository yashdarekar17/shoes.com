import { useDispatch, useSelector } from "react-redux"

import { addtocart } from "../Store/Cart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Detail1({data}){
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
       
      const amount= 100;
      const currency="INR";
       const receiptID="qwsaql";
      const PaymentHandler =async(e)=>{
        const response = await fetch("http://localhost:8000/create-order",{
            method:"POST",
            body:JSON.stringify({
              amount:amount,
              currency:currency,
              receipt:receiptID,
            }),
            headers:{
              "content-type":"application/json",
            },
        });
        const order=await response.json();
        console.log(order)

        var options = {
          key: "rzp_live_6LpDZfFVVBQ2RS", // Enter the Key ID generated from the Dashboard
          amount:amount,
          currency:currency,
          name: "SHOES.COM",
          description: "no.1 quality shoes",
          image: "https://example.com/your_logo",
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: async function (response){
             const body={
              ...response,
             }

            const validateres = await fetch("http://localhost:8000/create-order/validate",{
                  method:"POST",
                  body:JSON.stringify(body),
                  headers:{
                    "content-type":"application/json",
                  },
             })
             const jsonres=await validateres.json();
             console.log(jsonres)
          },
          // handler: function (response) {
          //   alert("Payment successful: " + response.razorpay_payment_id);
          // },
          "prefill": {
              "name": "Gaurav Kumar",
              "email": "gaurav.kumar@example.com",
              "contact": "9000090000"
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#3399cc"
          }
      };
      var rzp1 = new window.Razorpay(options);
      // rzp1.on('payment.failed', function (response){
      //         alert(response.error.code);
      //         alert(response.error.description);
      //         alert(response.error.source);
      //         alert(response.error.step);
      //         alert(response.error.reason);
      //         alert(response.error.metadata.order_id);
      //         alert(response.error.metadata.payment_id);
      // });
      
      rzp1.open();
      e.preventDefault();
}
    return(
        <>
            <div className="flex flex-col items-center p-6">
        <div className="max-w-lg shadow-lg rounded-2xl p-4">
        <img
          src={image}
          alt="Nike Air Force 1"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="mt-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-600 mt-2">
            Classic and timeless, the Nike Air Force 1 is a staple in sneaker culture. Featuring a sleek design with premium suede and mesh panels, this sneaker ensures both style and comfort.
          </p>
          <p className="text-lg font-semibold mt-2">{price}</p>
          <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <button onClick={PaymentHandler}>BUY NOW</button>
        </div>
      </div>
    </div>
        </>
    )
}

export default Detail1;