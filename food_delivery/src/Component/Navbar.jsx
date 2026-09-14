import {Link} from "react-router-dom";
function Navbar(){
    return(
       <navbar>
        <Link to="/">Home</Link> | 
          <Link to="/Menu">Menu</Link> | 
        <Link to="/Checkout">Checkout</Link> | 
        <Link to="/Cart">Cart</Link>


        <h1>Food App</h1> 

       </navbar>
    
        
    );

}
export default Navbar;

