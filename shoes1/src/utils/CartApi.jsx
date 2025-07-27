

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export const fetchUserCart = async (email) => {
  try {
    const url = `${BASE_URL}/cart/${email}`;
    console.log("Calling cart API:", url);

    const res = await axios.get(url);
    
    if (typeof res.data !== 'object') {
      console.error('Invalid cart data', res.data);
      return {
        page1: [], page2: [], page3: [], page4: [], page5: []
      };
    }

    return res.data;
  } catch (err) {
    console.error('Failed to fetch cart:', err);
    return {
      page1: [], page2: [], page3: [], page4: [], page5: []
    };
  }
};



export const updateUserCart = async (email, cart) => {
  try {
    const res = await axios.post(`${BASE_URL}/update-cart`, {
      Email: email,
      cart,
    });
    return res.data;
  } catch (err) {
    console.error('Failed to update cart:', err);
    return { success: false };
  }
};
