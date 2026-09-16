import { useDispatch } from "react-redux";
import { addTocart } from "../store/cartSlice";


function FoodCard({food}){
    const dispatch = useDispatch();

    return(
       <>
       {/* <h1>FoodCard</h1> */}
        <button onClick={()=>dispatch(addTocart(food))}>
            Add To Cart
        </button>
       </>
    )

}

export default FoodCard;