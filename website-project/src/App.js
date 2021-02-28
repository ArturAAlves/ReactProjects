import NavBar from "./navBar.js"
import './css/App.scss';
// import { Route } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import React from "./react"
import React2 from "./react2"
import Login from "./login"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => <React />} />
        <Route exact path='/react2' render={() => <React />} />
        <Route exact path='/react2' render={() => <React2 />} />
        <Route exact path='/react2' render={() => <Login />} />
        <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} /> */
      </Switch>

    </div>
  );
}

export default App;
