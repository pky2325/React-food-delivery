function FoodCard({name, price}){
    return(
        
        
        <>
        
        
        <h2>{name}</h2>
        <p>₹{price}</p>
        <button>Add to cart</button>
        </>
    )
}
export default FoodCard;