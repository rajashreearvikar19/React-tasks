import { useEffect ,useState, useContext} from "react";
import SingleProduct from "./SingleProduct";
import {cartContext} from"./Context";

const Cart=()=>{
    const{cart,setCart}=useContext(cartContext)

    const[total,setTotal]=useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0));
    },[cart])
    return(
        <div>
           <span style={{fontWeight:40}}>MY CART</span>
           <span style={{fontWeight:30}}>total: {total} </span>
           <div>
             {
                cart.map((prod)=>(
                     <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />
                ))
             }
           </div>
        </div>
     
    )
}

export default Cart;