import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { loadCartFromDB } from '../Store/Cart';
import Footer from '../Footer';
import axios from 'axios';

import Cartitems from '../Cartitems';
import Cartitems2 from '../Cartitems2';
import Cartitems3 from '../Cartitems3';
import Cartitems4 from '../Cartitems4';
import Cartitems5 from '../Cartitems5';

function Cart1() {
  const dispatch = useDispatch();
  const email = localStorage.getItem('userEmail');

  const cart = useSelector(state => state.cart.items || {});
  const cartItems = cart.page1 || [];
  const cartItems2 = cart.page2 || [];
  const cartItems3 = cart.page3 || [];
  const cartItems4 = cart.page4 || [];
  const cartItems5 = cart.page5 || [];

  // ✅ Fetch Cart
  useEffect(() => {
    const loadUserCart = async () => {
      if (email) {
        try {
          const token = localStorage.getItem("token"); // Ensure token is stored after login
          if (!token) {
            console.warn("No token found — skipping cart load");
            return;
          }
  
          const res = await axios.get(`/cart/${email}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (typeof res.data === 'object') {
            dispatch(loadCartFromDB(res.data));
          } else {
            console.error("Invalid cart data", res.data);
          }
        } catch (err) {
          if (err.response) {
            console.error("Failed to load user cart:", err.response.status, err.response.data);
          } else {
            console.error("Failed to load user cart:", err.message);
          }
        }
      }
    };
  
    loadUserCart();
  }, [email, dispatch]);
  

  // ✅ Save Cart
  useEffect(() => {
    const updateUserCart = async () => {
      try {
        const token = localStorage.getItem("token"); // get token stored after login
  
        if (!token) {
          console.warn("No token found — skipping cart update");
          return;
        }
  
        await axios.post(
          '/update-cart',
          { Email: email, cart },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (err) {
        if (err.response) {
          console.error("Failed to update cart:", err.response.status, err.response.data);
        } else {
          console.error("Failed to update cart:", err.message);
        }
      }
    };
  
    if (email) updateUserCart();
  }, [cart, email]);
  

  return (
    <div>
      <div className="text-center justify-center items-center ml-2 text-4xl mt-0">Cart items</div>
      

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
      {cartItems.map(item => (
          <Cartitems key={item.productId} data={item} />
        ))}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {cartItems2.map(item => (
          <Cartitems2 key={item.productId} data={item} />
        ))}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {cartItems3.map(item => (
          <Cartitems3 key={item.productId} data={item} />
        ))}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {cartItems4.map(item => (
          <Cartitems4 key={item.productId} data={item} />
        ))}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {cartItems5.map(item => (
          <Cartitems5 key={item.productId} data={item} />
        ))}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Cart1;
