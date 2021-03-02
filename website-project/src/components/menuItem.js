import React, { useState } from 'react';
import "../css/menu.scss"


function MenuItem(menuItem) {
  let { name, price, imgUrl, description } = menuItem

  return (
    <div className="menu-item">
      <img src={imgUrl} alt={name}></img>
      <div>
        <h3>{name} <span>{price}</span></h3>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default MenuItem;
