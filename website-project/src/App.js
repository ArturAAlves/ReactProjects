import NavBar from "./navBar.js"
import './css/App.scss';
// import { Route } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import React from "./react"
import GroveryBud from "./groceryBud"
// import ColorGenerator from "./colorgenerator"
import Slider from "./slider"
import Accordion from "./accordion"
import Menu from "./menu"
import SideMenu from "./sideMenu"
import Login from "./login"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => <React />} />
        <Route exact path='/groceryBud' render={() => <GroveryBud />} />
        <Route exact path='/slider' render={() => <Slider />} />
        <Route exact path='/accordion' render={() => <Accordion />} />
        <Route exact path='/menu' render={() => <Menu />} />
        <Route exact path='/sidemenu' render={() => <SideMenu />} />
        <Route exact path='/login' render={() => <Login />} />
        <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} /> */
      </Switch>
    </div>
  );
}

export default App;
