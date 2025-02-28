import { Link } from "react-router-dom";
import "./Styles.css";
import { useContext } from "react";
import {cartContext} from"./Context";

const Header=()=>{
   const{cart}=useContext(cartContext)

    return(
       <div >
         <span className="header">USE context-api tutorial</span>
          <ul className="nav">
            <li ><Link to ="/">Home Page</Link></li>
            <li ><Link to ="/cart">Cart({cart?.length})</Link></li>
          </ul>
       </div>
    )
}

export default Header;