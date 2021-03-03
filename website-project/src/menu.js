import React, { useState } from 'react';
import "./css/menu.scss"
import MenuItem from "./components/menuItem"

import img1 from "../src/assets/img-menu/1.jpg"
import img2 from "../src/assets/img-menu/2.jpg"
import img3 from "../src/assets/img-menu/3.jpg"
import img4 from "../src/assets/img-menu/4.jpg"
import img5 from "../src/assets/img-menu/5.jpg"
import img6 from "../src/assets/img-menu/6.jpg"
import img7 from "../src/assets/img-menu/7.jpg"
import img8 from "../src/assets/img-menu/8.jpg"


function Menu() {
  const menuList = [
    {
      id: 1,
      name: "IceCream  Popstickle",
      price: 0.99,
      imgUrl: img1,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
      type: `sweets`
    },
    {
      id: 2,
      name: "Raisens",
      price: 1.99,
      imgUrl: img2,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.` ,
      type: `sweets`
    },
    {
      id: 3,
      name: "Honey Pancakes",
      price: 2.99,
      imgUrl: img3,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.` ,
      type: `pancakes`
    },
    {
      id: 4,
      name: "Buiscuits with syrope",
      price: 2.99,
      imgUrl: img4,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
      type: `sweets`
    },
    {
      id: 5,
      name: "Roasted Almons",
      price: 2.99,
      imgUrl: img5,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.` ,
      type: `fruits`
    },
    {
      id: 6,
      name: "Sweet PopCorn",
      price: 1.99,
      imgUrl: img6,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
      type: `sweets`
    },
    {
      id: 7,
      name: "Pancakes with Fruit",
      price: 4.99,
      imgUrl: img7,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
      type: `pancakes`
    },
    {
      id: 8,
      name: "Vegetable Soup",
      price: 2.99,
      imgUrl: img8,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
      type: `food`
    }
  ]

  const categorias = new Set(["all", ...menuList.map(item => (item.type))])

  const [menu, setMenu] = useState(() => [...menuList]);
  const [categories, setCategories] = useState(() => [...categorias]);

  // let menuReduced = () => (
  //   menu.reduce((acc, curr) => {
  //     if (!acc.includes(curr.type)) {
  //       acc.push(curr.type)
  //     }
  //     return acc
  //   }, ["All"])
  // )

  let filter = (type) => {
    if (type === "all") {
      setMenu(oldList => oldList = menuList)
    }
    else {
      let newArr = menuList.filter(items => (
        items.type === type
      ))
      setMenu(oldList => oldList = newArr)
    }
  }

  return (
    <div className="menu-container">
      <h2>Menu List</h2>
      <div>
        {
          categories.map(item => {
            return <button onClick={() => filter(item)}>{item}</button>
          })
        }
      </div>
      {
        //render menuitems
        menu.map(item => {
          return <MenuItem {...item} />
        })
      }

    </div>
  );
}

export default Menu;
