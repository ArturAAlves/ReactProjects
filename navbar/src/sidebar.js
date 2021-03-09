import React, { useState, useEffect } from "react"
import { links } from './components/links';
import './css/sidebar.scss'

function SideBar() {
  const [mobile, Setmobile] = useState(false)
  const [loaded, Setloaded] = useState(false)

  function handleHamburguer() {
    Setmobile(lul => lul = !lul)
    Setloaded(lul => lul = true)
  }

  return (
    <nav className="navbar">
      <div className={mobile ? "hamburger-hide" : "hamburger"} onClick={handleHamburguer} >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className={mobile ? "navbar-links navbar-active" : loaded ? "navbar-links navbar-active-loaded " : "navbar-links"} >
        <ul className="links">{
          links.map((link, i) => {
            const { text, url } = link
            return <li key={i} className="link"><a href={url}>{text}</a></li>
          })}
        </ul>
        <div className="close-button" onClick={handleHamburguer} >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      <div className="navbar-logo">
        <img src="https://iconape.com/wp-content/files/gu/371380/svg/371380.svg" alt="logo"></img>
      </div>

    </nav >
  );
}

export default SideBar;
