import '../css/groceryBud.scss';
import React, { useState } from "react"

let GroceryBudItem = ({ todo, edit, remove, editing }) => {
  return (
    <div className="groceryBudItem">
      <div className="groceryBud-text">
        <h3>{todo}</h3>
      </div>
      {!editing[0] ?
        <div className="groceryBud-buttons">
          <button onClick={edit}>Eddit</button>
          <button onClick={remove}>Remove</button>
        </div> : ""
      }

    </div>
  );
}

export default GroceryBudItem;
