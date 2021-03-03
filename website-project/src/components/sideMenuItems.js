import React, { useState } from 'react';
import "../css/sidemenu.scss"


function SideMenuItems() {
  const menuList = [
    {
      name: "IceCream  Popstickle",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
      type: `sweets`
    },
    {
      name: "Raisens",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.` ,
      type: `sweets`
    },
    {
      name: "Honey Pancakes",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.` ,
      type: `pancakes`
    },
  ]

  const [menu, setMenu] = useState(() => [...menuList]);


  return (
    <div className="sidemenu-item">
      <h2>Side Menu</h2>




    </div>
  );
}

export default SideMenuItems;
