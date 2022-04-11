import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
       {
           data.map((el)=>{
               return <GroceryItem sk={el.id} {...el}/>
           })
       }
        </div>
        </>
    )
}
export default GroceryDetails
