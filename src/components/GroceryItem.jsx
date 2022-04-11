
import CartButton from "./CartButton"

// reusable card component

const GroceryItem = ({title,imgURL,mrp,sellingPrice,discount}) => {
  return <>
  <div id="gitem">
<div id="border">
  <h3>{discount}</h3>
  <img src={imgURL} alt="" />
  <h1>{title}</h1>
  <h4>{sellingPrice}</h4><p>{mrp}</p>

</div>
  </div>
  <CartButton/>
  </>;
};
export default GroceryItem;
