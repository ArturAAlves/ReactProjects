import React, { useState, useRef, useEffect } from "react"
import { links } from './components/links';
import './css/navbar.scss'

function Navbar() {
  const [mobile, Setmobile] = useState(false)
  const [loaded, Setloaded] = useState(false)

  const containerLinks = useRef(null)
  const linksList = useRef(null)

  function handleHamburguer() {
    Setmobile(ele => ele = !ele)
    Setloaded(ele => ele = true)
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://iconape.com/wp-content/files/gu/371380/svg/371380.svg" alt="logo"></img>
      </div>
      <div ref={containerLinks} className={mobile ? "navbar-links navbar-mobile" : loaded ? "navbar-desktop navbar-links" : "navbar-links"} >
        <ul ref={linksList} className="links">{
          links.map((link, i) => {
            const { text, url } = link
            return <li key={i} className="link"><a href={url}>{text}</a></li>
          })}
        </ul>
      </div>
      <div className="hamburger" onClick={handleHamburguer} >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav >
  );
}

export default Navbar;
