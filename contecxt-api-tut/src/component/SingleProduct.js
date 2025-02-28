import { useContext } from "react";
import {cartContext} from"./Context";


const SingleProduct = ({ prod }) => {
const{cart,setCart}=useContext(cartContext)


    return (
        <div className="products">
            <img src={prod.image} alt="error"></img>
            <div className="productDesc">
                <span style={{ fontWeight: 700 }}>{prod.name}</span>
                <span>{prod.price.toString(0, 3)}</span>
            </div>
            {cart?.includes(prod) ? (
                <button onClick={() => {
                    setCart(cart.filter((c) => c.id !== prod.id));
                }}>remove from cart </button>
            ) : (
                <button onClick={() => {
                    setCart([...cart, prod]);
                }}>Add to cart </button>

            )}



        </div>
    )
}

export default SingleProduct;