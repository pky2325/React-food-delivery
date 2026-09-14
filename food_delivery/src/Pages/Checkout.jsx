import { useState } from "react";
function Checkout(){
    const [name, setName] = useState(" ");

      function handleSubmit(e){
        e.preventDefault();
      }
    return(
        <form onSubmit={handleSubmit}>

            <input type = "text"
            value={name}
            onChange={e=>setName(e.target.value)}
            />
            
            <button>Place Order</button>


        </form>
    )


}
export default Checkout;