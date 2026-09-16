import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar(){

  const cart = useSelector(state=>state.cart)
    return(
       <nav>
        <Link to="/">Home</Link> | 
          <Link to="/Menu">Menu</Link> | 
        <Link to="/Checkout">Checkout</Link> | 
        <Link to="/Cart">Cart({cart.length})</Link>

        

        <h1>Food App</h1> 

       </nav>
    
        
    );

}
export default Navbar;

