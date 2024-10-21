import React from "react";
import Itemlite from "./itemlite";

let Items = ["Oil", "Icecream", "Charger", "Light", "cloths", "books","Toy"];

function Shopitem() {
  return (
    <>
      <ul className="list-group list-group-flush">
        {Items.map((item) => (
          <Itemlite key={item} Shopitem={item}></Itemlite>
        ))}
      </ul>
    </>
  );
}
export default Shopitem;
