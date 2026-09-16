import{ useSelector } from "react-redux";
import {Link } from "react-router-dom";



function Cart(){
    const cart = useSelector(state=>state.cart)

    return(
        <div>
            {cart.map((item)=>{
                return <p key={item.id}>{item.name}</p>
            })}

            <Link to="Checkout">Checkout</Link>

        </div>
    )
}
export default Cart;