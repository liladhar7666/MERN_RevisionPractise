import React from "react";

let Items = []
// let Items = ["Oil", "Icecream", "Charger", "Light", "cloths", "books","Toy"];

// let Empty = Items.length === 0 ? <h4>Shop is Empty</h4> :null

function App() {
  // if(Items.length === 0){
  //    return <h4>Shop is close</h4>
  // }
  return (
    <React.Fragment>
      <h1>Shop Status</h1>

    {Items.length === 0 && <h4>Sjop is Empty</h4> }

    {/* {Empty} */}
      {/* {Items.length === 0 ? <h4>Shop is Empty</h4> :null} */}

      <center>
        <ul className="list-group list-group-flush">
          {/* {Items.map((item) => (
            <li class="list-group-item">{item}</li>
          ))} */}
          {Items.map(item => (
            <li key={item} class="list-group-item">{item}</li>
          ))}
          {/* <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li> */}
        </ul>
      </center>
    </React.Fragment>
  );
}

export default App;
