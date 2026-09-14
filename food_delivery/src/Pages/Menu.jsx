import Cart from "../Component/FoodCart"


const foods = [
  { id: 1, name: "Momo", price: 250 },
  { id: 2, name: "Chowmin", price: 450 },
  {id: 3, name:"samosa", price:23}
];
function Menu(){
    return(
        <>
        <h1>Menu</h1>
        <Cart name="Burger" price={120} />
        <Cart name="Pizza" price={900} />
        
      {foods.map(food => (
        <Cart key={food.id}
          name={food.name}
          price={food.price}
        />
      ))}
        
        </>
    )
}
export default Menu;