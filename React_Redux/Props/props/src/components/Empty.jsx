import React from "react"

let Items = []
// let Items = ["Oil", "Icecream", "Charger", "Light", "cloths", "books","Toy"];

function Empty({item}) {
  return <>
     {Items.length === 0 && <h4>Shop is Empty</h4> }
  </>
}

export default Empty