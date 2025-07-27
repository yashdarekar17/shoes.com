import { useParams } from "react-router-dom";
import Header2 from "./Header2";
import Footer from "./Footer";
import { AllProducts } from "./Allproducts.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store/Cart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jorden from "./jorden.png";
import ProductDetailsAccordion from "./ProductDetailsAccordion.jsx";
import { changeQuantity } from "./Store/Cart"; 

const ViewDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = AllProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [quantity,setquantity] = useState(1);

  const getPageFromProductID = (id)=>{
     if (id >= 1 && id <= 8) return "page1";
    if (id >= 11 && id <= 18) return "page2";
    if (id >= 19 && id <= 26) return "page3";
    if (id >= 27 && id <= 34) return "page4";
    if (id >= 35 && id <= 42)return "page5";
  }
  const page = getPageFromProductID(product.id)

  const handleAddToCart = () => {
    // You can change page dynamically based on context (example: from URL or product data)
    dispatch(
      addToCart({
        page:page, // Replace with actual page key if dynamic
        productId: product.id,
        quantity: 1,
      })
    );

    toast.success("Your cart has been added!", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
  };

  const handlePlusQuantity = () => {
  const newQuantity = quantity + 1;
  setquantity(newQuantity); 
  dispatch(changeQuantity({ page, productId: product.id, quantity: newQuantity }));
};

const handleMinusQuantity = () => {
  const newQuantity = quantity > 1 ? quantity - 1 : 1; 
  setquantity(newQuantity); 
  dispatch(changeQuantity({ page, productId: product.id, quantity: newQuantity }));
};
 

  const amount = Math.round(product.price *quantity * 100); // Razorpay requires paise
  const currency = "INR";
  const receiptID = "receipt_order_123"; // can be generated dynamically

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
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const order = await response.json();
      console.log("✅ Order created:", order);

      if (!order.id) {
        throw new Error("Order ID missing in response");
      }

      const options = {
        key: "rzp_live_6LpDZfFVVBQ2RS", // Replace with test key for dev
        amount: amount,
        currency: currency,
        name: "SHOES.COM",
        description: "no.1 quality shoes",
        image: jorden,
        order_id: order.id,
        handler: async function (response) {
          const validateRes = await fetch("https://shoes-com-npq0.onrender.com/create-order/validate", {
            method: "POST",
            body: JSON.stringify(response),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const result = await validateRes.json();
          console.log("✅ Payment validated:", result);
          toast.success("Payment Successful!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
          });
        },
        prefill: {
          name: "Your Name",
          email: "you@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "User Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("💥 Payment error:", error.message);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <>
      <Header2 />
      <div className="max-w-[97vw] m-auto ml-[150px] p-6 flex gap-16 items-start">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-[500px] h-[450px] object-cover rounded shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center ml-10">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-2">
            ₹{product.price}
          </p>
          <div className="mt-2 mb-6 border-b border-gray-400"></div>

          <p className="text-gray-600 max-w-[600px] mb-[50px]">
            This is a high-quality and stylish pair of shoes designed for
            comfort and performance. Suitable for both casual and sports use.
            Available in multiple sizes and colors.
          </p>
           
           <div className="flex gap-5 justify-center">
            <button onClick={handleMinusQuantity}className="bg-gray-300 hover:bg-gray-400 px-7 py-6">-</button>
            <span className="text-2xl font-semibold flex items-center justify-center">{quantity}</span>
            <button onClick={handlePlusQuantity} className="bg-gray-300 hover:bg-gray-400 px-7 py-6">+</button>
           </div>
          <button
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            onClick={PaymentHandler}
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="mb-10">
        <ProductDetailsAccordion />
      </div>

      <Footer />
    </>
  );
};

export default ViewDetails;
