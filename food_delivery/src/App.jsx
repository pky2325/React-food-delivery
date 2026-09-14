import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";


import Navbar from "./Component/Navbar";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    

    </>


  );
}
export default App;