// import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Product";
// import { addToCart } from "./Store/Cart"; // ✅ updated action
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import jorden from "./jorden.png";

// const ProductCart = (props) => {
//   const { id, name, price, image } = props.data;
//   const dispatch = useDispatch();

//   const carts = useSelector((store) => store.cart.items?.page1 || []); // ✅ targeting page1
//   console.log("Cart contents for page1:", carts);

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         page: 'page1', // ✅ tell which page's cart to update
//         productId: id,
//         quantity: 1,
//       })
//     );

//     toast.success("Your cart has been added!", {
//       position: "top-center",
//       autoClose: 3000,
//       theme: "dark",
//     });
//   };
//       // console.log("✅ Received order from backend:", order);
//       const amount = Math.round(price * 100);
//       const currency = "INR";
//       const receiptID="quer";
//       const PaymentHandler = async (e) => {
//         e.preventDefault();
//         console.log("💥 PaymentHandler clicked!");
      
//         try {
//           const response = await fetch("https://shoes-com-npq0.onrender.com/create-order", {
//             method: "POST",
//             body: JSON.stringify({
//               amount: amount,
//               currency: currency,
//               receipt: receiptID,
//             }),
//             headers: {
//               "content-type": "application/json",
//             },
//           });
      
//           if (!response.ok) {
//             throw new Error("Failed to create order");
//           }
      
//           const order = await response.json();
//           console.log("✅ Received order:", order);
      
//           if (!order.id) {
//             throw new Error("Order ID missing from response");
//           }
      
//           var options = {
//             key: "rzp_live_6LpDZfFVVBQ2RS",
//             amount: amount,
//             currency: currency,
//             name: "SHOES.COM",
//             description: "no.1 quality shoes",
//             image: jorden,
//             order_id: order.id, // ✅ Now safe
//             handler: async function (response) {
//               const body = { ...response };
      
//               const validateres = await fetch("https://shoes-com-npq0.onrender.com/create-order/validate", {
//                 method: "POST",
//                 body: JSON.stringify(body),
//                 headers: {
//                   "content-type": "application/json",
//                 },
//               });
//               const jsonres = await validateres.json();
//               console.log(jsonres);
//             },
//             prefill: {
//               name: "Gaurav Kumar",
//               email: "gaurav.kumar@example.com",
//               contact: "9000090000",
//             },
//             notes: {
//               address: "Razorpay Corporate Office",
//             },
//             theme: {
//               color: "#3399cc",
//             },
//           };
      
//           var rzp1 = new window.Razorpay(options);
//           rzp1.open();
      
//         } catch (error) {
//           console.error("💥 Payment error:", error.message);
//           toast.error(error.message || "Something went wrong");
//         }
//       };
      
    
  
//     return (
//       <>
//         <div className="flex flex-row gap-6">
//           <div className="w-80 border-2 rounded-xl m-5 relative group overflow-hidden">
//             <img
//               src={image}
//               alt={name}
//               className="w-80 rounded-xl transition-transform duration-300 group-hover:scale-110"
//             />
//             {/* <div className="w-full ">
//               <button className="bg-black hover:bg-gray-400 w-full h-10 text-white font-bold py-2 px-4 rounded-b-xl ">View details</button>
//             </div> */}
//             {/* <h2 className="ml-2">{name}</h2>
//             <h2 className="ml-2">MRP:₹{price}</h2>
//             <div className="flex justify-between">
//               <span>
//                 <button
//                   onClick={PaymentHandler} // Now handled inside React
//                   className="bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-6"
//                 >
//                   BUY NOW
//                 </button>
//               </span>
//               <span>
//                 <button
//                    onClick={handleAddToCart} 
//                 // onClick={() => alert("Button clicked!")}
//                   className="bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5 flex justify-center items-center mr-2"
//                 >
//                   ADD TO CART
//                 </button>
//               </span>
//             </div> */}
//              <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
//                  <h2 className="ml-2">{name}</h2>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
  
//   export default ProductCart;

import { Link } from "react-router-dom";
import ViewDetails from "./Viewdetails";

const ProductCart = (props) => {
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
};

export default ProductCart;

