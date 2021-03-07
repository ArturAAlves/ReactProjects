import "./css/navBar.scss"
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [mobile, setToggle] = useState(false)

  function handleBurguer() {
    setToggle(!mobile)
  }

  function handleClick() {
    if (mobile) {
      setToggle(false)
    }
  }

  let fade = () => {
    return mobile ? "fade" : ""
  }

  return (
    <nav >
      <div className="nav-container">
        <div className="logo">
          <img src="logo.svg" alt="teste"></img>
        </div>
        <div className={mobile ? "hamburger toggle" : "hamburger"} onClick={handleBurguer}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={mobile ? "nav-links open" : "nav-links"}>
          <li className={fade()}><NavLink to="/" onClick={handleClick}> Home</NavLink></li>
          <li className={fade()}><NavLink to="/groceryBud" onClick={handleClick}>Grocery Bud</NavLink></li>
          <li className={fade()}><NavLink to="/slider" onClick={handleClick}> Slider</NavLink></li>
          <li className={fade()}><NavLink to="/accordion" onClick={handleClick}> accordion</NavLink></li>
          <li className={fade()}><NavLink to="/menu" onClick={handleClick}> menu</NavLink></li>
          <li className={fade()}><NavLink to="/sidemenu" onClick={handleClick}> Sidemenu</NavLink></li>
          <NavLink className={`login-button ${fade()}`} to="/login" onClick={handleClick}> Login</NavLink>
          {/* <li className={fade()}><button className="login-button" href="#">Login</button></li> */}
        </ul >
      </div>
    </nav>
  )
}

  //       <NavLink exact className="nav-link" activeClassName='active-link' to='/'>
  // Home
  //       </NavLink>
  //       <NavLink exact className="nav-link" activeClassName='active-link' to='/Drinks'>
  //   Drinks
  //       </NavLink>
  //       <NavLink exact className="nav-link" activeClassName='active-link' to='/Snacks'>
  //   Snacks
  //       </NavLink>
  //       <NavLink exact className="nav-link" activeClassName='active-link' to='/Sardines'>
  //   Sardines
  //       </NavLink>