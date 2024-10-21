import React from "react";
import Empty from "./components/Empty";
import Shopitem from "./components/item";

let Items = ["Oil", "Icecream", "Charger", "Light", "cloths", "books","Toy"];


function App() {
  return (
    <React.Fragment>
      <center>
        <h1>Shop Status</h1>

        <Empty item={Items}></Empty>
        <Shopitem item={Items}></Shopitem>
      </center>
    </React.Fragment>
  );
}

export default App;
