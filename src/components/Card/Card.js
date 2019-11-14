// Dependencies
import React from "react";
import "./style.css";


function Card(props) {
  return (
    <div>
        <div className="col-8-md">
          {/* Div to handle the on click -  */}
          <div onClick={() => props.handleSelect(props.id)} className={(props.guess===false) ? "card " : "card"}>
              {/* Grabs the info about image */}
              <img alt={props.name} src={props.src} />
          </div>
        </div>
    </div>
  );
}

export default Card;