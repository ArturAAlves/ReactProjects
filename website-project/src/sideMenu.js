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

  const [menu, setMenu] = useState(() => [menuList[0]]);



  let filter = (x) => {
    let list = menuList.filter((item, i) => {
      return i === x ? item : ""
    })
    return setMenu(list)
  }

  return (
    <div className="sidemenu-container">
      <h2>Side Menu</h2>
      <div className="sidemenu-bar">
        {
          menuList.map((item, i) => {
            return <button onClick={() => filter(i)}>{item.name}</button>
          })
        }
        {/* <Switch>
          <Route exact path='/' render={() => <React />} />
          <Route exact path='/react2' render={() => <React2 />} />
          <Route exact path='/accordion' render={() => <Accordion />} />
        </Switch> */}
      </div>
      <div className="sidemenu-content">
        {
          menu.map(item => {
            return <SideMenuItems {...item} />
          })

        }




      </div>

    </div>
  );
}

export default SideMenu;
