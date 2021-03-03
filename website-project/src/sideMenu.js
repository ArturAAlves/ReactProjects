import React, { useState } from 'react';
// import { Route, Switch } from "react-router-dom";
import "./css/sidemenu.scss"
import SideMenuItems from "./components/sideMenuItems"

function SideMenu() {
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
    <div className="sidemenu-container">
      <h2>Side Menu</h2>
      <div className="sidemenu-bar">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        {/* <Switch>
          <Route exact path='/' render={() => <React />} />
          <Route exact path='/react2' render={() => <React2 />} />
          <Route exact path='/accordion' render={() => <Accordion />} />
        </Switch> */}
      </div>
      <div className="sidemenu-content">
        <SideMenuItems />

      </div>

    </div>
  );
}

export default SideMenu;
