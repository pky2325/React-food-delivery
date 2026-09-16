import { useEffect, useState } from "react";
import FoodCard from "../Component/FoodCard";


function Menu() {
  const [food, setFood] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setFood(data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);

      });
  }, []);

  if (loading) {
    return <h2>Loading......</h2>

  }
  if (error) {
    return <h2>Error:{error}</h2>
  }
  return (
    <div>
      <h1>Menu</h1>

      {food.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img
              src={item.image}
              alt={item.name}
              width="200"
            />

            <p>{item.cuisine}</p>
            <p>{item.rating}</p>

            <FoodCard food={item} />

          </div>
        )

      })}
    </div>
  )


}
export default Menu;


