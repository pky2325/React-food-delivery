import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";


import Navbar from "./Component/Navbar";
// import FoodCard from "./Component/FoodCard";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart />} />
        {/* <Route path="/FoodCard" element={<FoodCard />} /> */}
      </Routes>
    

    </>


  );
}
export default App;