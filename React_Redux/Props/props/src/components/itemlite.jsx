import React from "react";

// function Itemlite({Shopitem})

function Itemlite(props){
  //  let {Shopitem} = props
  return (
  <>
  {/* key={props.Shopitem}/ */}
    <li  className="list-group-item">
     {props.Shopitem}
    </li>
  </>
  )
}

export default Itemlite;