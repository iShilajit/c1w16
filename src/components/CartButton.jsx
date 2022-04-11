import {useState} from "react";

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const {count,setCount}=useState(0);
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      <button>-</button>
      {/* <p className="count-item">{count}</p> */}
      <button>+</button>
  </div>
  </>;
};
export default CartButton
