import { useEffect, useState } from "react";
import { Product4 } from "./productcarts/Product4";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity3, changeQuantity5 } from "./Store/Cart"; 

function Cartitems3(props) {
    const { productId } = props.data;
    const [detail, setDetail] = useState({});
    const dispatch = useDispatch();

    
    const cartItem = useSelector(state =>
        state.cart.items5.find(item => item.productId === productId)
    );
    const quantity = cartItem?.quantity || 1; 

    useEffect(() => {
        const findDetail = Product4.find(product => product.id === productId);
        setDetail(findDetail || {}); 
    }, [productId]);

    const handlePlusQuantity = () => {
        dispatch(changeQuantity5({
            productId: productId,
            quantity: quantity + 1 
        }));
    };

    const handleMinusQuantity = () => {
        if (quantity > 1) {
            dispatch(changeQuantity5({
                productId: productId,
                quantity: quantity - 1
            }));
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
                    <button className="bg-black hover:bg-slate-800 text-white font-sm py-2 px-4 rounded mt-2 mx-2.5">BUY NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Cartitems3;
