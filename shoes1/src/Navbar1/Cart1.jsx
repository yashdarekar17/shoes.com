import { useSelector } from 'react-redux';
import Cartitems from '../Cartitems';
import Cartitems2 from '../Cartitems2';
import Cartitems3 from '../Cartitems3';
import Cartitems5 from '../Cartitems5';
import Cartitems4 from '../Cartitems4';

function Cart1() {
    const cartItems = useSelector(state => state.cart.items || []); // Adjust according to your state structure
    const cartItems2 = useSelector(state => state.cart.items2 || []);
    const cartItems3 = useSelector(state => state.cart.items3 || []);
    const cartItems4 = useSelector(state => state.cart.items4 || []);
    const cartItems5 = useSelector(state => state.cart.items5 || []);

    return (
        <div>
            <div className='text-center justify-center items-center ml-2 text-4xl mt-0'>Cart items</div>
            <div  className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {cartItems.length === 0 ? (
                <p className='flex justify-center items-center text-2xl'>Your cart is empty.</p>
            ) : (
                cartItems.map(item => (
                    
                          <Cartitems key={item.productId} data={item} />
                ))
   
            )}
            </div>
            <div  className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5' >
            {cartItems2.length === 0 ? (
                <p className='flex justify-center items-center text-2xl'></p>
            ) : (
                cartItems2.map(item => (
                    
                          <Cartitems2 key={item.productId} data={item} />
                ))
   
            )}
            </div>
            <div  className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5' >
            {cartItems3.length === 0 ? (
                <p className='flex justify-center items-center text-2xl'></p>
            ) : (
                cartItems3.map(item => (
                    
                          <Cartitems3 key={item.productId} data={item} />
                ))
   
            )}
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {cartItems4.length === 0 ? (
                <p className='flex justify-center items-center text-2xl'></p>
            ) : (
                cartItems4.map(item => (
                    
                          <Cartitems4 key={item.productId} data={item} />
                ))
   
            )}
            </div>
            <div  className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5' >
            {cartItems5.length === 0 ? (
                <p className='flex justify-center items-center text-2xl'></p>
            ) : (
                cartItems5.map(item => (
                    
                          <Cartitems5 key={item.productId} data={item} />
                ))
   
            )}
            </div>
           
        </div>
    );
}

export default Cart1
